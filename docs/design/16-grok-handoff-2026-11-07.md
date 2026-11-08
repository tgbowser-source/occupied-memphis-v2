# Grok handoff ("Occupied Memphis"), filed 2026-11-07

Source: a handoff Thomas pasted from his regular Grok chat. Conflicts with the hub were settled with Thomas on 2026-11-07:
- Painted isometric camera
- 1950–55 timeline
- Ten factions
- Spellings Stauffenberg, Yamashita, von Schmerz
- Joseph as the older brother
- Default first name James

The full design spec `Occupied_Memphis_RPG_Core_Design-1.md` is **not yet on file**.

## Project
- Working title: **Occupied Memphis**. It's a playable web game built in Grok's app builder. The code lives there: TanStack Start, React 19, Tailwind, Zustand, localStorage saves (SAVE_VERSION 4). There is no public URL. The preview is the builder's live panel.
- Build next: replace the top-down render with isometric projection and screen-relative WASD. Generate layered isometric art: ground tiles, building and prop sprites, small characters with a 4-direction walk. Y-sort sprites and keep collision on the tile grid. Remove the "Proposed look" title caption once the world matches the still. Don't wire the old 3D code back in.
- New Game must start the birthday scene immediately if creation is skipped. Default childhood: cotton, trusses, papers, choir, river, tornado.

## Player (new)
- Last name is always Smith. First name, gender, appearance, and personality are custom. Default name is James.
- Starts English-only, with no money and no combat experience. Has clothes and an optional knife.
- Chooses a start: Japanese West (family farm) or German East (small Memphis house).
- Parents Mary and Hank are quietly hopeless.
- Stats: Charisma, Strength, Intelligence, Dexterity, Luck, and Perception, shaped by childhood picks.
- Three roles: true Resistance, double agent, or self-interested survivor.
- Difficulty levels: Story, Easy, Normal, Hard, Survival. Saves are free except on Hard and Survival.

## Rules
- **Design law:** anything that would be visible, heavy, illegal, or loud in 1950s occupied Memphis is treated that way. If nobody saw it, the world may not know, but it still happened.
- No magic and no sci-fi. No sexual content. No killing children. The tone is a tense resistance thriller.
- **Parked, do not invent:** gambling; who holds Memphis after 1955; acts after Chapter 1; the West stay-or-leave mission; whether the brother is caught later; what happens right after the bar monologue.

## Chapter 1 additions (PROPOSED until Story integrates with Thomas's OK)
- **Shipment storage:** abandoned garage (East) or family farm (West).
- **Disclose path (fills the hub's 3B3 TBD):** the player takes the shipment first, then tells the recruiter where it is as proof. The player keeps reporting so the Resistance can play the agency from inside.
- **Brother mission:** the target is Joseph. The player can arrest/execute him, warn him and lie, or both can go to the Resistance. If he is warned, the interrogation is a story gate, not a dice roll. Lying keeps the player inside the agency; coming clean gets them cut loose.
- **Mid-campaign sting:** Otto (East) or Takeshi (West) confronts the player. After the fight, double-agent life ends. The parents are executed while the player watches from cover; there is no hopeless shot. The player buries them. The return mission is a dock rescue with a hard time window.
- **Stay-or-leave fork after the lie:** the East mission shows a processing camp in a cutscene with no player choice. At the debrief, "I don't want to be a part of this" quits the agency, and "Alright, I understand" locks the agency path. The West version is not written yet.
