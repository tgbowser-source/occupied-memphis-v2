import type { MapData } from "./types";

/** W1. South Bluffs river-rail factory. The factory name is TBD. */
export const workEast: MapData = {
  id: "work-east",
  name: "W1 factory",
  pin: "W1",
  side: "east",
  cols: 12,
  rows: 8,
  grid: [
    "############",
    "#..........#",
    "#..####....#",
    "#..####....#",
    "#..........#",
    "#..........#",
    "#..........#",
    "############",
  ],
  props: [{ id: "mill", src: "/game/buildings/factory.webp", c: 2, r: 2, w: 150, h: 138, sort: 4 }],
  spawn: { c: 7, r: 5 },
};
