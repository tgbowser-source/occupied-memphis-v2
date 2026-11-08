/** Economy and save placeholders. Not locked design facts. */

/** TBD, unapproved. Means 1 US Mark = 2 SDB notes. Not an approved rate. */
export const SDB_PER_US_MARK = 2;

/** TBD, unapproved. Clamp the result so a price cannot go below 1. */
export const FACTION_SHOP_DISCOUNT_PER_POINT = 0.001;

/** TBD. No approved physical checkpoint. Do not treat police posts as saves. */
export const SAVE_CHECKPOINT_LOCATIONS: readonly string[] = [];

/** TBD, unapproved. Not a historical wage. */
export const WORK_WAGE_PROPOSED = 1;

/** TBD, unapproved. Minutes advanced by one work beat. */
export const WORK_MINUTES_PROPOSED = 480;

/**
 * TBD. The source says a large or slight reputation bump and does not give a number.
 * Meters stay unchanged until a number is locked. The flag that the bump was recorded is separate.
 */
export const REP_BUMP_AMOUNT: "TBD" = "TBD";

export const SAVE_KEY = "occupied-memphis-fresh-saves-v1";
export const SAVE_VERSION = 1;

export const CHILDHOOD_TOKENS = ["cotton", "trusses", "papers", "choir", "river", "tornado"] as const;

export const FACTION_IDS = [
  "RES-E",
  "RES-W",
  "WEH",
  "SS",
  "GES",
  "VAL",
  "IJA",
  "KEM",
  "TOK",
  "IMP",
] as const;

export const FACTION_LABEL: Record<(typeof FACTION_IDS)[number], string> = {
  "RES-E": "Anti-German Resistance",
  "RES-W": "Anti-Japanese Resistance",
  WEH: "Wehrmacht",
  SS: "SS",
  GES: "Gestapo",
  VAL: "Valkyrie Circle",
  IJA: "Imperial Japanese Army",
  KEM: "Kempeitai",
  TOK: "Tokkō",
  IMP: "Imperialist faction",
};
