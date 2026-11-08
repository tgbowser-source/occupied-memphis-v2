import { hasSave } from "../game/save";

type Props = {
  onNewGame: () => void;
  onContinue: () => void;
};

export function TitleScreen({ onNewGame, onContinue }: Props) {
  const saved = hasSave();
  return (
    <div className="title">
      <img src="/game/scenes/title.webp" alt="" />
      <div className="title-copy">
        <p className="kicker">Working title</p>
        <h1>Occupied Memphis</h1>
        <div className="title-actions">
          <button type="button" onClick={onNewGame}>
            New Game
          </button>
          <button type="button" disabled={!saved} onClick={onContinue}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
