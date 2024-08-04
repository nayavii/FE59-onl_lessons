import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const Counter = () => {
  //   const dispatch = useDispatch();
  //   const count = useSelector((state) => state.count);
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevState) => prevState + 1);
  };

  const decrement = () => {
    setCount((prevState) => prevState - 1);
  };

  return (
    <div className="" style={{ margin: "50px" }}>
      <div className="">Результат: {count}</div>
      <button onClick={increment}>Увеличить</button>
      <button onClick={decrement}>Уменьшить</button>
      {/* <button onClick={() => dispatch({ type: "INCREMENT" })}>Увеличить</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Уменьшить</button> */}
    </div>
  );
};
