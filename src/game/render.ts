import { fromScreen, TILE_H, TILE_W, toScreen } from "./isometric";
import type { MapData } from "./maps/types";

const images = new Map<string, HTMLImageElement>();

export function loadImage(src: string) {
  const hit = images.get(src);
  if (hit) return hit;
  const img = new Image();
  img.src = src;
  images.set(src, img);
  return img;
}

const TILE_SRC: Record<string, string> = {
  ".": "/game/tiles/grass.webp",
  ",": "/game/tiles/dirt.webp",
  c: "/game/tiles/cobble.webp",
  "#": "/game/tiles/cobble.webp",
};

/** Four directions stacked in one sheet: 0 south, 1 west, 2 north, 3 east. Frame height 64. */
export const ATLAS = {
  frame: 64,
  dirs: ["south", "west", "north", "east"] as const,
  files: {
    m: "/game/characters/player-m.webp",
    f: "/game/characters/player-f.webp",
    civilian: "/game/characters/civilian.webp",
    wehrmacht: "/game/characters/wehrmacht.webp",
    ija: "/game/characters/ija.webp",
  },
};

export function drawWorld(
  ctx: CanvasRenderingContext2D,
  map: MapData,
  actor: { c: number; r: number; facing: number; src: string },
  width: number,
  height: number,
) {
  const origin = toScreen(actor.c, actor.r, 0, 0);
  const camX = width / 2 - origin.x;
  const camY = height / 2 - origin.y + 40;
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#1c1712";
  ctx.fillRect(0, 0, width, height);
  for (const src of Object.values(ATLAS.files)) loadImage(src);

  for (let r = 0; r < map.rows; r++) {
    for (let c = 0; c < map.cols; c++) {
      const cell = map.grid[r][c];
      const p = toScreen(c, r, camX, camY);
      const img = loadImage(TILE_SRC[cell] ?? TILE_SRC["."]);
      if (img.complete && img.naturalWidth) {
        ctx.drawImage(img, p.x - TILE_W / 2, p.y, TILE_W, TILE_H);
      } else {
        ctx.fillStyle = cell === "#" ? "#5c5348" : "#6d7a52";
        diamond(ctx, p.x, p.y + TILE_H / 2);
      }
    }
  }

  const sprites: { y: number; draw: () => void }[] = [];
  for (const prop of map.props) {
    const p = toScreen(prop.c, prop.r, camX, camY);
    sprites.push({
      y: prop.c + prop.r,
      draw: () => {
        const img = loadImage(prop.src);
        if (img.complete && img.naturalWidth) ctx.drawImage(img, p.x - prop.w / 2, p.y - prop.h + TILE_H, prop.w, prop.h);
      },
    });
  }
  const ap = toScreen(actor.c, actor.r, camX, camY);
  sprites.push({
    y: actor.c + actor.r,
    draw: () => {
      const img = loadImage(actor.src);
      const fh = ATLAS.frame;
      if (img.complete && img.naturalWidth) {
        ctx.drawImage(img, 0, actor.facing * fh, 64, fh, ap.x - 20, ap.y + TILE_H / 2 - 56, 40, 64);
      }
    },
  });
  sprites.sort((a, b) => a.y - b.y);
  for (const sprite of sprites) sprite.draw();
  return { camX, camY };
}

function diamond(ctx: CanvasRenderingContext2D, x: number, y: number) {
  ctx.beginPath();
  ctx.moveTo(x, y - TILE_H / 2);
  ctx.lineTo(x + TILE_W / 2, y);
  ctx.lineTo(x, y + TILE_H / 2);
  ctx.lineTo(x - TILE_W / 2, y);
  ctx.closePath();
  ctx.fill();
}

export function pointerCell(sx: number, sy: number, camX: number, camY: number) {
  return fromScreen(sx, sy, camX, camY);
}
