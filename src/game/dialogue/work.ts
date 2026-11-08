import type { DialogueNode } from "./types";

export const workNodes: DialogueNode[] = [
  {
    id: "w-open",
    source: "docs/design/03-chapter-01.md Scene 2B",
    speaker: "Narrator",
    text: "Work job → time passes → money + slight reputation for all factions on that side of river",
    next: null,
    effect: "do-work",
  },
  {
    id: "w-raid",
    source: "docs/design/17-core-design-doc-grok.md §5 Scene 2B",
    speaker: "Narrator",
    text: "Work, earn a little money, slight local reputation. Caught in a Resistance smuggling raid. Taken to Gestapo/Tokkō HQ. Same handler. Threat against player and parents. Forced onto the agency path.",
    next: "a-report",
    effect: "coerce",
  },
];
