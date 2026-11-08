import { SAVE_KEY, SAVE_VERSION } from "./config";
import type { SaveShape } from "./types";

type Disk = { version: number; slot: SaveShape | null };

function empty(): Disk {
  return { version: SAVE_VERSION, slot: null };
}

function parse(raw: string | null): Disk | null {
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as Disk;
    if (!parsed || parsed.version !== SAVE_VERSION || !parsed.slot) return null;
    if (parsed.slot.version !== SAVE_VERSION || typeof parsed.slot.firstName !== "string") return null;
    if (!parsed.slot.mapId || !parsed.slot.flags) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function readDisk(): Disk {
  const primary = parse(localStorage.getItem(SAVE_KEY));
  if (primary) return primary;
  const backup = parse(localStorage.getItem(SAVE_KEY + ":bak"));
  if (backup) {
    localStorage.setItem(SAVE_KEY, JSON.stringify(backup));
    return backup;
  }
  return empty();
}

export function writeSave(slot: SaveShape) {
  const disk: Disk = { version: SAVE_VERSION, slot };
  const text = JSON.stringify(disk);
  localStorage.setItem(SAVE_KEY, text);
  localStorage.setItem(SAVE_KEY + ":bak", text);
}

export function loadSave(): SaveShape | null {
  return readDisk().slot;
}

export function hasSave() {
  return Boolean(loadSave());
}

export function freeSaveAllowed(difficulty: SaveShape["difficulty"]) {
  return difficulty === "story" || difficulty === "easy" || difficulty === "normal";
}
