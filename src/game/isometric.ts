export const TILE_W = 64;
export const TILE_H = 32;

export function toScreen(c: number, r: number, camX: number, camY: number) {
  return {
    x: (c - r) * (TILE_W / 2) + camX,
    y: (c + r) * (TILE_H / 2) + camY,
  };
}

export function fromScreen(sx: number, sy: number, camX: number, camY: number) {
  const x = sx - camX;
  const y = sy - camY;
  const c = (x / (TILE_W / 2) + y / (TILE_H / 2)) / 2;
  const r = (y / (TILE_H / 2) - x / (TILE_W / 2)) / 2;
  return { c, r };
}

/** Screen-relative step. W is up the screen. Diagonals are normalized by the caller. */
export function screenStep(key: "w" | "a" | "s" | "d"): { dc: number; dr: number } {
  if (key === "w") return { dc: -1, dr: -1 };
  if (key === "s") return { dc: 1, dr: 1 };
  if (key === "a") return { dc: -1, dr: 1 };
  return { dc: 1, dr: -1 };
}
