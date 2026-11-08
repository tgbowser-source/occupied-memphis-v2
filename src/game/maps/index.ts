import { contactEast } from "./contact-east";
import { contactWest } from "./contact-west";
import { homeEast } from "./home-east";
import { homeWest } from "./home-west";
import { hqEast } from "./hq-east";
import { hqWest } from "./hq-west";
import type { MapData } from "./types";
import { workEast } from "./work-east";
import { workWest } from "./work-west";

export const MAPS: Record<string, MapData> = {
  [homeEast.id]: homeEast,
  [homeWest.id]: homeWest,
  [hqEast.id]: hqEast,
  [hqWest.id]: hqWest,
  [workEast.id]: workEast,
  [workWest.id]: workWest,
  [contactEast.id]: contactEast,
  [contactWest.id]: contactWest,
};

export function homeMapId(side: "east" | "west") {
  return side === "east" ? homeEast.id : homeWest.id;
}
