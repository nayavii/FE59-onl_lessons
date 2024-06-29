import { Square } from "../square";
import "./index.scss";

const squaresList = [0, 1, 2, 3, 4, 5, 6, 7, 8];

export const Board = ({ squares, handleClick }) => {
  return (
    <div className="board">
      {squaresList.map((item) => {
        return (
          <Square
            value={squares[item]}
            id={item}
            key={item}
            handleClick={handleClick}
          />
        );
      })}
    </div>
  );
};