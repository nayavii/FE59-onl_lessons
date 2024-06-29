// import { useState } from "react";
import { memo, useContext } from "react";
import "./index.scss";
import { MyContext } from "../hooks/context.hook";

const View = ({ title, isOutlineButton, className='', onClick }) => {
  const {isBlackTheme} = useContext(MyContext);
// export const Button = ({ title, isOutlineButton, className, onClick }) => {
  // const [isActiveBtn, setIsActiveBtn] = useState(false);
  // console.log(isActiveBtn); //false -- содержит начальное значение
  // console.log(setIsActiveBtn); //это функция

  if (isOutlineButton) {
    className += " button_outline";
  } else {
    className += " button_fill";
  }


  return (
    <button type="button" className={`button  ${isBlackTheme ? "button_black" : ""} ${className}`} onClick={onClick}>
      {title}
    </button>
  );
};

export const Button = memo(View);