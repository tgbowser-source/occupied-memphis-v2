import { useState } from "react";

const VERSION = "0.1.0";

type Screen = "home" | "started";

export function App() {
  const [screen, setScreen] = useState<Screen>("home");

  return (
    <main className="shell">
      <p className="kicker">Working title</p>
      <h1>Occupied Memphis</h1>
      {screen === "home" ? (
        <section className="panel" aria-label="Start">
          <p>Navigation check. No story on this screen.</p>
          <button type="button" onClick={() => setScreen("started")}>
            Start
          </button>
        </section>
      ) : (
        <section className="panel" aria-label="Started">
          <p>Start reached. Go back to the title shell.</p>
          <button type="button" onClick={() => setScreen("home")}>
            Back
          </button>
        </section>
      )}
      {import.meta.env.DEV && (
        <aside className="devpanel" aria-label="Development build">
          <p>Development only</p>
          <p>Occupied Memphis · v{VERSION} · batch 0</p>
          <p>mode {import.meta.env.MODE}</p>
        </aside>
      )}
    </main>
  );
}
