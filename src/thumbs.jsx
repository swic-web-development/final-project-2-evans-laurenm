import React, { useState } from 'react'

function Thumbs({ joke }) {
  const [vote, setVote] = useState(null)

  const handleVote = (direction) => {
    if (vote === direction) {
      setVote(null)
    } else {
      setVote(direction)
    }
  }

  return (
    <div className="mx-auto max-w-xl rounded bg-gray-700 p-6 text-white shadow-lg">
      <p className="mb-4 text-lg font-medium">{joke}</p>

      <div className="flex justify-center space-x-6">
        {vote !== 'down' && (
          <button
            onClick={() => handleVote('up')}
            className="text-2xl text-green-400 transition-transform hover:scale-110"
            aria-label="Thumbs Up"
          >
            👍
          </button>
        )}

        {vote !== 'up' && (
          <button
            onClick={() => handleVote('down')}
            className="text-2xl text-red-400 transition-transform hover:scale-110"
            aria-label="Thumbs Down"
          >
            👎
          </button>
        )}
      </div>

      {vote && (
        <p className="mt-4 text-center text-sm text-gray-300">
          You voted {vote === 'up' ? '👍 Thumbs Up' : '👎 Thumbs Down'}
        </p>
      )}
    </div>
  )
}

export default Thumbs
