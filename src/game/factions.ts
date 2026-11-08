import { FACTION_IDS, FACTION_LABEL } from "./config";
import type { FactionId, Side } from "./types";

export { FACTION_IDS, FACTION_LABEL };

export function emptyFactions(): Record<FactionId, number> {
  return Object.fromEntries(FACTION_IDS.map((id) => [id, 0])) as Record<FactionId, number>;
}

export function overlordId(side: Side): FactionId {
  return side === "east" ? "GES" : "TOK";
}

export function bankFactionIds(side: Side): FactionId[] {
  return side === "east"
    ? ["RES-E", "WEH", "SS", "GES", "VAL"]
    : ["RES-W", "IJA", "KEM", "TOK", "IMP"];
}
