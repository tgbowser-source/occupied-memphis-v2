export type Prop = {
  id: string;
  src: string;
  c: number;
  r: number;
  w: number;
  h: number;
  sort: number;
};

export type MapData = {
  id: string;
  name: string;
  pin: string;
  side: "east" | "west";
  cols: number;
  rows: number;
  /** "." grass, "," dirt, "c" cobble, "#" blocked. */
  grid: string[];
  props: Prop[];
  spawn: { c: number; r: number };
};

export function rows(grid: string[]) {
  return grid.map((line) => line.split(""));
}
