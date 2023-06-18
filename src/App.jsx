import { useState } from "react";
import "./App.css";

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (index) => {
    if (squares[index] || calculateWinner(squares)) return;
    const newSquares = [...squares];
    if (xIsNext) newSquares[index] = "X";
    else newSquares[index] = "O";
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const handleReset = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  const calculateWinner = (squares) => {
    let list = [
      [0, 1, 2], // row 1
      [3, 4, 5], // row 2
      [6, 7, 8], // row 3
      [0, 3, 6], // col 1
      [1, 4, 7], // col 2
      [2, 5, 8], // col 3
      [0, 4, 8], // diagonal 1
      [2, 4, 6], // diagonal 2
    ];

    for (let i = 0; i < list.length; i++) {
      const [a, b, c] = list[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
        return squares[a];
    }
    return null;
  };

  const winner = calculateWinner(squares);
  let status;
  if (winner) status = "Winner: " + winner + "!";
  else status = "Next player: " + (xIsNext ? "X" : "O");

  // eslint-disable-next-line react/prop-types
  const Square = ({ value, onSquareClick }) => {
    return (
      <button className="square" onClick={onSquareClick}>
        {value}
      </button>
    );
  };

  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <div className="status">{status}</div>
      <div className="container">
        <div className="board-row">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="board-row">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="board-row">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </div>
      {winner && (
        <button className="reset" onClick={handleReset}>
          Reset
        </button>
      )}
    </div>
  );
}

export default App;
