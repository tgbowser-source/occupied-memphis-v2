import type { MapData } from "./types";

/** R1. A. Schwab, 163–165 Beale. A small contact room, not the whole store. */
export const contactEast: MapData = {
  id: "contact-east",
  name: "A. Schwab",
  pin: "R1",
  side: "east",
  cols: 8,
  rows: 6,
  grid: ["########", "#......#", "#......#", "#..##..#", "#......#", "########"],
  props: [{ id: "counter", src: "/game/props/desk.webp", c: 2, r: 3, w: 80, h: 60, sort: 5 }],
  spawn: { c: 4, r: 4 },
};
