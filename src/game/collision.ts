import type { MapData } from "./maps/types";

export function blocked(map: MapData, c: number, r: number) {
  if (c < 0 || r < 0 || c >= map.cols || r >= map.rows) return true;
  return map.grid[r][c] === "#";
}
