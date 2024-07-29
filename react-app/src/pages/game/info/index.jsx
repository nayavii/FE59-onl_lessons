import { Button } from "../../../components/button";
import "./index.scss";

export const Info = ({ status, history, jumpTo }) => {
  const handleClick = (index) => () => {
    jumpTo(index);
  };

  return (
    <div className="info">
      <span className="info__title">{status}</span>
      <ul className="info__list">
        {history.map((_, index) => {
          const text = index ? `Go to move ${index}` : "Go to start";

          return (
            <li className="info__item" key={index}>
              <Button className="info__btn" onClick={handleClick(index)} title={text}/>
            </li>
          );
        })}
      </ul>
    </div>
  );
};