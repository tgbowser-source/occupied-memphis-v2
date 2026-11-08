# Occupied Memphis v2 — Project Charter

**Working title:** Occupied Memphis (not final lock)

## Hard rules (always)
- No sexual content, no killing children, and no magic, supernatural or sci-fi.
- The player's last name is always Smith, with James as the default first name.
- Money is US Marks (East) and SDB notes (West). Keep the TBD ratio, shop rates and checkpoint spots as named constants.
- Ten factions.
- Timeline 1950–55, with the birthday on Nov 10, 1950.
- Hard and Survival difficulties save only at checkpoints.
- No builder-only plugins or sign-in hooks that would stop the app from running outside your builder.
- Never touch, edit, move or delete anything under docs/. docs/ is read-only design source of truth.

## Locked design facts (from 00-STATUS, 17 override header, 15-art-style)
- Alt-history: War ends 1949. Germany occupies East, Japan occupies West. Mississippi River divider. Only road crossing: Harahan Bridge.
- Campaign window: 1950–1955.
- Player turns 18 on November 10, 1950.
- Painted isometric, high oblique 2:1 camera. Hand-painted style, not photo, not live 3D, not chunky pixel art. Style ref: docs/art/style-ref-isometric-wargame.jpg (inspiration only; legally distinct).
- Player: last name always Smith. Default first name James. Gender, appearance, personality customizable. Older brother: Joseph Smith.
- Ch1 recruiter: Mitchell Connor.
- Currency: US Marks (East) / SDB notes (West). Both accepted; Marks worth more at fixed gap. Standing-based rates at faction shops.
- Ten factions.
- Starting gear: basic clothing, optional pocket knife, no firearms. Zero starting money. English-only.
- Family: Mother Mary Smith, Father Hank Smith. Parents quietly resentful.

## Build notes
- Code in repo root (src/, public/).
- Vite + React + TypeScript.
- Screen-relative WASD, tile-grid collision, Y-sort sprites.
- Four-direction walks for player (m/f), civilian, Wehrmacht, IJA.
- Ground/buildings/props/characters as separate layers.

This charter is retained for every later batch. Do not edit docs/.
