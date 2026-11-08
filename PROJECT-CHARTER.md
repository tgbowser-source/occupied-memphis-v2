# Occupied Memphis — project charter

Saved from Batch 0. Later batches follow this file. `docs/` is read-only and is never edited by the build.

## Stack (proposed)

Vite + React + TypeScript. Canvas 2D for the world. Ordinary CSS. Zustand for game state. Browser localStorage for saves. No server, database, or login for this slice. A fresh clone runs with `npm install && npm run dev` on http://localhost:8080. `npm run build` and `npm run typecheck` must pass. No builder-only auth, OAuth, popup, preview bridge, PWA hooks, absolute workspace paths, or private modules.

## Locked facts

- Alternate history. Germany and Japan defeated the United States. The war ends in 1949. The campaign is 1950–1955.
- The player turns 18 on November 10, 1950.
- East Memphis is German. West Memphis is Japanese. The Mississippi divides them.
- Harahan is the only playable road bridge. Occupation halted the Memphis & Arkansas highway bridge before it opened. The Frisco rail bridge is background, not another crossing.
- The eventual footprint is about 20 square miles, about 10 on each bank. That full map is not required in the opening slice.
- Airport, Midtown, and Overton Park are off-map.
- Sterick Building at Madison and N. Third is HQ-E. West Memphis City Hall, 100 Court Street, completed 1939, is HQ-W.

## Player

- Default first name James. Last name is always Smith.
- First name, gender, appearance, and personality are customizable.
- Mother Mary Smith. Father Hank Smith. Older brother Joseph Smith lives on the opposite bank.
- Recruiter: Mitchell Connor.
- East handler: Otto Hollen. West handler: Takeshi Kurohane.
- Healthy young adult. Basic schooling. English only. Zero money. No combat experience.
- Starting gear: basic clothing and an optional pocket knife. No firearm.
- Six stats: Charisma, Strength, Intelligence, Dexterity, Luck, Perception.
- Starts at East H1, a modest Memphis house, or West H2, a tenant farm home. The starting-side choice stays supported.

## Factions

Exactly ten. Civilians are separate and are never an eleventh faction.

1. RES-E — Anti-German Resistance
2. RES-W — Anti-Japanese Resistance
3. WEH — Wehrmacht
4. SS — SS
5. GES — Gestapo
6. VAL — Valkyrie Circle (Stauffenberg's German Imperialists)
7. IJA — Imperial Japanese Army
8. KEM — Kempeitai
9. TOK — Tokkō
10. IMP — Imperialist faction (Minamoto's emperor-loyal circle)

The two resistances dislike each other. Gestapo and Tokkō see more. Alignment is visible. The ten gauges live in a menu, not permanently on the world HUD. Numeric meter balance is proposed, not locked.

## Money

- East: US Marks (USM). West: Southern Development Bank notes (SDB).
- Both are accepted on either bank. Exchange is optional.
- Marks are worth more, at a fixed base ratio across 1950–55. The exact ratio is TBD.
- Faction shops and desks improve prices and rates with standing. Civilian prices do not.
- Old US dollars are not tender.
- Placeholders, not design facts: `SDB_PER_US_MARK = 2` (TBD, unapproved). `FACTION_SHOP_DISCOUNT_PER_POINT = 0.001` (TBD, unapproved, clamp safely). `SAVE_CHECKPOINT_LOCATIONS = []` (TBD). Do not infer save points from police checkpoints.

## Difficulty and design law

Story, Easy, Normal, Hard, Survival. Story, Easy, and Normal allow free saves. Hard and Survival are checkpoint-only. Survival increases damage, reputation swings, scarce ammo, worse bleeding, and harder stealth when those systems exist. No hunger, thirst, personal-care, or fuel meters. No fast travel. No mini-map.

If it would be visible, heavy, illegal, or loud in 1950s occupied Memphis, treat it that way. If nobody saw it, the world may not know — but the thing itself still happened.

## Content limits

No sexual content. No killing children. No magic, supernatural, or science fiction. No invented story, dialogue, cast, or unapproved mission continuation. Side quests are Chapter 2+ only. Period-accurate named weapons only.

## Art

Hand-painted high-oblique 2:1 isometric. Not photos, live 3D, or chunky pixel art. Ground, buildings, props, and characters are separate. Y-sort. Four-direction walks. Screen-relative WASD. Tile-grid collision. Never use a first-person or third-person camera, and never use a `world3d/` renderer.
