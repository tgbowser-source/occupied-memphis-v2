import type { MapData } from "./types";

/** R3. 8th Street café. The business name is TBD and is not locked here. */
export const contactWest: MapData = {
  id: "contact-west",
  name: "8th Street café",
  pin: "R3",
  side: "west",
  cols: 8,
  rows: 6,
  grid: ["########", "#......#", "#......#", "#..##..#", "#......#", "########"],
  props: [{ id: "counter", src: "/game/props/desk.webp", c: 2, r: 3, w: 80, h: 60, sort: 5 }],
  spawn: { c: 4, r: 4 },
};
