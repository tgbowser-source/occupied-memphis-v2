import { CHILDHOOD_TOKENS } from "../game/config";
import { useGame } from "../game/store";
import type { Difficulty, Gender } from "../game/types";

const DIFFICULTIES: Difficulty[] = ["story", "easy", "normal", "hard", "survival"];
const STATS = ["Charisma", "Strength", "Intelligence", "Dexterity", "Luck", "Perception"];

export function CharacterCreate() {
  const draft = useGame((s) => s.draft);
  const setDraft = useGame((s) => s.setDraft);
  const toggleToken = useGame((s) => s.toggleToken);
  const confirmCreate = useGame((s) => s.confirmCreate);
  const goTitle = useGame((s) => s.goTitle);

  return (
    <main className="sheet">
      <p className="kicker">New game</p>
      <h1>Smith</h1>
      <label>
        First name
        <input value={draft.firstName} onChange={(e) => setDraft({ firstName: e.target.value })} />
      </label>
      <label>
        Last name
        <input value="Smith" disabled />
      </label>
      <fieldset>
        <legend>Gender</legend>
        {(["m", "f"] as Gender[]).map((gender) => (
          <label key={gender}>
            <input type="radio" checked={draft.gender === gender} onChange={() => setDraft({ gender })} />
            {gender === "m" ? "Male" : "Female"}
          </label>
        ))}
      </fieldset>
      <fieldset>
        <legend>Appearance</legend>
        <label>
          Hair
          <select
            value={draft.appearance.hair}
            onChange={(e) =>
              setDraft({ appearance: { ...draft.appearance, hair: e.target.value as typeof draft.appearance.hair } })
            }
          >
            {["dark", "brown", "blonde", "auburn"].map((hair) => (
              <option key={hair}>{hair}</option>
            ))}
          </select>
        </label>
        <label>
          Build
          <select
            value={draft.appearance.build}
            onChange={(e) =>
              setDraft({ appearance: { ...draft.appearance, build: e.target.value as typeof draft.appearance.build } })
            }
          >
            {["slight", "average", "sturdy"].map((build) => (
              <option key={build}>{build}</option>
            ))}
          </select>
        </label>
      </fieldset>
      <label>
        Personality
        <input
          value={draft.personality}
          placeholder="Custom. No locked list."
          onChange={(e) => setDraft({ personality: e.target.value })}
        />
      </label>
      <fieldset>
        <legend>Starting bank</legend>
        <label>
          <input type="radio" checked={draft.side === "east"} onChange={() => setDraft({ side: "east" })} />
          East — H1
        </label>
        <label>
          <input type="radio" checked={draft.side === "west"} onChange={() => setDraft({ side: "west" })} />
          West — H2
        </label>
      </fieldset>
      <label>
        <input type="checkbox" checked={draft.knife} onChange={(e) => setDraft({ knife: e.target.checked })} />
        Optional pocket knife. No firearm.
      </label>
      <fieldset>
        <legend>Difficulty</legend>
        {DIFFICULTIES.map((difficulty) => (
          <label key={difficulty}>
            <input type="radio" checked={draft.difficulty === difficulty} onChange={() => setDraft({ difficulty })} />
            {difficulty}
            {difficulty === "hard" || difficulty === "survival" ? " — checkpoint only" : " — free save"}
          </label>
        ))}
      </fieldset>
      <fieldset>
        <legend>Childhood tokens. Pick count is TBD. No stat mapping is locked.</legend>
        {CHILDHOOD_TOKENS.map((id) => (
          <label key={id}>
            <input type="checkbox" checked={draft.childhood.includes(id)} onChange={() => toggleToken(id)} />
            {id}
          </label>
        ))}
      </fieldset>
      <section className="panel">
        <p>
          {draft.firstName.trim() || "James"} Smith. English only. US Marks 0. SDB notes 0. Old dollars are not tender.
        </p>
        <p>{STATS.map((name) => `${name} TBD`).join(" · ")}</p>
        <p>Gear: clothes{draft.knife ? ", pocket knife" : ""}. No firearm. No combat experience.</p>
        <button type="button" onClick={confirmCreate}>
          Confirm
        </button>
        <button type="button" onClick={goTitle}>
          Back
        </button>
      </section>
    </main>
  );
}
