import { FACTION_SHOP_DISCOUNT_PER_POINT, SDB_PER_US_MARK, SAVE_CHECKPOINT_LOCATIONS } from "../game/config";
import { civilianPrice, factionPrice } from "../game/economy";
import { useGame } from "../game/store";

export function HUD() {
  const usm = useGame((s) => s.usm);
  const sdb = useGame((s) => s.sdb);
  const alignment = useGame((s) => s.alignment);
  const menu = useGame((s) => s.menu);
  const setMenu = useGame((s) => s.setMenu);
  const pin = useGame((s) => s.mapId);
  const standing = useGame((s) => (s.side === "east" ? s.factions.GES : s.factions.TOK));
  return (
    <header className="hud">
      <p>US Marks {usm}</p>
      <p>SDB notes {sdb}</p>
      <p>Alignment {alignment}</p>
      <p>{pin}</p>
      <button type="button" onClick={() => setMenu(menu === "rep" ? null : "rep")}>
        Factions
      </button>
      {import.meta.env.DEV && (
        <button type="button" onClick={() => setMenu(menu === "economy" ? null : "economy")}>
          Economy test
        </button>
      )}
      {import.meta.env.DEV && menu === "economy" && (
        <div className="menu">
          <p>SDB_PER_US_MARK={SDB_PER_US_MARK} TBD</p>
          <p>FACTION_SHOP_DISCOUNT_PER_POINT={FACTION_SHOP_DISCOUNT_PER_POINT} TBD</p>
          <p>Checkpoints: {SAVE_CHECKPOINT_LOCATIONS.length === 0 ? "none (TBD)" : SAVE_CHECKPOINT_LOCATIONS.join(",")}</p>
          <p>East bank, 10 US Marks listed, faction standing {standing}: {factionPrice(10, standing)} . Civilian: {civilianPrice(10, standing)}</p>
          <p>Same list paid in SDB notes is still accepted. USD is not tender.</p>
        </div>
      )}
    </header>
  );
}
