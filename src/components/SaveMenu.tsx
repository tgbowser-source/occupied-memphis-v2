import { freeSaveAllowed } from "../game/save";
import { useGame } from "../game/store";

export function SaveMenu() {
  const difficulty = useGame((s) => s.difficulty);
  const saveFree = useGame((s) => s.saveFree);
  const saveCheckpoint = useGame((s) => s.saveCheckpoint);
  const free = freeSaveAllowed(difficulty);
  return (
    <div className="savebar">
      <button type="button" disabled={!free} onClick={() => saveFree()}>
        {free ? "Save" : "Checkpoint only"}
      </button>
      {!free && <p>Hard and Survival have no approved checkpoint. Placement is TBD.</p>}
      {import.meta.env.DEV && (
        <button type="button" onClick={() => saveCheckpoint()}>
          Simulate checkpoint event
        </button>
      )}
    </div>
  );
}
