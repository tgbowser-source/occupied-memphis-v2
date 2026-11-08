import type { MapData } from "./types";

/** HQ-E. Sterick Building, Madison and N. Third. Interior staging is not a claimed floor plan. */
export const hqEast: MapData = {
  id: "hq-east",
  name: "Sterick Building",
  pin: "HQ-E",
  side: "east",
  cols: 10,
  rows: 8,
  grid: [
    "##########",
    "#........#",
    "#........#",
    "#...##...#",
    "#........#",
    "#........#",
    "#........#",
    "##########",
  ],
  props: [{ id: "desk", src: "/game/props/desk.webp", c: 3, r: 3, w: 90, h: 70, sort: 6 }],
  spawn: { c: 5, r: 5 },
};
