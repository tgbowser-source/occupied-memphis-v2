import type { Side } from "../types";

export type LineContext = { firstName: string; side: Side };

export type Choice = {
  id: string;
  label: string;
  next: string;
  effect?: string;
};

export type DialogueNode = {
  id: string;
  source: string;
  speaker: "Narrator" | string;
  text: string | ((ctx: LineContext) => string);
  next?: string | null;
  choices?: Choice[];
  effect?: string;
};

export function lineText(node: DialogueNode, ctx: LineContext) {
  return typeof node.text === "function" ? node.text(ctx) : node.text;
}
