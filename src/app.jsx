import React, { useState, useRef } from 'react'
import store from './store'
import { fetchJokes } from './actions'

// Display joke component
function JokeCard({ joke }) {
  return (
    <div className="mx-auto max-w-xl rounded bg-gray-700 p-6 text-white shadow-lg">
      <p className="text-lg font-medium">{joke}</p>
    </div>
  )
}

export default function App() {
  const [state, setState] = useState(store.getState())
  const initialized = useRef(false)

  // Initialize only once (on first render)
  if (!initialized.current) {
    store.subscribe(setState)
    fetchJokes()
    initialized.current = true
  }

  if (state.error) {
    return <p className="p-4 text-center text-red-400">{state.error}</p>
  }

  if (state.isLoading) {
    return <p className="p-4 text-center text-gray-400">Loading...</p>
  }

  return (
    <main className="min-h-screen bg-gray-800 p-6 text-white">
      <h1 className="mb-6 text-center text-3xl font-bold">Dad Jokes</h1>
      <JokeCard joke={state.joke} />
    </main>
  )
}
