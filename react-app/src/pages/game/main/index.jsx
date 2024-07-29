import { useState } from "react";
import { Board } from "../board";
import { Info } from "../info";
import { calcWinner } from "../helper";
import "./index.scss";

export const Game = () => {
  const [history, setHistory] = useState([
    { squares: new Array(9).fill(null) },
  ]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  const currentInfo = history[stepNumber];
  const winner = calcWinner(currentInfo.squares);
  const status = winner
    ? `Winner: ${xIsNext ? "O" : "X"}`
    : `Next player: ${xIsNext ? "X" : "O"}`;

  const handleClick = (id) => {
    const newHistory = history.slice(0, stepNumber + 1);
    const currentStap = history[history.length - 1]; //{ squares: new Array(9).fill(null) },
    const squares = [...currentStap.squares];

    if (calcWinner(squares) || squares[id]) {
      console.log("победил ", xIsNext ? "O" : "X");
      return;
    }

    squares[id] = xIsNext ? "X" : "O";

    setHistory([...newHistory, { squares }]);
    setStepNumber(newHistory.length);
    setXIsNext((prevState) => !prevState);
  };

  const jumpTo = (index) => {
    setStepNumber(index);
    setXIsNext(index % 2 === 0);
  };

  return (
    <section className="game">
      <div className="container">
        <div className="game__wrapper">
          <Board
            squares={history[stepNumber].squares}
            handleClick={handleClick}
          />
          <Info status={status} history={history} jumpTo={jumpTo} />
        </div>
      </div>
    </section>
  );
};