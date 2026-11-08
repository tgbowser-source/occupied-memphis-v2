import { WORK_MINUTES_PROPOSED, WORK_WAGE_PROPOSED } from "../game/config";
import { useGame } from "../game/store";

export function Objectives() {
  const dialogueOpen = useGame((s) => s.dialogueOpen);
  const flags = useGame((s) => s.flags);
  const nodeId = useGame((s) => s.nodeId);
  const goWork = useGame((s) => s.goWork);
  const goHq = useGame((s) => s.goHq);
  const goContact = useGame((s) => s.goContact);
  const showNode = useGame((s) => s.showNode);
  const replayBirthday = useGame((s) => s.replayBirthday);
  if (dialogueOpen) return null;

  const showReport = flags.joinAgency && !flags.hqReported && !flags.coerced;
  const showWork = flags.stayWork && !flags.workedOnce;
  const showRaid = flags.stayWork && flags.workedOnce && !flags.raidSeen;
  const showContact = flags.hqReported && nodeId === "a-sent" && flags.connorChoice === null;

  return (
    <div className="objectives">
      {showWork && (
        <button type="button" onClick={goWork}>
          Work job
        </button>
      )}
      {showRaid && (
        <button type="button" onClick={() => showNode("w-raid")}>
          Resistance smuggling raid
        </button>
      )}
      {showReport && (
        <button type="button" onClick={goHq}>
          Report next morning
        </button>
      )}
      {showContact && (
        <button type="button" onClick={goContact}>
          Resistance-friendly spot
        </button>
      )}
      <button type="button" onClick={replayBirthday}>
        Replay birthday
      </button>
      {flags.workedOnce && (
        <p>
          Work pay used WORK_WAGE_PROPOSED ({WORK_WAGE_PROPOSED}). That number is TBD, not a historical wage. Minutes{" "}
          {WORK_MINUTES_PROPOSED} are TBD.
        </p>
      )}
      {flags.repRecorded.length > 0 && (
        <p>A reputation bump was recorded. REP_BUMP_AMOUNT is TBD, so the ten gauges stay at 0.</p>
      )}
    </div>
  );
}
