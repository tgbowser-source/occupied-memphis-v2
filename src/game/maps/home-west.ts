import type { MapData } from "./types";

/** H2. North leveeside tenant farm. No farm name is locked. */
export const homeWest: MapData = {
  id: "home-west",
  name: "H2",
  pin: "H2",
  side: "west",
  cols: 12,
  rows: 10,
  grid: [
    "............",
    "...######...",
    "...######...",
    "...######...",
    "............",
    ",,,,,,,,,,,,",
    ",,,,,,,,,,,,",
    "............",
    "............",
    "............",
  ],
  props: [
    { id: "house", src: "/game/buildings/home-west.webp", c: 3, r: 1, w: 180, h: 140, sort: 4 },
    { id: "oak", src: "/game/props/oak.webp", c: 9, r: 7, w: 72, h: 80, sort: 16 },
  ],
  spawn: { c: 6, r: 7 },
};
