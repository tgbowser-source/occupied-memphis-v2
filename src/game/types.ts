import type { CHILDHOOD_TOKENS, FACTION_IDS } from "./config";

export type Side = "east" | "west";
export type Gender = "m" | "f";
export type Difficulty = "story" | "easy" | "normal" | "hard" | "survival";
export type FactionId = (typeof FACTION_IDS)[number];
export type ChildhoodToken = (typeof CHILDHOOD_TOKENS)[number];

export type Appearance = {
  hair: "dark" | "brown" | "blonde" | "auburn";
  build: "slight" | "average" | "sturdy";
};

/** Free text. No personality list is locked. */
export type Personality = string;

export type Screen = "title" | "create" | "birthday" | "world" | "complete";

export type StoryFlags = {
  joinAgency: boolean;
  stayWork: boolean;
  coerced: boolean;
  workedOnce: boolean;
  raidSeen: boolean;
  hqReported: boolean;
  connorChoice: "disclose" | "covert" | null;
  repRecorded: string[];
};

export type SaveShape = {
  version: number;
  firstName: string;
  gender: Gender;
  appearance: Appearance;
  personality: Personality;
  side: Side;
  knife: boolean;
  difficulty: Difficulty;
  childhood: ChildhoodToken[];
  usm: number;
  sdb: number;
  usd: number;
  alignment: number;
  factions: Record<FactionId, number>;
  civilians: number;
  flags: StoryFlags;
  nodeId: string | null;
  mapId: string;
  c: number;
  r: number;
  facing: 0 | 1 | 2 | 3;
  screen: Screen;
  dialogueOpen: boolean;
  applied: string[];
};
