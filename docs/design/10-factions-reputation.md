# Factions & reputation

**Status:** faction list LOCKED (10, 2026-11-07); meter math and Ch1 values PROPOSED  
**Ties to:** occupation premise (`09`), daily-life / exchange (`08`), Ch1 bumps (`03`)

---

## Playable factions (meters): faction list LOCKED 2026-11-07

Thomas chose the handoff's ten factions, with the Valkyrie Circle being Stauffenberg's German Imperialists. Meter ranges, thresholds, and values are still PROPOSED.

| ID | Faction | Bank | Notes |
|----|---------|------|-------|
| **RES-E** | Anti-German Resistance | East | Boss (Alder McGarity) |
| **RES-W** | Anti-Japanese Resistance | West | Swims (Richard Bedford). The two resistances **dislike each other** |
| **WEH** | Wehrmacht | East | Street muscle and garrison |
| **SS** | SS | East | Top of the German stack (von Schmerz) |
| **GES** | Gestapo | East | Political police (Fleischer; Otto Hollen = East handler). **Sees more than other groups** |
| **VAL** | Valkyrie Circle | East | Stauffenberg's German Imperialists: loyal to Germany, against Nazi excess. Formerly "IMP-E" |
| **IJA** | Imperial Japanese Army | West | Garrison; Minamoto is the local commander |
| **KEM** | Kempeitai | West | Top of the Japanese stack (Yamashita) |
| **TOK** | Tokkō | West | Political police (Igarashi; Takeshi Kurohane = West handler). **Sees more than other groups** |
| **IMP** | Imperialist faction | West | Minamoto's circle: loyal to the emperor, against harsh occupation. Formerly "IMP-W" |

**Mapping from the old six meters:** where this doc says **GER**, read the German agencies (Gestapo first for agency-path beats, with smaller spillover to the SS and Wehrmacht). **JPN** likewise means Tokkō first, with spillover to the Kempeitai and IJA. IMP-E is now VAL and IMP-W is now IMP.

**Gestapo/Tokkō perception rule:** these two learn about player actions more often than other factions (wider witness radius, informants). That fits the design law: if nobody saw it, the world may not know, but it still happened.

Ch1 mostly touches **GER or JPN** (start side) + the matching **RES** via Connor. Cross-bank meters exist but stay near floor until you cross Harahan.

---

## Hidden vs visible
- **Visible early:** controlling overlord on your start bank + that bank’s resistance (once Connor appears)
- **Soft-revealed:** Imperialists (rumors / Stauffenberg or Minamoto scenes) — full meter may unlock mid-game
- **Never a “USA restored” meter in Ch1** (keep foggy)

---

## Scale (design)
- Range **−100 to +100** per faction (or 0–100 with separate threat — propose **−100..+100**)
- Thresholds (tune later): Hostile / Cold / Neutral / Warm / Trusted / Inner

---

## What reputation changes (hooks already in design)

| System | Uses |
|--------|------|
| Checkpoint / Harahan | Overlord standing → queue, search depth, Crossing Permit odds |
| Exchange desk | Overlord standing → US Marks ↔ SDB rate |
| Black-market changers | Resistance standing → access + rate |
| Shop / NPC tone | Mild overlord / resistance lean |
| Agency path | Large **overlord** bump on 2A join |
| Work path 2B | Slight bump to **all factions on that bank** (as written) |
| Covert raid success (3B/3B2) | Big overlord bump; resistance trust falls if they learn you baited them |
| Disclose path (3B3) | Resistance trust up; overlord trust at risk if leaked |

---

## Ch1 reputation events (as written → meters)

| Beat | GER/JPN (start overlord) | Matching RES | Notes |
|------|--------------------------|--------------|-------|
| Scene 1 join agency | **Large +** | 0 / slight − if word spreads | 2A |
| Scene 1 stay work | 0 | 0 | — |
| 2B work period | **Slight +** all on-bank factions | Slight + RES too (per original “all factions on their side”) | Keep as written |
| 2B coerced into agency | **Medium +** overlord (fear path) | Cold to RES until Connor | — |
| Play along with Connor | 0 open | **Warm +** | Double agent |
| Disclose to Connor | **Risk −** if burned | **Large +** | 3B3 |
| Covert setup raid (3B/3B2) | **Large +** | **Large −** if exposed as bait | Handler praise |
| Retrieve shipment for RES | **−** if overlord learns | **Large +** | 3B3 continuation TBD |

---

## Imperialists (light)
- Not required for Ch1 ending
- Gain via protecting civilians, opposing Gestapo/Tokko excess, Stauffenberg/Minamoto quests later
- High IMP + high overlord = unstable (you’re inside the machine but soft)
- High IMP + high RES = possible endgame coalition (later)

---

## Double-agent tension (design rule)
You can be **Warm+** with overlord and resistance **only while compartments hold**.  
Story flags / missions can force a reveal → one side crashes. Exchange desks vs hangout changers already preview this.

---

## Open for balance later
- Exact numeric deltas
- Whether RES-E and RES-W share a pooled “Resistance” UI or stay split (recommend **split**)
- Soft cap on how high both overlord + RES can climb before a forced event
