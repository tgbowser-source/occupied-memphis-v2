import type { MapData } from "./types";

/** H1. Modest East Memphis house. No street address is locked. */
export const homeEast: MapData = {
  id: "home-east",
  name: "H1",
  pin: "H1",
  side: "east",
  cols: 12,
  rows: 10,
  grid: [
    "............",
    "....####....",
    "....####....",
    "....####....",
    "............",
    "..,,,,,,,...",
    "..,,,,,,,...",
    "............",
    "............",
    "............",
  ],
  props: [
    { id: "house", src: "/game/buildings/house-east.webp", c: 4, r: 1, w: 168, h: 148, sort: 4 },
    { id: "oak", src: "/game/props/oak.webp", c: 2, r: 6, w: 72, h: 80, sort: 8 },
  ],
  spawn: { c: 6, r: 6 },
};
