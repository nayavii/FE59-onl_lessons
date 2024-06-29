import { useState } from "react";
import { Board } from "../board";
import { calcWinner } from "../helper";
import Surf from "./images/surf.png";
import Wave from "./images/wave.png";

import "./index.scss";

export const Game = () => {
  const [history, setHistory] = useState([
    { squares: new Array(9).fill(null) },
  ]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  console.log(history);

  const handleClick = (id) => {
    const newHistory = history.slice(0, stepNumber + 1);
    const currentStap = history[history.length - 1]; //{ squares: new Array(9).fill(null) },
    const squares = [...currentStap.squares];

    const surfIcon = <img className="game__surf" src={Surf} alt="Sufr" />;
    const waveIcon = <img className="game__surf" src={Wave} alt="Wave" />;

    if (calcWinner(squares) || squares[id]) {
      console.log("победил ", xIsNext ? "Wave" : "Sufr");
      return;
    }

    squares[id] = xIsNext ? surfIcon : waveIcon;

    setHistory([...newHistory, { squares }]);
    setStepNumber(newHistory.length);
    setXIsNext((prevState) => !prevState);
  };

  return (
    <section className="game">
      <div className="container">
        <div className="game__wrapper">
          <Board
            squares={history[stepNumber].squares}
            handleClick={handleClick}
          />
        </div>
      </div>
    </section>
  );
};
