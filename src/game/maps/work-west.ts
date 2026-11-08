import type { MapData } from "./types";

/** W2. Same H2 tract, the work side of the farm. */
export const workWest: MapData = {
  id: "work-west",
  name: "W2 farm",
  pin: "W2",
  side: "west",
  cols: 12,
  rows: 8,
  grid: [
    "............",
    "............",
    "..####......",
    "..####......",
    "............",
    ",,,,,,,,,,,,",
    ",,,,,,,,,,,,",
    "............",
  ],
  props: [{ id: "barn", src: "/game/buildings/home-west.webp", c: 2, r: 2, w: 160, h: 124, sort: 4 }],
  spawn: { c: 7, r: 5 },
};
