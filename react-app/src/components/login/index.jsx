import { useContext, useEffect, useRef, useState } from "react";
import "./index.scss";
import { Button } from "../button";
import { MyContext } from "../hooks/context.hook";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const { isBlackTheme } = useContext(MyContext);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  console.log(values);

  const navigate = useNavigate();

  const inputRefName = useRef(null); // {current: null}

  useEffect(() => {
    inputRefName.current.focus();
  }, []);

  const handleChange = (event) => {
    // console.log(event.target.value);
    const { name, value } = event.target;
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLogin = () => {
    console.log("Отправляем все данные в values на сервер: ", values);
    navigate("/loginSuccess");
  };

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <div className={`login ${isBlackTheme ? "login_black" : ""}`}>
      <div className="container">
        <div className="login__wrapper">
          <h2 className="login__title title">Sing In</h2>
          <label>
            Your email
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="login__input"
              onInput={handleChange}
              ref={inputRefName}
            />
          </label>

          <label>
            Your password
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="login__input"
              onInput={handleChange}
            />
          </label>

          <Button
            className="login__btn"
            title={"Login"}
            onClick={handleLogin}
          />
          <p className="login__text">
            Нет аккаунта? Ноу проблем. Нажми на{" "}
            <a onClick={handleRegister} className="login__link">
              Sing Up
            </a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
