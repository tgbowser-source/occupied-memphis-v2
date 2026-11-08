import { useEffect } from "react";
import { CharacterCreate } from "./components/CharacterCreate";
import { DialoguePanel } from "./components/DialoguePanel";
import { HUD } from "./components/HUD";
import { Objectives } from "./components/Objectives";
import { ReputationMenu } from "./components/ReputationMenu";
import { SaveMenu } from "./components/SaveMenu";
import { TitleScreen } from "./components/TitleScreen";
import { WorldCanvas } from "./components/WorldCanvas";
import { DISCLOSURE_CONFLICT, SLICE_NOTE } from "./game/story";
import { useGame } from "./game/store";

const VERSION = "0.12.0";

export function App() {
  const screen = useGame((s) => s.screen);
  const menu = useGame((s) => s.menu);
  const beginCreate = useGame((s) => s.beginCreate);
  const continueGame = useGame((s) => s.continueGame);
  const goTitle = useGame((s) => s.goTitle);
  const restart = useGame((s) => s.restart);
  const side = useGame((s) => s.side);
  const firstName = useGame((s) => s.firstName);
  const choice = useGame((s) => s.flags.connorChoice);

  useEffect(() => {
    if (!import.meta.env.DEV) return;
    if (new URLSearchParams(window.location.search).get("yard") === "1") useGame.getState().devYard();
  }, []);

  return (
    <>
      {screen === "title" && <TitleScreen onNewGame={beginCreate} onContinue={continueGame} />}
      {screen === "create" && <CharacterCreate />}
      {screen === "birthday" && (
        <div className="birthday">
          <img src="/game/scenes/birthday-east.webp" alt="" />
          <div className="topbar">
            <button type="button" onClick={restart}>
              Restart
            </button>
            <button type="button" onClick={goTitle}>
              Back
            </button>
          </div>
          <DialoguePanel />
        </div>
      )}
      {screen === "world" && (
        <div className="stage">
          <WorldCanvas />
          <HUD />
          <SaveMenu />
          <Objectives />
          {menu === "rep" && <ReputationMenu />}
          <DialoguePanel />
        </div>
      )}
      {screen === "complete" && (
        <main className="sheet">
          <p className="kicker">Out of story</p>
          <h1>{firstName} Smith</h1>
          <section className="panel">
            <p>{SLICE_NOTE}</p>
            <p>
              Recorded choice: {choice === "disclose" ? "come clean" : choice === "covert" ? "play along" : "none"} on the{" "}
              {side} bank.
            </p>
            <p>{DISCLOSURE_CONFLICT}</p>
            <button type="button" onClick={goTitle}>
              Title
            </button>
          </section>
        </main>
      )}
      {import.meta.env.DEV && (
        <aside className="devpanel" aria-label="Development build">
          <p>Development only</p>
          <p>Occupied Memphis · v{VERSION}</p>
          <p>mode {import.meta.env.MODE}</p>
        </aside>
      )}
    </>
  );
}
