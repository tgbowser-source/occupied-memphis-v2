import type { DialogueNode } from "./types";

/** Scene 2A up to the point of being sent toward Connor. No invented officer speeches. */
export const agencyNodes: DialogueNode[] = [
  {
    id: "a-report",
    source: "docs/design/17-core-design-doc-grok.md §5 Scene 2A",
    speaker: "Narrator",
    text: "Report to HQ. Reputation bump with the overlord faction. Assigned a field handler.",
    next: "a-handler",
    effect: "record-hq-rep",
  },
  {
    id: "a-handler",
    source: "docs/design/02-characters.md",
    speaker: "Narrator",
    text: (ctx) =>
      ctx.side === "east"
        ? "East: Otto Hollen, Gestapo Kriminalinspektor."
        : "West: Takeshi Kurohane, Tokkō Keibu.",
    next: "a-task",
  },
  {
    id: "a-task",
    source: "docs/design/17-core-design-doc-grok.md §5 Scene 2A",
    speaker: "Narrator",
    text: "First task: location of a Resistance shipment.",
    next: "a-which",
  },
  {
    id: "a-which",
    source: "docs/design/17-core-design-doc-grok.md §5 Scene 2A",
    speaker: "Narrator",
    text: (ctx) => (ctx.side === "west" ? "West: nitrate." : "East: weapons and ammo."),
    next: "a-optional",
  },
  {
    id: "a-optional",
    source: "docs/design/17-core-design-doc-grok.md §5 Scene 2A",
    speaker: "Narrator",
    text: "Retrieving it is optional. Moving it is a logistics problem (bulk, inventory, visibility).",
    next: "a-sent",
  },
  {
    id: "a-sent",
    source: "docs/design/17-core-design-doc-grok.md §5 Scene 2A",
    speaker: "Narrator",
    text: "Sent to a Resistance-friendly spot. Local recruiter recognizes the Smith kid. Vague job offer.",
    next: null,
    effect: "enter-contact",
  },
];
