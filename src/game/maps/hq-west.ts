import type { MapData } from "./types";

/** HQ-W. West Memphis City Hall, 100 Court Street, completed 1939. */
export const hqWest: MapData = {
  id: "hq-west",
  name: "West Memphis City Hall",
  pin: "HQ-W",
  side: "west",
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
