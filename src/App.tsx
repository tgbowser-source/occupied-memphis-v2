import { useState } from 'react'

function App() {
  const [screen, setScreen] = useState<'home' | 'start'>('home')

  return (
    <div className="app">
      <header>
        <h1>Occupied Memphis</h1>
        <p className="subtitle">Working title — alt-history Memphis RPG, 1950–55</p>
      </header>

      {screen === 'home' && (
        <main className="home">
          <p>Batch 0 smoke test: app shell is running.</p>
          <button onClick={() => setScreen('start')}>Start</button>
          <div className="version-panel">
            <small>dev build · v0.0.1 · Batch 0</small>
          </div>
        </main>
      )}

      {screen === 'start' && (
        <main className="start">
          <p>Navigation smoke test passed. This is the start screen stub.</p>
          <button onClick={() => setScreen('home')}>Back</button>
        </main>
      )}
    </div>
  )
}

export default App
