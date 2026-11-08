import { useEffect, useRef, type PointerEvent as ReactPointerEvent } from "react";
import { blocked } from "../game/collision";
import { bindKeys, held } from "../game/input";
import { screenStep, toScreen } from "../game/isometric";
import { MAPS } from "../game/maps";
import { ATLAS, drawWorld } from "../game/render";
import { useGame } from "../game/store";

const STEP_S = 0.16;

function press(code: string) {
  return {
    onPointerDown: (e: ReactPointerEvent<HTMLButtonElement>) => {
      e.preventDefault();
      e.currentTarget.setPointerCapture(e.pointerId);
      held.add(code);
    },
    onPointerUp: () => held.delete(code),
    onPointerCancel: () => held.delete(code),
  };
}

export function WorldCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  const mapId = useGame((s) => s.mapId);
  const gender = useGame((s) => s.gender);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let raf = 0;
    let acc = 0;
    let last = performance.now();
    let steps = 0;
    const unbind = bindKeys((code) => {
      if (useGame.getState().dialogueOpen) return;
      if (code === "KeyE") useGame.getState().setMenu(useGame.getState().menu === "rep" ? null : "rep");
      if (code === "KeyQ") useGame.getState().saveFree();
    });
    const stepOnce = () => {
      const s = useGame.getState();
      if (s.dialogueOpen || s.screen !== "world") return false;
      let dc = 0;
      let dr = 0;
      const add = (key: "w" | "a" | "s" | "d", ...codes: string[]) => {
        if (!codes.some((code) => held.has(code))) return;
        const step = screenStep(key);
        dc += step.dc;
        dr += step.dr;
      };
      add("w", "KeyW", "ArrowUp");
      add("a", "KeyA", "ArrowLeft");
      add("s", "KeyS", "ArrowDown");
      add("d", "KeyD", "ArrowRight");
      if (!dc && !dr) return false;
      const len = Math.hypot(dc, dr);
      const stepC = Math.sign(dc / len);
      const stepR = Math.sign(dr / len);
      const map = MAPS[s.mapId];
      const nc = s.c + stepC;
      const nr = s.r + stepR;
      if (map && !blocked(map, nc, nr)) useGame.setState({ c: nc, r: nr });
      let facing: 0 | 1 | 2 | 3 = s.facing;
      if (stepC === 0 && stepR > 0) facing = 0;
      else if (stepC < 0) facing = 1;
      else if (stepR < 0 && stepC === 0) facing = 2;
      else if (stepC > 0) facing = 3;
      useGame.getState().setFacing(facing);
      steps += 1;
      return true;
    };
    window.__controlsTest = {
      getYaw: () => useGame.getState().facing,
      getSpeed: () => steps,
      setKeys: (codes) => {
        held.clear();
        for (const code of codes) held.add(code);
      },
      getPos: () => {
        const s = useGame.getState();
        const p = toScreen(s.c, s.r, 0, 0);
        return { c: s.c, r: s.r, x: p.x, y: p.y };
      },
    };
    const loop = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      acc += dt;
      if (acc > STEP_S) {
        acc = 0;
        stepOnce();
      }
      const parent = canvas.parentElement;
      const w = parent?.clientWidth ?? 800;
      const h = parent?.clientHeight ?? 500;
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      const bw = Math.max(1, Math.floor(w * dpr));
      const bh = Math.max(1, Math.floor(h * dpr));
      if (canvas.width !== bw || canvas.height !== bh) {
        canvas.width = bw;
        canvas.height = bh;
      }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const live = useGame.getState();
      const map = MAPS[live.mapId];
      if (map) {
        drawWorld(
          ctx,
          map,
          { c: live.c, r: live.r, facing: live.facing, src: live.gender === "f" ? ATLAS.files.f : ATLAS.files.m },
          w,
          h,
        );
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      unbind();
      held.clear();
      if (window.__controlsTest) delete window.__controlsTest;
    };
  }, [mapId, gender]);

  return (
    <>
      <canvas ref={ref} className="world" />
      <div className="dpad" aria-label="Move">
        <button type="button" className="pad up" aria-label="Up" {...press("KeyW")}>↑</button>
        <button type="button" aria-label="Left" {...press("KeyA")}>←</button>
        <button type="button" aria-label="Down" {...press("KeyS")}>↓</button>
        <button type="button" aria-label="Right" {...press("KeyD")}>→</button>
      </div>
    </>
  );
}
