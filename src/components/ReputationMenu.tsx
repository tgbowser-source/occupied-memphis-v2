import { FACTION_IDS, FACTION_LABEL } from "../game/factions";
import { useGame } from "../game/store";

export function ReputationMenu() {
  const factions = useGame((s) => s.factions);
  const civilians = useGame((s) => s.civilians);
  const close = useGame((s) => s.setMenu);
  return (
    <section className="menu" aria-label="Factions">
      <p className="kicker">Ten factions</p>
      <ul>
        {FACTION_IDS.map((id) => (
          <li key={id}>
            {FACTION_LABEL[id]}: {factions[id]}
          </li>
        ))}
      </ul>
      <p>Civilians (not a faction): {civilians}</p>
      <button type="button" onClick={() => close(null)}>
        Close
      </button>
    </section>
  );
}
