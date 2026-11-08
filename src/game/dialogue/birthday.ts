import type { DialogueNode } from "./types";

/** Scene 1. Narration is the source summary, not invented speech. */
export const birthdayNodes: DialogueNode[] = [
  {
    id: "b-open",
    source: "docs/design/17-core-design-doc-grok.md §5 Scene 1",
    speaker: "Narrator",
    text: "Subdued celebration with parents. Quiet resentment in small details.",
    next: "b-who",
  },
  {
    id: "b-who",
    source: "docs/design/02-characters.md; docs/design/17-core-design-doc-grok.md §2",
    speaker: "Narrator",
    text: (ctx) =>
      `November 10, 1950. ${ctx.side === "east" ? "H1" : "H2"}. Mary Smith and Hank Smith are here. ${ctx.firstName} Smith turns eighteen.`,
    next: "b-vehicle",
  },
  {
    id: "b-vehicle",
    source: "docs/design/17-core-design-doc-grok.md §5 Scene 1",
    speaker: "Narrator",
    text: "Vehicle arrives:",
    next: "b-officer",
  },
  {
    id: "b-officer",
    source: "docs/design/17-core-design-doc-grok.md §5 Scene 1",
    speaker: "Narrator",
    text: (ctx) =>
      ctx.side === "east"
        ? "East: cold, bureaucratic Gestapo officer. Speaks of duty and order."
        : "West: polite Tokkō officer with implied threat. Speaks of harmony and service.",
    next: "b-choice",
  },
  {
    id: "b-choice",
    source: "docs/design/17-core-design-doc-grok.md §5 Scene 1",
    speaker: "Narrator",
    text: "Player must choose:",
    choices: [
      {
        id: "join",
        label: "Join the agency (Gestapo or Tokkō).",
        next: "b-private",
        effect: "join-agency",
      },
      {
        id: "stay",
        label: "Stay with parents and work (factory for the Reich / farm for the Japanese Empire).",
        next: "b-private",
        effect: "stay-work",
      },
    ],
  },
  {
    id: "b-private",
    source: "docs/design/17-core-design-doc-grok.md §5 Scene 1",
    speaker: "Narrator",
    text: "Private moment with parents after the officers leave. Then report next morning.",
    next: null,
    effect: "enter-home",
  },
];
