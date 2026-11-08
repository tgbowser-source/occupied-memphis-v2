import { FACTION_SHOP_DISCOUNT_PER_POINT, SDB_PER_US_MARK } from "./config";

export type Tender = "usm" | "sdb";

/** Both currencies are accepted on either bank. */
export function accepts(tender: Tender, _bank: "east" | "west") {
  return tender === "usm" || tender === "sdb";
}

export function marksToSdb(marks: number) {
  return marks * SDB_PER_US_MARK;
}

export function sdbToMarks(notes: number) {
  return notes / SDB_PER_US_MARK;
}

/** Faction desks only. Civilian prices ignore standing. */
export function factionPrice(base: number, standing: number) {
  const discounted = base * (1 - standing * FACTION_SHOP_DISCOUNT_PER_POINT);
  return Math.max(1, Math.round(discounted * 100) / 100);
}

export function civilianPrice(base: number, _standing: number) {
  return base;
}
