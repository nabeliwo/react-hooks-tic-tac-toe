import { useCallback, useState } from 'react'

import { calculateWinner } from './helper'
import { Board } from './Board'

const wrapperStyle = {
  display: 'flex',
}
const boardStyle = {
  marginRight: 20,
}

export const Game = () => {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }])
  const [stepNumber, setStepNumber] = useState(0)
  const [xIsNext, setXIsNext] = useState(true)

  const current = history[stepNumber]
  const winner = calculateWinner(current.squares)
  let status = `Next player: ${xIsNext ? 'X' : 'O'}`

  if (winner) {
    status = `Winner: ${winner}`;
  }

  const handleClickSquare = useCallback((i) => {
    const validHistory = history.slice(0, stepNumber + 1)
    const current = validHistory[validHistory.length - 1]
    const squares = current.squares.slice()

    if (calculateWinner(squares) || squares[i]) return

    squares[i] = xIsNext ? 'X' : 'O';

    setHistory(history.concat([
      {
        squares: squares
      }
    ]))
    setStepNumber(history.length)
    setXIsNext(!xIsNext)
  }, [history, stepNumber, xIsNext])

  const handleClickHistory = (step) => {
    setStepNumber(step)
    setXIsNext(step % 2 === 0)
  }

  return (
    <div style={wrapperStyle}>
      <div style={boardStyle}>
        <Board squares={current.squares}  onClick={i => handleClickSquare(i)} />
      </div>

      <div>
        <p>{status}</p>

        <ol>
          {history.map((_, move) => {
            const desc = move === 0 ? 'Go to game start' : `Go to move #${move}`

            return (
              <li key={move}>
                <button onClick={() => handleClickHistory(move)}>{desc}</button>
              </li>
            )
          })}
        </ol>
      </div>
    </div>
  )
}
