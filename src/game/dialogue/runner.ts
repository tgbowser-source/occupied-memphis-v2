import { agencyNodes } from "./agency";
import { birthdayNodes } from "./birthday";
import { connorNodes } from "./connor";
import type { DialogueNode } from "./types";
import { workNodes } from "./work";

const ALL = [...birthdayNodes, ...agencyNodes, ...workNodes, ...connorNodes];

export const NODES: Record<string, DialogueNode> = Object.fromEntries(ALL.map((n) => [n.id, n]));

export function nodeById(id: string | null): DialogueNode | null {
  if (!id) return null;
  return NODES[id] ?? null;
}

export function missingLinks() {
  const missing: string[] = [];
  for (const node of ALL) {
    if (node.next && !NODES[node.next]) missing.push(`${node.id} -> ${node.next}`);
    for (const choice of node.choices ?? []) {
      if (!NODES[choice.next]) missing.push(`${node.id} choice -> ${choice.next}`);
    }
  }
  return missing;
}
