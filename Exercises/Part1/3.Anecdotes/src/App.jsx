import { useState } from 'react'
import './App.css'

const anecdotes = [
  'If it hurts, do it more often.',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is the same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
  'The only way to go fast, is to go well.'
]

const App = () => {
  const [selected, setSelected] = useState(0)

  const showNext = () => {
    setSelected((current) => {
      const offset = Math.floor(Math.random() * (anecdotes.length - 1)) + 1
      return (current + offset) % anecdotes.length
    })
  }

  return (
    <main className="page-shell">
      <section className="anecdote-card" aria-labelledby="page-title">
        <p className="eyebrow">A little perspective</p>
        <h1 id="page-title">Developer wisdom</h1>
        <div className="quote-mark" aria-hidden="true">“</div>
        <blockquote className="anecdote" aria-live="polite">
          {anecdotes[selected]}
        </blockquote>
        <button className="next-button" onClick={showNext}>
          <span>Another thought</span>
          <span className="button-arrow" aria-hidden="true">→</span>
        </button>
      </section>
    </main>
  )
}

export default App
