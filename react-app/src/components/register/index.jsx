import { useContext, useEffect, useRef, useState } from "react";
import "./index.scss";
import { Button } from "../button";
import { MyContext } from "../hooks/context.hook";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const {isBlackTheme} = useContext(MyContext);

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const navigate = useNavigate();

  const inputRefName = useRef(null); // {current: null}
  const inputConfirmPassRef = useRef(null); 

  useEffect(() => {
    inputRefName.current.focus();
  }, []);

  const [errors, setErrors] = useState({});

  console.log(values);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleRegister = () => {
    if (values.password === values.passwordConfirm) {
      if (errors.passwordConfirm) {
        setErrors({});
      }
      console.log("Отправляем все данные в values на сервер: ", values);
      navigate("/registerSuccess");
    } else {
      setErrors({ passwordConfirm: "Пароли не совпадают" });
      inputConfirmPassRef.current.focus();
    }
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className={`register ${isBlackTheme ? "register_black" : ""}`}>
      <div className="container">
        <div className="register__wrapper">
          <h2 className="register__title title">Sing Up</h2>
          <label>
            Your Name
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="register__input"
              onInput={handleChange}
              ref={inputRefName}
            />
          </label>
          <label>
            Your email
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="register__input"
              onInput={handleChange}
            />
          </label>

          <label>
            Your password
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="register__input"
              onInput={handleChange}
            />
          </label>
          <label>
            Confirm password
            <input
              type="password"
              name="passwordConfirm"
              placeholder="Enter your password"
              className="register__input"
              onInput={handleChange}
              ref={inputConfirmPassRef}
            />
          </label>
          {errors.passwordConfirm && (
            <p className="input-error">{errors.passwordConfirm}</p>
          )}

          <Button
            className="register__btn"
            title={"Register"}
            onClick={handleRegister}
          />
          <p className="register__text">
            Уже есть аккаунт? Ноу проблем. Нажми на{" "}
            <span onClick={handleLogin} className="register__link">
              Sing In
            </span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
