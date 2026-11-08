# Build Log — Occupied Memphis v2

- **Batch 0** (fb2d699 docs + shell commit): Charter created as PROJECT-CHARTER.md. Standalone Vite + React + TS app shell. Working title screen with Start/Back smoke test navigation. Development version panel. Typecheck and production build pass. No console/import errors. No game scenes yet.
- **Batches 1–12** (this tree): Playable Chapter 1 slice through Connor’s choice. Title painting, creation (James / Smith, both banks, six TBD stats, childhood tokens with no mapping), birthday narration, isometric yard, dialogue runner, ten faction gauges, both currencies, free save vs checkpoint-only, West farm, vehicle choice, HQ handlers, one work beat, raid narration into the same handler, Connor on both banks, then an out-of-story stop. Hard/Survival do not save on hide or manual save. No fast travel menu: the next documented beat is a button.

Gaps, not filled with fiction:

- Reputation magnitudes are TBD. `REP_BUMP_AMOUNT` stays `"TBD"` and the ten gauges stay at 0. A flag records that a bump happened once.
- `WORK_WAGE_PROPOSED` is 1 and `WORK_MINUTES_PROPOSED` is 480. Both are labeled TBD in the UI. Not a historical wage.
- `SDB_PER_US_MARK` is 2 and `FACTION_SHOP_DISCOUNT_PER_POINT` is 0.001. Both unapproved. The dev economy panel shows that.
- `SAVE_CHECKPOINT_LOCATIONS` is empty. Dev-only “Simulate checkpoint event” is not a place.
- H1 has no street address. W1 factory name is TBD. R3 business name is TBD. Personality has no locked list (free text).
- Disclosure chronology is not implemented. 03 Scene 3B3 discloses then retrieves. 17 §5 Scene 3B takes possession first. The complete screen reports the conflict.
- Childhood tokens have no stat mapping. Starting stats are TBD.
- Civilian, Wehrmacht, and IJA sheets are one painted pose repeated in four frames. They are not placed as encounters. Player male and female have four directions, one pose each, not a walk cycle.
- No shipment retrieval, raid scene, brother, or faction meeting.
