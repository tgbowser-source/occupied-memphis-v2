You are building "Occupied Memphis" v2, a brand-new web game, in the GitHub repo https://github.com/tgbowser-source/occupied-memphis-v2 . I'm attaching occupied-memphis-v2-docs.zip. Work through everything below on your own, without waiting for me between steps.

STEP 1: Add the docs. Unzip the attachment and commit its docs/ folder to the repo root exactly as-is (docs/README.md, docs/design/, docs/art/, docs/build/). Push it. After that, docs/ is read-only. Never edit, move, or delete anything under docs/.

STEP 2: Read before building. Read docs/README.md, docs/design/00-STATUS.md, docs/design/17-core-design-doc-grok.md (its override header wins any conflict), docs/design/15-art-style.md, and docs/art/style-ref-isometric-wargame.jpg (the look to match: hand-painted isometric, 2:1, legally distinct). Then read the full build plan at docs/build/02-fresh-build-plan.md.

STEP 3: Build every batch in order. Do Batch 0 through Batch 12 from that plan, in order. Batch 0 is the charter: save it as PROJECT-CHARTER.md in the repo root and follow it for every later batch. For each batch:
  a. Build only what that batch lists. Put code in the repo root (src/, public/, etc.).
  b. Check its DONE WHEN list yourself: the app starts, there are no console, import or missing-asset errors, and typecheck and build pass.
  c. Push to GitHub with a commit message starting "Batch N:". Keep pushes small, and split a batch into several commits if a big push stalls.
  d. Add a line to BUILD-LOG.md in the repo root with the batch number, the commit hash, what works, and any gaps.
  e. Move straight on to the next batch. Do NOT stop to ask me between batches.

ONLY stop and ask me if:
  - a needed design fact, line of dialogue, or file is missing (never invent story, dialogue or characters; log the gap in BUILD-LOG.md and skip just that piece if you can keep going), or
  - something is broken and you can't fix it after two tries.

Hard rules, always:
  - No sexual content, no killing children, and no magic, supernatural or sci-fi.
  - The player's last name is always Smith, with James as the default first name.
  - Money is US Marks (East) and SDB notes (West). Keep the TBD ratio, shop rates and checkpoint spots as named constants.
  - Ten factions.
  - Timeline 1950–55, with the birthday on Nov 10, 1950.
  - Hard and Survival difficulties save only at checkpoints.
  - No builder-only plugins or sign-in hooks that would stop the app from running outside your builder.
  - Never touch the old occupied-memphis repo.

When all batches are done, give me a short summary: what's playable, the final commit, and the open gaps from BUILD-LOG.md.
