import type { DialogueNode } from "./types";

export const connorNodes: DialogueNode[] = [
  {
    id: "c-open",
    source: "docs/design/03-chapter-01.md Scene 2A",
    speaker: "Narrator",
    text: "Mitchell Connor recognizes player (“you’re so-and-so’s kid… just turn 18?”).",
    next: "c-job",
  },
  {
    id: "c-job",
    source: "docs/design/03-chapter-01.md Scene 2A",
    speaker: "Narrator",
    text: "Offers vague “job” → player can infer resistance work.",
    next: "c-choice",
  },
  {
    id: "c-raid-line",
    source: "docs/design/03-chapter-01.md Scene 2B",
    speaker: "Narrator",
    text: "“I heard you got wrapped up in the raid the other day”",
    next: "c-choice",
  },
  {
    id: "c-choice",
    source: "docs/design/03-chapter-01.md Scene 2A",
    speaker: "Narrator",
    text: "Choice: come clean to Connor (agency) or play along (double agent).",
    choices: [
      { id: "clean", label: "Come clean (admit agency work).", next: "c-clean", effect: "disclose" },
      { id: "along", label: "Play along (double agent).", next: "c-along", effect: "covert" },
    ],
  },
  {
    id: "c-clean",
    source: "docs/design/03-chapter-01.md Scene 2A",
    speaker: "Narrator",
    text: "Disclose → Scene 3B3",
    next: null,
    effect: "complete",
  },
  {
    id: "c-along",
    source: "docs/design/03-chapter-01.md Scene 2A",
    speaker: "Narrator",
    text: "Covert / play along → Scene 3A → 3B / 3B2",
    next: null,
    effect: "complete",
  },
];
