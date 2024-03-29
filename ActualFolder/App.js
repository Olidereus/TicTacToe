import './App.css';
import {useState } from 'react';

function Square(props) {  
  return (
      <button className="square" onClick={() => props.onClick()}>
        {props.value}
      </button>
    );
}
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const handleClick = (i) => {
    const  squarestemp = squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squarestemp[i] = xIsNext ? 'X' : 'O';
    setSquares(squarestemp);
    setXIsNext(!xIsNext)
  }
  const renderSquare = (i) => {
    return <Square value={squares[i]}
    onClick={() => handleClick(i) }/>
  }
    const [winner, SetWinner] = useState();
    let status;
    if (calculateWinner(squares)) {
      status = 'Winner: ' + calculateWinner(squares);
    } else {
      status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }
  return (
    <div className="App">
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
    </div>
  );
}

function Game(){

    return (
      <div className="game">
        <div className="game-board">
          <App />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
}
export default Game;
