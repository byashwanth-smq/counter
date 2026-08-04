import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [pulse, setPulse] = useState(false)

  useEffect(() => {
    if (!pulse) return
    const id = window.setTimeout(() => setPulse(false), 280)
    return () => window.clearTimeout(id)
  }, [pulse])

  const increment = () => {
    setCount((value) => value + 1)
    setPulse(true)
  }

  const reset = () => {
    setCount(0)
    setPulse(true)
  }

  return (
    <main className="stage">
      <div className="atmosphere" aria-hidden="true">
        <span className="orb orb-a" />
        <span className="orb orb-b" />
        <span className="grain" />
      </div>

      <section className="hero">
        <p className="brand">Counter</p>
        <h1 className="tagline">One tap. One more.</h1>
        <p className="support">Keep a clean tally without the noise.</p>

        <p
          key={count}
          className={`tally${pulse ? ' tally-pulse' : ''}`}
          aria-live="polite"
        >
          {count}
        </p>

        <div className="actions">
          <button className="btn-primary" type="button" onClick={increment}>
            Count up
          </button>
          <button className="btn-ghost" type="button" onClick={reset}>
            Reset
          </button>
        </div>
      </section>
    </main>
  )
}

export default App
