# Fresh build — small Grok app-builder milestones

Thomas: paste Batch 0, wait for the push, test it in the browser, then paste ONE next batch. Wait for its push and test before continuing. Re-paste the charter/locked-facts block whenever Grok drifts. Target repository: https://github.com/tgbowser-source/occupied-memphis-v2 (public). This planning document does not authorize this bot to push anything.

This replaces the OLD-REPO restoration plan. 01-grok-build-prompt.md is SHELVED, retained unchanged for reference; do not execute its batches. Build the fresh project in occupied-memphis-v2, not a repair of the old occupied-memphis repo. Planning only; no repository edits performed. Prepared Nov 7, 2026, 10:07 PM PST.

## How to talk to Grok
- Paste only one milestone. Say “Do only this batch; list exact files changed; push and stop.” Do not ask it to build the whole campaign in one turn.
- Keep the charter below in context; re-paste it when names, dates, art, money, or scope drift. Re-paste the exact source excerpts supplied with the current batch; Grok cannot read our local files.
- Ask for the commit hash, GitHub link, browser test steps, screenshot, console errors, and all incomplete items after each small push. Test yourself before the next paste. A failed acceptance check means fix that milestone, not expand scope.
- If a source scene has only summary beats, use those beats verbatim as narration, not invented character speeches. If a needed line, map parcel, or decision is missing, report the gap. Do not fill it with plausible fiction.
- All new filenames, UI layouts, milestones, stack and mechanical tuning below are PROPOSED implementation choices, not locked story decisions. Plain UI labels and accessibility text are allowed; invented story, cast, dialogue or missions are not.

## Batch 0 — charter + standalone runnable project

```text
REFERENCE INPUTS (read-only; never change docs/):
- docs/design/00-STATUS.md — https://github.com/tgbowser-source/occupied-memphis-v2/blob/main/docs/design/00-STATUS.md
- docs/design/17-core-design-doc-grok.md — https://github.com/tgbowser-source/occupied-memphis-v2/blob/main/docs/design/17-core-design-doc-grok.md
- docs/design/15-art-style.md — https://github.com/tgbowser-source/occupied-memphis-v2/blob/main/docs/design/15-art-style.md
- docs/design/01-world.md — https://github.com/tgbowser-source/occupied-memphis-v2/blob/main/docs/design/01-world.md
- docs/design/02-characters.md — https://github.com/tgbowser-source/occupied-memphis-v2/blob/main/docs/design/02-characters.md
- docs/design/07-playable-footprint.md — https://github.com/tgbowser-source/occupied-memphis-v2/blob/main/docs/design/07-playable-footprint.md
- docs/design/08-daily-life-rules.md — https://github.com/tgbowser-source/occupied-memphis-v2/blob/main/docs/design/08-daily-life-rules.md
- docs/design/09-occupation-premise.md — https://github.com/tgbowser-source/occupied-memphis-v2/blob/main/docs/design/09-occupation-premise.md
- docs/design/10-factions-reputation.md — https://github.com/tgbowser-source/occupied-memphis-v2/blob/main/docs/design/10-factions-reputation.md
- docs/design/11-weapons-vehicles.md — https://github.com/tgbowser-source/occupied-memphis-v2/blob/main/docs/design/11-weapons-vehicles.md
- docs/design/16-grok-handoff-2026-11-07.md — https://github.com/tgbowser-source/occupied-memphis-v2/blob/main/docs/design/16-grok-handoff-2026-11-07.md
- docs/art/style-ref-isometric-wargame.jpg — https://github.com/tgbowser-source/occupied-memphis-v2/blob/main/docs/art/style-ref-isometric-wargame.jpg
Read these files before work; 00-STATUS and 17 override header control conflicts. Written style description in charter is backup if image viewing is unavailable. Code belongs in repo root; docs/ is strictly read-only.

1. Build the brand-new web game in https://github.com/tgbowser-source/occupied-memphis-v2 (public) and retain this CHARTER for every later batch. The repository already has its name; do not create another repository or overwrite the old occupied-memphis repo. HARD RULE: build all code in the repo root (normal src/ and public/ beneath it; no nested app/project directory). Never create, edit, move, or delete ANYTHING under docs/. Game Chief supplies docs/; it is read-only reference material, not generated output. If a required design/reference file has not landed, report its exact path and stop that dependent work rather than invent it.
2. PROPOSED stack: Vite + React + TypeScript, Canvas 2D for the world, ordinary CSS, Zustand for game state, browser localStorage for saves. No server/database/login needed for the slice; no SSR/router framework required. Use supported compatible dependencies and a committed lockfile. It must run from a fresh clone with npm install && npm run dev, serving http://localhost:8080; provide npm run build and npm run typecheck (tsc --noEmit). Do not copy builder-only auth, OAuth, popup, preview bridge, PWA hooks, absolute workspace paths, or private modules. Never require a builder secret to play.
3. LOCKED FACTS: alternate history, Germany/Japan defeated the United States; war ends 1949; campaign 1950–1955. Player turns 18 on November 10, 1950. East Memphis is German; West Memphis is Japanese; Mississippi divides them. Harahan is the only playable road bridge: occupation halted Memphis & Arkansas highway bridge construction before opening; Frisco rail is background, not another crossing. Eventual footprint ~20 sq mi, ~10 each bank, not required in this slice. Airport/Midtown/Overton Park are off-map. Sterick Building at Madison/N. Third is HQ-E; West Memphis City Hall, 100 Court St, completed 1939, is HQ-W.
4. PLAYER: default first name James, last name ALWAYS Smith; first name, gender, appearance, personality customizable. Mother Mary Smith, father Hank Smith, older brother Joseph Smith lives on the opposite bank. Recruiter Mitchell Connor. East handler Otto Hollen; West Takeshi Kurohane. Healthy young adult, basic schooling, English-only, zero money, no combat experience, basic clothing and optional pocket knife, no firearm. Six stats: Charisma, Strength, Intelligence, Dexterity, Luck, Perception. Starts East H1 modest Memphis house or West H2 tenant/farm home; eventual starting-side choice remains supported.
5. EXACT TEN FACTIONS (civilians separate, never eleventh): RES-E Anti-German Resistance; RES-W Anti-Japanese Resistance; WEH Wehrmacht; SS SS; GES Gestapo; VAL Valkyrie Circle; IJA Imperial Japanese Army; KEM Kempeitai; TOK Tokkō; IMP Imperialist faction. VAL means Stauffenberg's German Imperialists, IMP Minamoto's emperor-loyal circle. Resistances dislike each other. Gestapo/Tokkō have greater visibility. Visible Alignment; ten gauges live in a menu, not permanently across the world HUD. Numeric meter balance is PROPOSED.
6. MONEY: US Marks/USM East; Southern Development Bank notes/SDB West. Both accepted on either bank, exchange optional. Marks worth more at a fixed base ratio across 1950–55; exact ratio TBD. Faction shops/desks improve prices/rates with relevant standing; civilian prices do not vary with standing. Old USD is not tender. Keep TBDs in one config file with explicit units and PROPOSED/TBD comments, never silently lock values. PROPOSED placeholders: SDB_PER_US_MARK=2 (TBD, unapproved), FACTION_SHOP_DISCOUNT_PER_POINT=0.001 (TBD, unapproved, clamp safely), SAVE_CHECKPOINT_LOCATIONS=[] (TBD, intentionally no approved physical checkpoint). These are implementation placeholders, not design facts; show them in development diagnostics. Do not infer save points from police checkpoints.
7. DIFFICULTY: Story, Easy, Normal, Hard, Survival. Story/Easy/Normal free saves. Hard/Survival checkpoint-only per Thomas's brief. Survival increases damage/reputation swings, scarce ammo, worse bleeding, harder stealth when those systems arrive. No invented numeric balance. No hunger/thirst/personal-care meter or fuel tracking. No fast travel or mini-map; pocket map later. Grounded visibility/carry/illegality/noise consequences: “If it would be visible, heavy, illegal, or loud in 1950s occupied Memphis, treat it that way. If nobody saw it, the world may not know — but the thing itself still happened.”
8. CONTENT LIMITS: no sexual content; no killing children; no magic, supernatural, or sci-fi. Tense grounded resistance thriller, not occupation glorification. No invented story/dialogue/cast, no unapproved mission continuation. Keep post-1955 political control, later acts, gambling, West stay-or-leave reveal and brother's later capture parked. Side quests are Chapter 2+ only, not this slice. Period-accurate named weapons only; no invented guns. Built/tested WWII prototypes can be fielded by 1950 per design; paper/unverified concepts are not permission for fantasy tech.
9. LOCKED ART: hand-painted high-oblique 2:1 isometric, not photos, live 3D or chunky pixel art. Reference described in words: a high diagonal view over textured cobbled streets, pitched red/brown tiled roofs, dense leafy trees and hedges, tiny readable figures and vehicles, layered buildings with visible roofs and two walls, and a deep blue-green river edge. Fine painted material texture and substantial architecture make the scene, not oversized characters. Use that depth/readability, not the reference's European town or battle layout. Memphis circa 1950: brick shops, packed dirt/cobbles, red clay tile roofs, wooden houses/tin porches, oaks, Mississippi docks, sandbags, wooden checkpoints. Summer green, brick red, stone gray, river blue-green; warm afternoon lighting, lower-right shadows (style direction, not permission to change the birthday date/season). Blitzkrieg-style inspiration but legally distinct: no copied assets, names, branding, logos or UI. No on-map text or baked-in UI. Ground/buildings/props/characters separate; Y/depth-sort; four-direction walk for male/female players, civilian, Wehrmacht, IJA. Screen-relative WASD, tile-grid collision. Never use world3d/ or first/third-person camera modes.
10. PROPOSED files for this batch: package.json, package-lock.json, index.html, vite.config.ts, tsconfig.json, src/main.tsx, src/App.tsx, src/styles.css, PROJECT-CHARTER.md, README.md. Save this charter in root PROJECT-CHARTER.md, NEVER under docs/. Build only a working app shell displaying the working title Occupied Memphis, a clickable start/back navigation smoke test, and a development-only build/version panel; no game scenes yet. The working title is not a final title lock. Do not ship broken links to future milestones.
DONE WHEN (Thomas browser test): fresh clone starts on :8080 without secrets, title/smoke-test screen renders, start/back works, refresh works, no console/import/asset errors; typecheck and production build pass. Report files changed, actual test results and commit hash. Push this milestone to the new GitHub repo and stop.
```

## Batch 1 — title screen

```text
REFERENCE INPUTS (read-only; never change docs/):
- docs/design/00-STATUS.md — https://github.com/tgbowser-source/occupied-memphis-v2/blob/main/docs/design/00-STATUS.md
- docs/design/17-core-design-doc-grok.md — https://github.com/tgbowser-source/occupied-memphis-v2/blob/main/docs/design/17-core-design-doc-grok.md
- docs/design/15-art-style.md — https://github.com/tgbowser-source/occupied-memphis-v2/blob/main/docs/design/15-art-style.md
- docs/art/style-ref-isometric-wargame.jpg — https://github.com/tgbowser-source/occupied-memphis-v2/blob/main/docs/art/style-ref-isometric-wargame.jpg
Read these files before work; 00-STATUS and 17 override header control conflicts. Written style description in charter is backup if image viewing is unavailable. Code belongs in repo root; docs/ is strictly read-only.

Keep Batch 0 charter unchanged. Do only this milestone. All listed new paths are PROPOSED implementation paths.
1. Files: src/components/TitleScreen.tsx, src/App.tsx, src/styles.css, public/game/scenes/title.webp (PROPOSED asset format).. Report any additional exact path needed; no unrelated rewrites.
2. Build the real working-title screen with original painted art in charter style, readable separate UI, and an enabled New Game button opening the existing navigation shell. Continue is disabled until real saves exist. No Proposed look caption; no copied reference branding. Do not add lore/taglines.
DONE WHEN (Thomas browser test): title loads, New Game and Back work with mouse and keyboard, no fake Continue behavior; refresh returns cleanly to title. All earlier milestones remain testable; no console errors, missing imports/art, or typecheck/build failures. Report changed files, test results, commit hash, screenshot and remaining gaps. Push this milestone to GitHub and stop.
```

## Batch 2 — character creation

```text
REFERENCE INPUTS (read-only; never change docs/):
- docs/design/00-STATUS.md — https://github.com/tgbowser-source/occupied-memphis-v2/blob/main/docs/design/00-STATUS.md
- docs/design/17-core-design-doc-grok.md — https://github.com/tgbowser-source/occupied-memphis-v2/blob/main/docs/design/17-core-design-doc-grok.md
- docs/design/15-art-style.md — https://github.com/tgbowser-source/occupied-memphis-v2/blob/main/docs/design/15-art-style.md
- docs/design/02-characters.md — https://github.com/tgbowser-source/occupied-memphis-v2/blob/main/docs/design/02-characters.md
- docs/design/16-grok-handoff-2026-11-07.md — https://github.com/tgbowser-source/occupied-memphis-v2/blob/main/docs/design/16-grok-handoff-2026-11-07.md
- docs/art/style-ref-isometric-wargame.jpg — https://github.com/tgbowser-source/occupied-memphis-v2/blob/main/docs/art/style-ref-isometric-wargame.jpg
Read these files before work; 00-STATUS and 17 override header control conflicts. Written style description in charter is backup if image viewing is unavailable. Code belongs in repo root; docs/ is strictly read-only.

Keep Batch 0 charter unchanged. Do only this milestone. All listed new paths are PROPOSED implementation paths.
1. Files: src/components/CharacterCreate.tsx, src/game/types.ts, src/game/store.ts, src/game/config.ts, src/App.tsx.. Report any additional exact path needed; no unrelated rewrites.
2. New Game opens creation: default James, immutable Smith; custom first name/gender/appearance/personality, optional pocket knife and five difficulty choices. Starting bank selector shows East available now and West clearly not built yet (PROPOSED incremental UI, not removal of the locked West choice). Zero currency, no firearm, English-only. Six stat names exactly from charter. Do not invent the missing 30+ childhood options: keep childhood pick count TBD; permit documented default tokens cotton, trusses, papers, choir, river, tornado without inventing stat mappings or biography text. Keep exact starting stat values PROPOSED/TBD.
3. Confirm displays the resulting character dossier with Back/Restart; do not invent an adventure to fill the next screen.
DONE WHEN (Thomas browser test): default is James Smith; custom first name survives navigation; Smith cannot change; settings and gear summary agree; zero money; defaults can be accepted without blocked fields. All earlier milestones remain testable; no console errors, missing imports/art, or typecheck/build failures. Report changed files, test results, commit hash, screenshot and remaining gaps. Push this milestone to GitHub and stop.
```

## Batch 3 — birthday scene, opening beat

```text
REFERENCE INPUTS (read-only; never change docs/):
- docs/design/00-STATUS.md — https://github.com/tgbowser-source/occupied-memphis-v2/blob/main/docs/design/00-STATUS.md
- docs/design/17-core-design-doc-grok.md — https://github.com/tgbowser-source/occupied-memphis-v2/blob/main/docs/design/17-core-design-doc-grok.md
- docs/design/15-art-style.md — https://github.com/tgbowser-source/occupied-memphis-v2/blob/main/docs/design/15-art-style.md
- docs/design/02-characters.md — https://github.com/tgbowser-source/occupied-memphis-v2/blob/main/docs/design/02-characters.md
- docs/design/03-chapter-01.md — https://github.com/tgbowser-source/occupied-memphis-v2/blob/main/docs/design/03-chapter-01.md
- docs/design/07-playable-footprint.md — https://github.com/tgbowser-source/occupied-memphis-v2/blob/main/docs/design/07-playable-footprint.md
- docs/art/style-ref-isometric-wargame.jpg — https://github.com/tgbowser-source/occupied-memphis-v2/blob/main/docs/art/style-ref-isometric-wargame.jpg
Read these files before work; 00-STATUS and 17 override header control conflicts. Written style description in charter is backup if image viewing is unavailable. Code belongs in repo root; docs/ is strictly read-only.

Keep Batch 0 charter unchanged. Do only this milestone. All listed new paths are PROPOSED implementation paths.
1. Files: src/components/BirthdayScene.tsx, src/game/scenes/birthday.ts, src/game/store.ts, public/game/scenes/birthday-east.webp.. Report any additional exact path needed; no unrelated rewrites.
2. Creation Confirm enters the birthday immediately: November 10, 1950, H1, Mary and Hank, player turns eighteen. Read and use the opening summary from docs/design/17-core-design-doc-grok.md §5 Scene 1 as VERBATIM narrator text, not invented parent dialogue. This milestone presents only the celebration opening; vehicle/agency decision comes in Batch 9. Next/Back/Restart support replay. A neutral end-of-current-slice panel is UI, not a story ending. Do not invent speeches, cake details, presents or new cast.
SOURCE TEXT BACKUP — read and use the text from the docs/design/ files linked at the start of this batch. Preserve exact locked lines and source narration in scene data; never turn summary into invented dialogue:
### Scene 1 — Birthday
Subdued celebration with parents. Quiet resentment in small details.
Vehicle arrives:
- East: cold, bureaucratic Gestapo officer. Speaks of duty and order.
- West: polite Tokkō officer with implied threat. Speaks of harmony and service.
Player must choose:
1. Join the agency (Gestapo or Tokkō).
2. Stay with parents and work (factory for the Reich / farm for the Japanese Empire).
Private moment with parents after the officers leave. Then report next morning.
DONE WHEN (Thomas browser test): New Game through defaults reaches birthday opening, names/date/age correct, source narration appears unaltered; replay works; no free-roam detour before birthday. All earlier milestones remain testable; no console errors, missing imports/art, or typecheck/build failures. Report changed files, test results, commit hash, screenshot and remaining gaps. Push this milestone to GitHub and stop.
```

## Batch 4 — one East home isometric map

```text
REFERENCE INPUTS (read-only; never change docs/):
- docs/design/00-STATUS.md — https://github.com/tgbowser-source/occupied-memphis-v2/blob/main/docs/design/00-STATUS.md
- docs/design/17-core-design-doc-grok.md — https://github.com/tgbowser-source/occupied-memphis-v2/blob/main/docs/design/17-core-design-doc-grok.md
- docs/design/15-art-style.md — https://github.com/tgbowser-source/occupied-memphis-v2/blob/main/docs/design/15-art-style.md
- docs/design/01-world.md — https://github.com/tgbowser-source/occupied-memphis-v2/blob/main/docs/design/01-world.md
- docs/design/07-playable-footprint.md — https://github.com/tgbowser-source/occupied-memphis-v2/blob/main/docs/design/07-playable-footprint.md
- docs/design/research/06-period-clothing-1945-1950.md — https://github.com/tgbowser-source/occupied-memphis-v2/blob/main/docs/design/research/06-period-clothing-1945-1950.md
- docs/art/style-ref-isometric-wargame.jpg — https://github.com/tgbowser-source/occupied-memphis-v2/blob/main/docs/art/style-ref-isometric-wargame.jpg
Read these files before work; 00-STATUS and 17 override header control conflicts. Written style description in charter is backup if image viewing is unavailable. Code belongs in repo root; docs/ is strictly read-only.

Keep Batch 0 charter unchanged. Do only this milestone. All listed new paths are PROPOSED implementation paths.
1. Files: src/game/isometric.ts, src/game/render.ts, src/game/input.ts, src/game/collision.ts, src/game/maps/home-east.ts, src/components/WorldCanvas.tsx, public/game/tiles/*, public/game/buildings/*, public/game/props/*, public/game/characters/*.. Report any additional exact path needed; no unrelated rewrites.
2. Add a small playable H1 home/yard environment, not the entire East bank. Its arrangement is PROPOSED staging within the locked fictional H1 parcel (working district south/east of CBD near factory belt); no invented street address, business, map districts or plot. Enter it after viewing the existing birthday opening. Provide an explicit replay-birthday control for slice tests.
3. Implement 2:1 projection and inverse with camera offsets/consistent foot anchors; ground/building/prop/actor layers, Y/depth sorting, screen-relative WASD, tile-grid walls/collision, normalized diagonals. Original painted assets, not a flat backdrop; usable male/female four-direction walks now. Include civilian/Wehrmacht/IJA animation assets for later population checks, not invented NPC encounters. Document exact atlas files/frame metadata. No live 3D.
DONE WHEN (Thomas browser test): walk screen-up/down/left/right with WASD; diagonal speed stable; walls stop movement; actor passes correctly behind/in front of props/building; camera/pointer conversions agree; birthday still starts first; original art loads. All earlier milestones remain testable; no console errors, missing imports/art, or typecheck/build failures. Report changed files, test results, commit hash, screenshot and remaining gaps. Push this milestone to GitHub and stop.
```

## Batch 5 — data-driven dialogue without new story

```text
REFERENCE INPUTS (read-only; never change docs/):
- docs/design/00-STATUS.md — https://github.com/tgbowser-source/occupied-memphis-v2/blob/main/docs/design/00-STATUS.md
- docs/design/17-core-design-doc-grok.md — https://github.com/tgbowser-source/occupied-memphis-v2/blob/main/docs/design/17-core-design-doc-grok.md
- docs/design/15-art-style.md — https://github.com/tgbowser-source/occupied-memphis-v2/blob/main/docs/design/15-art-style.md
- docs/design/03-chapter-01.md — https://github.com/tgbowser-source/occupied-memphis-v2/blob/main/docs/design/03-chapter-01.md
- docs/art/style-ref-isometric-wargame.jpg — https://github.com/tgbowser-source/occupied-memphis-v2/blob/main/docs/art/style-ref-isometric-wargame.jpg
Read these files before work; 00-STATUS and 17 override header control conflicts. Written style description in charter is backup if image viewing is unavailable. Code belongs in repo root; docs/ is strictly read-only.

Keep Batch 0 charter unchanged. Do only this milestone. All listed new paths are PROPOSED implementation paths.
1. Files: src/game/dialogue/types.ts, src/game/dialogue/runner.ts, src/game/dialogue/birthday.ts, src/components/DialoguePanel.tsx, src/game/store.ts.. Report any additional exact path needed; no unrelated rewrites.
2. Refactor existing birthday narration into data-driven nodes with IDs, source references, speaker-or-narrator field, conditions/effects and choices. Preserve every existing source word. Do not expand summary into direct speech. Add input focus/click/keyboard advancement without moving player while a panel has focus.
3. Validate missing node IDs/unreachable transitions and prevent duplicate effects on repeated clicks. Use non-story development fixtures for engine tests, not invented in-world dialogue. Expose a development-only replay/inspection panel.
DONE WHEN (Thomas browser test): birthday replay remains identical; node transitions work by mouse/keyboard; movement does not leak through modal; double clicks do not duplicate state; source references inspectable; end-of-slice can return/replay. All earlier milestones remain testable; no console errors, missing imports/art, or typecheck/build failures. Report changed files, test results, commit hash, screenshot and remaining gaps. Push this milestone to GitHub and stop.
```

## Batch 6 — money HUD and ten-faction menu

```text
REFERENCE INPUTS (read-only; never change docs/):
- docs/design/00-STATUS.md — https://github.com/tgbowser-source/occupied-memphis-v2/blob/main/docs/design/00-STATUS.md
- docs/design/17-core-design-doc-grok.md — https://github.com/tgbowser-source/occupied-memphis-v2/blob/main/docs/design/17-core-design-doc-grok.md
- docs/design/15-art-style.md — https://github.com/tgbowser-source/occupied-memphis-v2/blob/main/docs/design/15-art-style.md
- docs/design/08-daily-life-rules.md — https://github.com/tgbowser-source/occupied-memphis-v2/blob/main/docs/design/08-daily-life-rules.md
- docs/design/10-factions-reputation.md — https://github.com/tgbowser-source/occupied-memphis-v2/blob/main/docs/design/10-factions-reputation.md
- docs/art/style-ref-isometric-wargame.jpg — https://github.com/tgbowser-source/occupied-memphis-v2/blob/main/docs/art/style-ref-isometric-wargame.jpg
Read these files before work; 00-STATUS and 17 override header control conflicts. Written style description in charter is backup if image viewing is unavailable. Code belongs in repo root; docs/ is strictly read-only.

Keep Batch 0 charter unchanged. Do only this milestone. All listed new paths are PROPOSED implementation paths.
1. Files: src/components/HUD.tsx, src/components/ReputationMenu.tsx, src/game/factions.ts, src/game/economy.ts, src/game/config.ts, src/game/store.ts.. Report any additional exact path needed; no unrelated rewrites.
2. HUD shows both balances: US Marks (East) and Southern Development Bank notes (West), initially zero. Separate UI from art. Alignment visible; exactly ten faction gauges in an openable menu, not permanently onscreen. Use the charter labels exactly. Civilians are a separate relationship category, no eleventh faction.
3. Implement two-currency acceptance/conversion helpers and standing-based faction shop pricing, civilian fixed pricing, using clearly marked TBD constants from charter. No invented shops or shopkeeper dialogue: demonstrate arithmetic in an explicitly development-only noncanonical economy test panel. Fixed base ratio stays fixed; discounts/spreads vary separately. USD not tender; no new starting cash.
DONE WHEN (Thomas browser test): balances start zero; all ten exact labels visible in menu and civilian category separate; close menu restores world; dev panel proves both tender types on both banks, favorable standing improves faction prices but never civilian prices; placeholder tuning visibly TBD. All earlier milestones remain testable; no console errors, missing imports/art, or typecheck/build failures. Report changed files, test results, commit hash, screenshot and remaining gaps. Push this milestone to GitHub and stop.
```

## Batch 7 — saves and difficulty enforcement

```text
REFERENCE INPUTS (read-only; never change docs/):
- docs/design/00-STATUS.md — https://github.com/tgbowser-source/occupied-memphis-v2/blob/main/docs/design/00-STATUS.md
- docs/design/17-core-design-doc-grok.md — https://github.com/tgbowser-source/occupied-memphis-v2/blob/main/docs/design/17-core-design-doc-grok.md
- docs/design/15-art-style.md — https://github.com/tgbowser-source/occupied-memphis-v2/blob/main/docs/design/15-art-style.md
- docs/design/16-grok-handoff-2026-11-07.md — https://github.com/tgbowser-source/occupied-memphis-v2/blob/main/docs/design/16-grok-handoff-2026-11-07.md
- docs/design/08-daily-life-rules.md — https://github.com/tgbowser-source/occupied-memphis-v2/blob/main/docs/design/08-daily-life-rules.md
- docs/art/style-ref-isometric-wargame.jpg — https://github.com/tgbowser-source/occupied-memphis-v2/blob/main/docs/art/style-ref-isometric-wargame.jpg
Read these files before work; 00-STATUS and 17 override header control conflicts. Written style description in charter is backup if image viewing is unavailable. Code belongs in repo root; docs/ is strictly read-only.

Keep Batch 0 charter unchanged. Do only this milestone. All listed new paths are PROPOSED implementation paths.
1. Files: src/game/save.ts, src/game/store.ts, src/game/config.ts, src/components/SaveMenu.tsx, src/components/TitleScreen.tsx.. Report any additional exact path needed; no unrelated rewrites.
2. PROPOSED fresh-project key occupied-memphis-fresh-saves-v1, deliberately distinct from old occupied-memphis-saves-v4 to avoid corrupting a different game schema; no old-repo migration implied. Version snapshots, validate loaded data, handle corrupt/missing storage and keep backup safely. Persist identity, current source scene/node, map position, settings and balances.
3. Story/Easy/Normal free saves. Hard/Survival checkpoint-only at core write API AND UI; no pagehide/visibility/unload loophole. SAVE_CHECKPOINT_LOCATIONS=[] is explicitly TBD: no approved production save points exist yet. Do not equate police inspection posts with save points or invent story checkpoints. Add development-only “simulate checkpoint event” fixture so legitimate checkpoint writing is testable without pretending it is a canonical location. Ship Hard/Survival with clear UI that checkpoint placement is pending, not fake checkpoints.
DONE WHEN (Thomas browser test): Normal save then refresh/Continue restores state; corrupt storage fails safely; Hard/Survival manual/tab-hide cannot overwrite progress; dev-only simulated checkpoint persists only via checkpoint API and restores; build excludes or hides debug fixtures; missing checkpoint locations remain documented TBD. All earlier milestones remain testable; no console errors, missing imports/art, or typecheck/build failures. Report changed files, test results, commit hash, screenshot and remaining gaps. Push this milestone to GitHub and stop.
```

## Batch 8 — West-start parity as a small playable scene

```text
REFERENCE INPUTS (read-only; never change docs/):
- docs/design/00-STATUS.md — https://github.com/tgbowser-source/occupied-memphis-v2/blob/main/docs/design/00-STATUS.md
- docs/design/17-core-design-doc-grok.md — https://github.com/tgbowser-source/occupied-memphis-v2/blob/main/docs/design/17-core-design-doc-grok.md
- docs/design/15-art-style.md — https://github.com/tgbowser-source/occupied-memphis-v2/blob/main/docs/design/15-art-style.md
- docs/design/01-world.md — https://github.com/tgbowser-source/occupied-memphis-v2/blob/main/docs/design/01-world.md
- docs/design/02-characters.md — https://github.com/tgbowser-source/occupied-memphis-v2/blob/main/docs/design/02-characters.md
- docs/design/07-playable-footprint.md — https://github.com/tgbowser-source/occupied-memphis-v2/blob/main/docs/design/07-playable-footprint.md
- docs/art/style-ref-isometric-wargame.jpg — https://github.com/tgbowser-source/occupied-memphis-v2/blob/main/docs/art/style-ref-isometric-wargame.jpg
Read these files before work; 00-STATUS and 17 override header control conflicts. Written style description in charter is backup if image viewing is unavailable. Code belongs in repo root; docs/ is strictly read-only.

Keep Batch 0 charter unchanged. Do only this milestone. All listed new paths are PROPOSED implementation paths.
1. Files: src/game/maps/home-west.ts, src/game/scenes/birthday.ts, src/components/CharacterCreate.tsx, src/game/store.ts, public/game/buildings/home-west.webp and matching original farm props/tiles.. Report any additional exact path needed; no unrelated rewrites.
2. Enable starting West/H2: tenant/farm family home on north leveeside cotton tract, not a new named farm. Same existing birthday opening narration, Mary/Hank, date and player; keep zero money. Build only a small H2 slice using the working isometric/collision/animation engine. East remains H1. No new dialogue, mission or geography; staging/asset filenames PROPOSED.
SOURCE TEXT BACKUP — read and use the text from the docs/design/ files linked at the start of this batch. Preserve exact locked lines and source narration in scene data; never turn summary into invented dialogue:
### Scene 1 — Birthday
Subdued celebration with parents. Quiet resentment in small details.
Vehicle arrives:
- East: cold, bureaucratic Gestapo officer. Speaks of duty and order.
- West: polite Tokkō officer with implied threat. Speaks of harmony and service.
Player must choose:
1. Join the agency (Gestapo or Tokkō).
2. Stay with parents and work (factory for the Reich / farm for the Japanese Empire).
Private moment with parents after the officers leave. Then report next morning.
DONE WHEN (Thomas browser test): choose West and arrive at H2 birthday opening, then walk its farm-home slice; choose East and get H1 instead; both show correct occupier/bank metadata, saved start bank restores. All earlier milestones remain testable; no console errors, missing imports/art, or typecheck/build failures. Report changed files, test results, commit hash, screenshot and remaining gaps. Push this milestone to GitHub and stop.
```

## Batch 9 — birthday agency-or-work decision

```text
REFERENCE INPUTS (read-only; never change docs/):
- docs/design/00-STATUS.md — https://github.com/tgbowser-source/occupied-memphis-v2/blob/main/docs/design/00-STATUS.md
- docs/design/17-core-design-doc-grok.md — https://github.com/tgbowser-source/occupied-memphis-v2/blob/main/docs/design/17-core-design-doc-grok.md
- docs/design/15-art-style.md — https://github.com/tgbowser-source/occupied-memphis-v2/blob/main/docs/design/15-art-style.md
- docs/design/02-characters.md — https://github.com/tgbowser-source/occupied-memphis-v2/blob/main/docs/design/02-characters.md
- docs/design/03-chapter-01.md — https://github.com/tgbowser-source/occupied-memphis-v2/blob/main/docs/design/03-chapter-01.md
- docs/design/07-playable-footprint.md — https://github.com/tgbowser-source/occupied-memphis-v2/blob/main/docs/design/07-playable-footprint.md
- docs/design/11-weapons-vehicles.md — https://github.com/tgbowser-source/occupied-memphis-v2/blob/main/docs/design/11-weapons-vehicles.md
- docs/art/style-ref-isometric-wargame.jpg — https://github.com/tgbowser-source/occupied-memphis-v2/blob/main/docs/art/style-ref-isometric-wargame.jpg
Read these files before work; 00-STATUS and 17 override header control conflicts. Written style description in charter is backup if image viewing is unavailable. Code belongs in repo root; docs/ is strictly read-only.

Keep Batch 0 charter unchanged. Do only this milestone. All listed new paths are PROPOSED implementation paths.
1. Files: src/game/dialogue/birthday.ts, src/game/scenes/birthday.ts, src/game/store.ts, public/game/vehicles/kubelwagen.webp, public/game/vehicles/japanese-truck.webp.. Report any additional exact path needed; no unrelated rewrites.
2. Extend the opening to the vehicle/officer arrival and decision using only supplied source. Otto Hollen East / Takeshi Kurohane West; use narrator summaries where exact spoken lines are absent. Record Join agency versus Stay with parents/work. The private parental moment is source narration, not fabricated dialogue. Next-morning objective UI can state only the documented report/work task. No full HQ/work implementation yet; leave player in the playable home slice with saved branch state.
3. Do not invent a refusal/third plot branch. Vehicle designs historically named/grounded per weapons index; no combat tutorial or firearm grant.
SOURCE TEXT BACKUP — read and use the text from the docs/design/ files linked at the start of this batch. Preserve exact locked lines and source narration in scene data; never turn summary into invented dialogue:
### Scene 1 — Birthday
Subdued celebration with parents. Quiet resentment in small details.
Vehicle arrives:
- East: cold, bureaucratic Gestapo officer. Speaks of duty and order.
- West: polite Tokkō officer with implied threat. Speaks of harmony and service.
Player must choose:
1. Join the agency (Gestapo or Tokkō).
2. Stay with parents and work (factory for the Reich / farm for the Japanese Empire).
Private moment with parents after the officers leave. Then report next morning.
DONE WHEN (Thomas browser test): replay either bank; both documented choices selectable; branch state survives Normal save/reload; correct handler/occupation and next-morning task; home remains playable without broken future exits. All earlier milestones remain testable; no console errors, missing imports/art, or typecheck/build failures. Report changed files, test results, commit hash, screenshot and remaining gaps. Push this milestone to GitHub and stop.
```

## Batch 10 — voluntary agency onboarding, stop before Connor

```text
REFERENCE INPUTS (read-only; never change docs/):
- docs/design/00-STATUS.md — https://github.com/tgbowser-source/occupied-memphis-v2/blob/main/docs/design/00-STATUS.md
- docs/design/17-core-design-doc-grok.md — https://github.com/tgbowser-source/occupied-memphis-v2/blob/main/docs/design/17-core-design-doc-grok.md
- docs/design/15-art-style.md — https://github.com/tgbowser-source/occupied-memphis-v2/blob/main/docs/design/15-art-style.md
- docs/design/02-characters.md — https://github.com/tgbowser-source/occupied-memphis-v2/blob/main/docs/design/02-characters.md
- docs/design/03-chapter-01.md — https://github.com/tgbowser-source/occupied-memphis-v2/blob/main/docs/design/03-chapter-01.md
- docs/design/07-playable-footprint.md — https://github.com/tgbowser-source/occupied-memphis-v2/blob/main/docs/design/07-playable-footprint.md
- docs/design/10-factions-reputation.md — https://github.com/tgbowser-source/occupied-memphis-v2/blob/main/docs/design/10-factions-reputation.md
- docs/art/style-ref-isometric-wargame.jpg — https://github.com/tgbowser-source/occupied-memphis-v2/blob/main/docs/art/style-ref-isometric-wargame.jpg
Read these files before work; 00-STATUS and 17 override header control conflicts. Written style description in charter is backup if image viewing is unavailable. Code belongs in repo root; docs/ is strictly read-only.

Keep Batch 0 charter unchanged. Do only this milestone. All listed new paths are PROPOSED implementation paths.
1. Files: src/game/maps/hq-east.ts, src/game/maps/hq-west.ts, src/game/dialogue/agency.ts, src/game/story.ts, src/game/store.ts; original HQ/handler art.. Report any additional exact path needed; no unrelated rewrites.
2. Implement agency choice to next-morning HQ report: HQ-E Sterick, Madison/N. Third; HQ-W West Memphis City Hall, 100 Court St (1939). Small PROPOSED playable scene interiors, not invented building layouts asserted as fact. Handler assigned; source task/location intel West nitrate, East weapons/ammo; no invented shipment addresses/manifest.
3. Read and use the text from docs/design/17-core-design-doc-grok.md §5 Scene 2A and docs/design/03-chapter-01.md Scene 2A as verbatim narration, not made-up officer speeches. Route arrives at ready-to-contact-Connor milestone but stop before the actual encounter. Carry/logistics not yet built: do not let player pocket a warehouse or auto-retrieve optional cargo. Reputation bump magnitude stays named TBD; avoid treating “overlord” as an eleventh faction. Travel staging is PROPOSED scene progression, not a general fast-travel mechanic.
SOURCE TEXT BACKUP — read and use the text from the docs/design/ files linked at the start of this batch. Preserve exact locked lines and source narration in scene data; never turn summary into invented dialogue:
### Scene 2A — Voluntary agency path
Report to HQ. Reputation bump with the overlord faction. Assigned a field handler.
First task: location of a Resistance shipment.
- West: nitrate.
- East: weapons and ammo.
Retrieving it is optional. Moving it is a logistics problem (bulk, inventory, visibility).
**Storage if taken:**
- West: hidden on the family farm.
- East: abandoned garage down the street.
Sent to a Resistance-friendly spot. Local recruiter recognizes the Smith kid. Vague job offer.
**First major decision:**
- Come clean (admit agency work). May offer shipment location as a token of trust.
- Play along (double agent). Shipment can be handed over later.
DONE WHEN (Thomas browser test): agency path reaches correct HQ/handler/intel on either bank, no wrong-bank teleport via free-roam fast travel, no duplicate reputation award on replay/load, no unwritten contact dialogue, can return/replay supported home/HQ scenes. All earlier milestones remain testable; no console errors, missing imports/art, or typecheck/build failures. Report changed files, test results, commit hash, screenshot and remaining gaps. Push this milestone to GitHub and stop.
```

## Batch 11 — work path into coerced agency onboarding

```text
REFERENCE INPUTS (read-only; never change docs/):
- docs/design/00-STATUS.md — https://github.com/tgbowser-source/occupied-memphis-v2/blob/main/docs/design/00-STATUS.md
- docs/design/17-core-design-doc-grok.md — https://github.com/tgbowser-source/occupied-memphis-v2/blob/main/docs/design/17-core-design-doc-grok.md
- docs/design/15-art-style.md — https://github.com/tgbowser-source/occupied-memphis-v2/blob/main/docs/design/15-art-style.md
- docs/design/03-chapter-01.md — https://github.com/tgbowser-source/occupied-memphis-v2/blob/main/docs/design/03-chapter-01.md
- docs/design/07-playable-footprint.md — https://github.com/tgbowser-source/occupied-memphis-v2/blob/main/docs/design/07-playable-footprint.md
- docs/design/08-daily-life-rules.md — https://github.com/tgbowser-source/occupied-memphis-v2/blob/main/docs/design/08-daily-life-rules.md
- docs/design/10-factions-reputation.md — https://github.com/tgbowser-source/occupied-memphis-v2/blob/main/docs/design/10-factions-reputation.md
- docs/art/style-ref-isometric-wargame.jpg — https://github.com/tgbowser-source/occupied-memphis-v2/blob/main/docs/art/style-ref-isometric-wargame.jpg
Read these files before work; 00-STATUS and 17 override header control conflicts. Written style description in charter is backup if image viewing is unavailable. Code belongs in repo root; docs/ is strictly read-only.

Keep Batch 0 charter unchanged. Do only this milestone. All listed new paths are PROPOSED implementation paths.
1. Files: src/game/maps/work-east.ts, src/game/maps/work-west.ts, src/game/dialogue/work.ts, src/game/dialogue/agency.ts, src/game/story.ts, src/game/config.ts; original factory/farm/crate/truck art.. Report any additional exact path needed; no unrelated rewrites.
2. Implement Stay/work: W1 generic South Bluffs river-rail factory (name TBD), W2 same H2 north leveeside farm tract. Small playable work interaction advances time and pays bank currency. Amount/time are named TBD PROPOSED constants, not invented historical wage facts. Slight standing on bank factions as source states, with numeric mapping explicitly PROPOSED.
3. Read and use the text from docs/design/03-chapter-01.md Scene 2B and docs/design/17-core-design-doc-grok.md §5 Scene 2B for raid/coercion as verbatim narration/branch flags, no invented firefight, threats beyond source, or actors. Arrive at the same existing handler/HQ flow with more suspicious/smaller standing and raid-history flag. Preserve voluntary/coerced origin. Do not invent an escape route/refusal scene.
SOURCE TEXT BACKUP — read and use the text from the docs/design/ files linked at the start of this batch. Preserve exact locked lines and source narration in scene data; never turn summary into invented dialogue:
### Scene 2B — Civilian path, then forced
Work, earn a little money, slight local reputation. Caught in a Resistance smuggling raid. Taken to Gestapo/Tokkō HQ. Same handler. Threat against player and parents. Forced onto the agency path.
Then follows 2A with differences:
- Smaller, more suspicious reputation gain.
- Recruiter opens with knowledge of the raid.
- Same come-clean vs play-along choice.
**Resistance contact:** lives nearby, knows the family, primarily a recruiter, can reappear later.
**Handlers:**
- East: Otto Hollen, Gestapo Kriminalinspektor.
- West: Takeshi Kurohane, Tokkō Keibu.
DONE WHEN (Thomas browser test): Stay/work works East and West; wage currency correct; one source work/raid progression not endlessly farmable; coercion reaches existing onboarding; origin flag persists; voluntary route unchanged; both remain ready for Connor. All earlier milestones remain testable; no console errors, missing imports/art, or typecheck/build failures. Report changed files, test results, commit hash, screenshot and remaining gaps. Push this milestone to GitHub and stop.
```

## Batch 12 — Mitchell Connor contact and first fork; stop at the written boundary

```text
REFERENCE INPUTS (read-only; never change docs/):
- docs/design/00-STATUS.md — https://github.com/tgbowser-source/occupied-memphis-v2/blob/main/docs/design/00-STATUS.md
- docs/design/17-core-design-doc-grok.md — https://github.com/tgbowser-source/occupied-memphis-v2/blob/main/docs/design/17-core-design-doc-grok.md
- docs/design/15-art-style.md — https://github.com/tgbowser-source/occupied-memphis-v2/blob/main/docs/design/15-art-style.md
- docs/design/02-characters.md — https://github.com/tgbowser-source/occupied-memphis-v2/blob/main/docs/design/02-characters.md
- docs/design/03-chapter-01.md — https://github.com/tgbowser-source/occupied-memphis-v2/blob/main/docs/design/03-chapter-01.md
- docs/design/07-playable-footprint.md — https://github.com/tgbowser-source/occupied-memphis-v2/blob/main/docs/design/07-playable-footprint.md
- docs/design/16-grok-handoff-2026-11-07.md — https://github.com/tgbowser-source/occupied-memphis-v2/blob/main/docs/design/16-grok-handoff-2026-11-07.md
- docs/art/style-ref-isometric-wargame.jpg — https://github.com/tgbowser-source/occupied-memphis-v2/blob/main/docs/art/style-ref-isometric-wargame.jpg
Read these files before work; 00-STATUS and 17 override header control conflicts. Written style description in charter is backup if image viewing is unavailable. Code belongs in repo root; docs/ is strictly read-only.

Keep Batch 0 charter unchanged. Do only this milestone. All listed new paths are PROPOSED implementation paths.
1. Files: src/game/maps/contact-east.ts, src/game/maps/contact-west.ts, src/game/dialogue/connor.ts, src/game/story.ts, src/game/store.ts; original contact art.. Report any additional exact path needed; no unrelated rewrites.
2. Contact East R1 A. Schwab, 163–165 Beale; West R3 8th Street café/juke, exact business name TBD (do not lock a provisional trade name). Only a small playable contact room/area. Mitchell Connor recognizes Smith family. Read and use the text from docs/design/03-chapter-01.md and docs/design/17-core-design-doc-grok.md, applying the override header; preserve the exact doc fragments below; ellipses remain source fragments, not permission to complete speeches. Otherwise use verbatim narrator summary. Work-origin encounter uses its exact existing raid-history line.
3. Offer source choices come clean/admit agency versus play along/stay covert; persist outcome and origin without awarding invented missions. Stop before raids, shipment delivery, brother mission or faction leadership meetings. Replaying/resetting allows Thomas to test both fork flags on both banks. At end provide a neutral out-of-story “current slice complete / replay” panel, not a fictional ending.
4. IMPORTANT: 03 and 17 disagree on when disclosure requires actual shipment possession. This batch records intent only, not accepted proof/trust or cargo delivery. Report this conflict and require Thomas to resolve before implementing continuation; do not silently choose or merge branches.
SOURCE TEXT BACKUP — read and use the text from the docs/design/ files linked at the start of this batch. Preserve exact locked lines and source narration in scene data; never turn summary into invented dialogue:
## Scene 2A: Agency Life
- Report to agency HQ → **large** reputation bump for overlord faction
- Escorted to field officer = **handler** (Otto Hollen East / Takeshi Kurohane West)
- Job: infiltrate resistance, report findings
- Bait intel:
  - **West (JP):** location of **nitrate** shipment (bombs)
  - **East (DE):** location of **weapons/ammo** shipment
- Sent to resistance hangout (bar / supply store)
- **Mitchell Connor** recognizes player (“you’re so-and-so’s kid… just turn 18?”)
- Offers vague “job” → player can infer resistance work
- **Choice:** come clean to Connor (agency) **or** play along (double agent)
  - Covert / play along → **Scene 3A → 3B / 3B2**
  - Disclose → **Scene 3B3**

---

## Scene 2B: Work Life
- Work job → time passes → money + **slight** reputation for all factions on that side of river
- Caught in middle of resistance smuggling → hauled to Gestapo/Tokko HQ
- Same field officer questions them; offers agency join under **threat of death** (player + parents)
- Forces into **Scene 2A**, with modified Connor line: “I heard you got wrapped up in the raid the other day”
- Same disclose vs double-agent choice

---
DONE WHEN (Thomas browser test): voluntary and work/coerced origin reach Connor; exact name/source text correct; both choices recorded independently on both banks; save/reload/replay works; no unwritten continuation; map/home/creation/title remain testable. All earlier milestones remain testable; no console errors, missing imports/art, or typecheck/build failures. Report changed files, test results, commit hash, screenshot and remaining gaps. Push this milestone to GitHub and stop.
```

## Later milestones — outline ONLY, not prompts to execute
1. Resolve disclosure chronology/status conflict with Thomas; ingest approved missing verbatim scene/dialogue text, exact childhood table/stat mapping and save checkpoint placement. No procedural story filler.
2. PROPOSED: Chapter 1 covert setup/raids in separate East D1 Wolf Harbor and West F1/P1/X1 milestones using 03's exact text/pins and approved source precedence. Logistics/carry first; East crates are diverted occupation-seized US military stock, not hardware-store Garands. West patrol boat must use grounded catalog types, not invented ship classes.
3. PROPOSED: disclosed shipment branch only after lock; no unprovided fallout. Brother Joseph, interrogation, East stay-or-leave, mid-campaign sting/rescue only after reconciling “PROPOSED” handoff labels with core text. West reveal remains parked; no invention.
4. PROPOSED: expand to locked footprints and BR Harahan, papers, legal/river travel; no fast travel, mini-map, player-owned boat, modern airport/Mud Island park or extra road bridge. Differentiate police inspection checkpoints from save checkpoints.
5. PROPOSED: witnessed reputation, line-of-sight stealth, realistic inventory/body damage/stamina, historically named kit, doctor/safehouse systems, day/night/weather and daily life incrementally. Curfew and schedule tuning require proposal review, not silent promotion to locked facts.
6. PROPOSED: approved Chapter 2+ side-quest cast is not permission to ship unapproved quest drafts; never put SQ1–4 into Chapter 1. Broader acts/post-1955 control remain parked.

## Source audit / conflicts / gaps (do not turn into new lore)
- Read all 25 markdown documents under design/, including research and side-quest drafts, plus the reference image with Read. Main authority: 00-STATUS and 17's override header, then specific locked amendments (15 art; 08 money; 10 factions). Research is evidence, not permission to change story locks. Grok must read the corresponding docs/design/ repository paths and GitHub links attached to each batch. Embedded excerpts are a backup, not permission to ignore newer authoritative source. Never modify docs/.
- Camera: 17 §13 first/third-person is expressly VOID; 00/15 require painted isometric. Older renderer/proposed-look language from prior implementation is irrelevant to a fresh build.
- Timeline: old research/catalogs say 1947–48 / war-to-1945; 00/17 lock war end 1949, campaign 1950–55, birthday Nov 10 1950. Historical dates in wartime status columns remain historical; alt-production columns are read “by 1950.”
- Names: James replaces old player defaults; Smith fixed, Joseph is older brother (not generic sibling), Mitchell Connor resolves 17's parked recruiter. Do not rename unrelated Calvin “Cal” Pike or Ruth Ellison. Stauffenberg, Yamashita, von Schmerz spellings follow current locks. 02 vs 17 romanization Keischichō/Keishichō varies; use Genji Igarashi without rank until confirmed rather than invent resolution.
- Currency: older generic German/Japanese labels are superseded by US Marks / Southern Development Bank notes; 08 locked rules override SQ4's “foreign scrip usually refused.” Both are accepted anywhere, USD never tender. Exact ratio/discounts/spreads TBD. PROPOSED placeholder SDB_PER_US_MARK=2 explicitly means 1 US Mark = 2 SDB, not an approved rate.
- Factions: 09's “Imperialist splinters not full factions yet,” older GER/JPN pooled labels and proposed UI reveal math cannot erase 10's locked ten. 17 says gauges menu-only; therefore HUD shows money/alignment and opens the ten-meter menu, rather than ten permanent bars. Civilians remain separate.
- Saves: docs say free saves except Hard/Survival; this brief explicitly requires checkpoint-only there. No approved SAVE checkpoint locations found. BR/HQ searches are police checkpoints, not automatically save points. Empty TBD location list and development-only fixture do not claim production Hard/Survival placement is finished. Fresh save key is PROPOSED and intentionally not old v4.
- Disclosure chronology: 03 §3B3 says disclose location then retrieve; 17 §5 Scene 3B says take possession first and use stored shipment as proof. 03/16 label the latter additions PROPOSED while 17 calls its text locked. 00/17 overrides do not explicitly resolve this status/chronology. Conservative boundary: implement Connor choice intent, not trust/payment/retrieval continuation; seek Thomas's lock before later batches.
- Shipment storage East garage/West farm and later brother/sting/stay-or-leave scenes appear as core text in 17 but proposed additions in 03/16; do not promote them to new playable milestones without reconciliation. No new dialogue for any of them.
- Childhood: 17 mentions 30+ options in unfiled session notes and parks exact pick count. Docs supply six default tokens but not a complete token→stat mapping. Do not derive a six-pick lock or invent background text. Starting stat values/visual customizer defaults are PROPOSED/TBD.
- Birthday/HQ scenes mostly have beat summaries, not full spoken scripts. Prompts deliberately allow exact summary as narrator text and preserve only supplied quotation fragments; cinematic full dialogue requires approved text, not builder invention.
- Geography: 04's unresolved bridge question is superseded by locked halted-construction rationale in 07/09; historical extra bridges stay historical/background only. City Hall's obsolete 1930 is corrected to 1939. Sterick built 1928–29/opened 1930 is not a contradiction requiring invented history. Exact H1/H2 parcels, farm/warehouse names, R2/R3 business names and precise GIS bounds remain TBD.
- Premise: 09's negotiated-collapse/partial-Axis-survival global explanation is PROPOSED; use 17's US defeat and locked local occupation, not invented global war history. Curfew table 21:00–05:00 versus broad night block 21:00–06:00 in 08 is proposed tuning, not a locked schedule.
- Side-quest status: 02 approves eight cast names for the bible, while side-quest index/new-cast draft still says provisional. Cast approval is not quest approval; quests remain PROPOSED/Ch2+ only. SQ1 old standalone “still smells like birthday cake” conflicts with its own Ch2+ timing and newer full draft; do not reuse it as Ch1. SQ4 player notes/rumor journal also conflict with 17's player-memory-only recon; defer, do not add notes mechanics.
- Weapon catalogs contain paper/prototype ambiguities (E-series, O-I, Ho-Ri, Type 4 rifle tier differences). 11's locked intent permits historically grounded fielded prototypes, not invented weapons or sci-fi. No disputed rare kit is needed for this slice; later explicit selection must keep uncertainty labels.
- Other parked decisions: final title, exact economy/reputation values, save points, agency sidearm checkout, cover-job papers, collaborationist local police, careful Jim Crow/occupation handling, Connor refusal, later acts, post-1955 control, West stay-or-leave mission and brother's later fate. None may be “solved” by generated fiction.

Total: 13 paste batches, numbered 0–12. Each is a separate runnable/testable milestone; scope beyond the current slice remains an outline. Batch 0 establishes the shell, not the whole game. Story nodes without authored dialogue remain verbatim narrated beats, visibly finite rather than fabricated.
