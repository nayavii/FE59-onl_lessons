import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../button";
import { getBlackTheme, getUser } from "../../selectors";
import { RegisterSuccess } from "../successRegister";
import "./index.scss";
import { registerMiddlewareActions } from "../../actions";

export const Register = () => {
  // const {isBlackTheme} = useContext(MyContext);
  const isBlackTheme = useSelector(getBlackTheme);

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    // passwordConfirm: "",
    course_group: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  console.log(user);

  const inputRefName = useRef(null); // {current: null}
  const inputConfirmPassRef = useRef(null);

  useEffect(() => {
    if (inputRefName.current) {
      inputRefName.current.focus();
    }
  }, []);

  // const [errors, setErrors] = useState({});

  console.log(values);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleRegister = () => {
    // if (values.password === values.passwordConfirm) {
    //   if (errors.passwordConfirm) {
    //     setErrors({});
    //   }
    //   console.log("Отправляем все данные в values на сервер: ", values);
    //   navigate("/registerSuccess");
    // } else {
    //   setErrors({ passwordConfirm: "Пароли не совпадают" });
    //   inputConfirmPassRef.current.focus();
    // }

    dispatch(registerMiddlewareActions(values));
  };

  

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className={`register ${isBlackTheme ? "register_black" : ""}`}>
      <div className="container">
        <div className="register__wrapper">
          {user.content.id ? (
            <RegisterSuccess />
          ) : (
            <>
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
              {user.errors.username && (
                <p className="input-error">{user.errors.username.join(', ')}</p>
              )}
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
              {user.errors.email && (
                <p className="input-error">{user.errors.email.join(', ')}</p>
              )}

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
              {user.errors.password && (
                <p className="input-error">{user.errors.password.join(' ')}</p>
              )}
              {/* <label>
                Confirm password
                <input
                  type="password"
                  name="passwordConfirm"
                  placeholder="Enter your password"
                  className="register__input"
                  onInput={handleChange}
                  ref={inputConfirmPassRef}
                />
              </label> */}
              {/* {user.errors.password && (
                <p className="input-error">{user.errors.passwordConfirm.join(', ')}</p>
              )} */}

              <label>
                Your group
                <input
                  type="text"
                  name="course_group"
                  placeholder="Enter your course group"
                  className="register__input"
                  onInput={handleChange}
                />
              </label>

              <Button
                className="register__btn"
                title={"Register"}
                onClick={handleRegister}
              />
              <p className="register__text">
                Уже есть аккаунт? Ноу проблем. Нажми на
                <span onClick={handleLogin} className="register__link">
                  Sing In
                </span>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
