import { create } from "zustand";
import { CHILDHOOD_TOKENS, REP_BUMP_AMOUNT, WORK_MINUTES_PROPOSED, WORK_WAGE_PROPOSED } from "./config";
import { nodeById } from "./dialogue/runner";
import { bankFactionIds, emptyFactions } from "./factions";
import { homeMapId, MAPS } from "./maps";
import { freeSaveAllowed, loadSave, writeSave } from "./save";
import type { Appearance, ChildhoodToken, Difficulty, Gender, Personality, SaveShape, Screen, Side, StoryFlags } from "./types";

export type Draft = {
  firstName: string;
  gender: Gender;
  appearance: Appearance;
  personality: Personality;
  side: Side;
  knife: boolean;
  difficulty: Difficulty;
  childhood: ChildhoodToken[];
};

const emptyFlags = (): StoryFlags => ({
  joinAgency: false,
  stayWork: false,
  coerced: false,
  workedOnce: false,
  raidSeen: false,
  hqReported: false,
  connorChoice: null,
  repRecorded: [],
});

export type GameStore = SaveShape & {
  draft: Draft;
  devNote: string;
  menu: null | "rep" | "save" | "economy";
  setDraft: (patch: Partial<Draft>) => void;
  toggleToken: (id: ChildhoodToken) => void;
  beginCreate: () => void;
  confirmCreate: () => void;
  restart: () => void;
  goTitle: () => void;
  advance: () => void;
  choose: (index: number) => void;
  replayBirthday: () => void;
  goWork: () => void;
  goHq: () => void;
  goContact: () => void;
  showNode: (id: string) => void;
  move: (dc: number, dr: number) => void;
  setFacing: (facing: 0 | 1 | 2 | 3) => void;
  setMenu: (menu: GameStore["menu"]) => void;
  saveFree: () => boolean;
  saveCheckpoint: () => boolean;
  continueGame: () => boolean;
  devYard: () => void;
};

function defaultDraft(): Draft {
  return {
    firstName: "James",
    gender: "m",
    appearance: { hair: "dark", build: "average" },
    personality: "",
    side: "east",
    knife: false,
    difficulty: "normal",
    childhood: [...CHILDHOOD_TOKENS],
  };
}

function blank(draft: Draft): SaveShape {
  const mapId = homeMapId(draft.side);
  const map = MAPS[mapId];
  return {
    version: 1,
    firstName: draft.firstName.trim() || "James",
    gender: draft.gender,
    appearance: draft.appearance,
    personality: draft.personality,
    side: draft.side,
    knife: draft.knife,
    difficulty: draft.difficulty,
    childhood: draft.childhood,
    usm: 0,
    sdb: 0,
    usd: 0,
    alignment: 0,
    factions: emptyFactions(),
    civilians: 0,
    flags: emptyFlags(),
    nodeId: "b-open",
    mapId,
    c: map.spawn.c,
    r: map.spawn.r,
    facing: 0,
    screen: "birthday",
    dialogueOpen: false,
    applied: [],
  };
}

function snapshot(s: GameStore): SaveShape {
  return {
    version: 1,
    firstName: s.firstName,
    gender: s.gender,
    appearance: s.appearance,
    personality: s.personality,
    side: s.side,
    knife: s.knife,
    difficulty: s.difficulty,
    childhood: s.childhood,
    usm: s.usm,
    sdb: s.sdb,
    usd: s.usd,
    alignment: s.alignment,
    factions: s.factions,
    civilians: s.civilians,
    flags: s.flags,
    nodeId: s.nodeId,
    mapId: s.mapId,
    c: s.c,
    r: s.r,
    facing: s.facing,
    screen: s.screen,
    dialogueOpen: s.dialogueOpen,
    applied: s.applied,
  };
}

function recordRep(flags: StoryFlags, key: string): StoryFlags {
  if (flags.repRecorded.includes(key)) return flags;
  return { ...flags, repRecorded: [...flags.repRecorded, key] };
}

export const useGame = create<GameStore>((set, get) => ({
  ...blank(defaultDraft()),
  screen: "title",
  draft: defaultDraft(),
  devNote: REP_BUMP_AMOUNT === "TBD" ? "Reputation amounts are TBD and are not applied as numbers." : "",
  menu: null,
  setDraft: (patch) => set({ draft: { ...get().draft, ...patch } }),
  toggleToken: (id) => {
    const cur = get().draft.childhood;
    const childhood = cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id];
    set({ draft: { ...get().draft, childhood } });
  },
  beginCreate: () => set({ screen: "create", draft: defaultDraft() }),
  confirmCreate: () => {
    const next = blank(get().draft);
    set({ ...next, dialogueOpen: true, applied: [], menu: null });
  },
  restart: () => get().confirmCreate(),
  goTitle: () => set({ screen: "title", dialogueOpen: false, menu: null }),
  advance: () => {
    const node = nodeById(get().nodeId);
    if (!node || node.choices?.length) return;
    applyEffect(node.effect, node.id);
    if (node.next) {
      set({ nodeId: node.next, dialogueOpen: true });
      return;
    }
    if (get().dialogueOpen) set({ dialogueOpen: false });
  },
  choose: (index) => {
    const node = nodeById(get().nodeId);
    const choice = node?.choices?.[index];
    if (!node || !choice) return;
    applyEffect(choice.effect, `${node.id}:${choice.id}`);
    set({ nodeId: choice.next, dialogueOpen: true });
  },
  replayBirthday: () => set({ nodeId: "b-open", screen: "birthday", dialogueOpen: true }),
  goWork: () => {
    const side = get().side;
    const mapId = side === "east" ? "work-east" : "work-west";
    const map = MAPS[mapId];
    set({ mapId, c: map.spawn.c, r: map.spawn.r, screen: "world", nodeId: "w-open", dialogueOpen: true });
  },
  goHq: () => {
    const side = get().side;
    const mapId = side === "east" ? "hq-east" : "hq-west";
    const map = MAPS[mapId];
    set({ mapId, c: map.spawn.c, r: map.spawn.r, screen: "world", nodeId: "a-report", dialogueOpen: true });
  },
  goContact: () => {
    const s = get();
    const mapId = s.side === "east" ? "contact-east" : "contact-west";
    const map = MAPS[mapId];
    const nodeId = s.flags.coerced ? "c-raid-line" : "c-open";
    set({ mapId, c: map.spawn.c, r: map.spawn.r, screen: "world", nodeId, dialogueOpen: true });
  },
  showNode: (id) => set({ nodeId: id, dialogueOpen: true }),
  move: (dc, dr) => {
    if (get().dialogueOpen) return;
    const map = MAPS[get().mapId];
    const c = get().c + dc;
    const r = get().r + dr;
    if (!map || map.grid[r]?.[c] === "#" || map.grid[r] === undefined) return;
    set({ c, r });
  },
  setFacing: (facing) => set({ facing }),
  setMenu: (menu) => set({ menu }),
  saveFree: () => {
    const s = get();
    if (!freeSaveAllowed(s.difficulty)) return false;
    writeSave(snapshot(s));
    return true;
  },
  saveCheckpoint: () => {
    writeSave(snapshot(get()));
    return true;
  },
  continueGame: () => {
    const loaded = loadSave();
    if (!loaded) return false;
    set({ ...loaded, menu: null });
    return true;
  },
  devYard: () => {
    const next = blank({ ...get().draft, side: "east" });
    set({ ...next, screen: "world", dialogueOpen: false, nodeId: null });
  },
}));

function applyEffect(effect: string | undefined, key: string) {
  if (!effect) return;
  const s = useGame.getState();
  if (s.applied.includes(key)) return;
  const flags = { ...s.flags, repRecorded: [...s.flags.repRecorded] };
  let patch: Partial<GameStore> = { applied: [...s.applied, key] };
  if (effect === "join-agency" && !flags.stayWork) flags.joinAgency = true;
  if (effect === "stay-work" && !flags.joinAgency) flags.stayWork = true;
  if (effect === "enter-home") {
    const map = MAPS[homeMapId(s.side)];
    patch = { ...patch, screen: "world", dialogueOpen: false, mapId: map.id, c: map.spawn.c, r: map.spawn.r };
  }
  if (effect === "record-hq-rep") {
    flags.hqReported = true;
    const id = s.flags.coerced ? "coerced-hq" : "voluntary-hq";
    flags.repRecorded = recordRep(flags, id).repRecorded;
  }
  if (effect === "enter-contact") patch = { ...patch, dialogueOpen: false };
  if (effect === "do-work" && !flags.workedOnce) {
    flags.workedOnce = true;
    const paid = s.side === "east" ? { usm: s.usm + WORK_WAGE_PROPOSED } : { sdb: s.sdb + WORK_WAGE_PROPOSED };
    patch = {
      ...patch,
      ...paid,
      devNote: `Work beat +${WORK_MINUTES_PROPOSED} min. WORK_WAGE_PROPOSED=${WORK_WAGE_PROPOSED}. Both are TBD, not a historical wage.`,
    };
    for (const id of bankFactionIds(s.side)) {
      flags.repRecorded = recordRep(flags, `work-${id}`).repRecorded;
    }
  }
  if (effect === "coerce") {
    flags.coerced = true;
    flags.raidSeen = true;
    flags.repRecorded = recordRep(flags, "coerced").repRecorded;
    const mapId = s.side === "east" ? "hq-east" : "hq-west";
    const map = MAPS[mapId];
    patch = { ...patch, mapId, c: map.spawn.c, r: map.spawn.r, screen: "world" };
  }
  if (effect === "disclose") flags.connorChoice = "disclose";
  if (effect === "covert") flags.connorChoice = "covert";
  if (effect === "complete") patch = { ...patch, screen: "complete", dialogueOpen: false };
  useGame.setState({ ...patch, flags });
}

export type { Screen };
