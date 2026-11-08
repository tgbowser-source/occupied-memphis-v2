import { missingLinks, nodeById } from "../game/dialogue/runner";
import { lineText } from "../game/dialogue/types";
import { useGame } from "../game/store";

export function DialoguePanel() {
  const nodeId = useGame((s) => s.nodeId);
  const open = useGame((s) => s.dialogueOpen);
  const firstName = useGame((s) => s.firstName);
  const side = useGame((s) => s.side);
  const advance = useGame((s) => s.advance);
  const choose = useGame((s) => s.choose);
  const node = nodeById(nodeId);
  if (!open || !node) return null;
  const gaps = missingLinks();
  const vehicle = side === "east" ? "/game/vehicles/kubelwagen.webp" : "/game/vehicles/japanese-truck.webp";
  const showVehicle = node.id === "b-vehicle" || node.id === "b-officer";
  return (
    <div className="dialogue" role="dialog" aria-modal="true">
      <div className="dialogue-card">
        {showVehicle && <img src={vehicle} alt="" />}
        <p className="kicker">{node.speaker}</p>
        <p>{lineText(node, { firstName, side })}</p>
        {import.meta.env.DEV && <p className="src">{node.source}</p>}
        {node.choices?.length ? (
          <div className="title-actions">
            {node.choices.map((choice, index) => (
              <button key={choice.id} type="button" onClick={() => choose(index)}>
                {choice.label}
              </button>
            ))}
          </div>
        ) : (
          <button type="button" onClick={advance}>
            {node.next ? "Next" : "Close"}
          </button>
        )}
        {import.meta.env.DEV && gaps.length > 0 && <p className="src">Missing links: {gaps.join(", ")}</p>}
      </div>
    </div>
  );
}
