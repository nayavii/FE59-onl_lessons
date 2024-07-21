import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../button";
import { ModeButton } from "../mode-btn";
import Logo from "./images/logo.png";
import LogoWhite from "./images/logo_white.png";
import Person from "./images/person.svg";
import PersonWhite from "./images/person-white.svg";
import { getBlackTheme } from "../../store/selectors";
import { getToken, getUserInfo, getUserInfoAction, LOGOUT_ACTION } from "../../store/actions";

export const Header = ({setIsShowModal}) => {
  const isBlackTheme = useSelector(getBlackTheme);
  const user = useSelector((state) => state.user.content);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isAuth = localStorage.getItem('isAuth');



  const handleSingInClick = () => {
    navigate("login");
  };

  const handleRegister = () => {
    navigate("register");
  };

  const handleLogout = () => {
    dispatch(LOGOUT_ACTION);
    localStorage.setItem("isAuth", false);
    navigate("/");
  };

  const getProfile = () => {
    dispatch(getUserInfoAction(navigate));
    
    setIsShowModal(true)
    
  }

  return (
    <header className={`header ${isBlackTheme ? "header_black" : ""}`}>
      <div className="container">
        <div className="header__wrapper">
          <Link to="/" className="header__logo">
            <img
              src={isBlackTheme ? LogoWhite : Logo}
              alt="Logo"
              onClick={() => navigate("home")}
            />
          </Link>

          <nav className="header__menu">
            <ul className="header__list">
              <li className="header__item">
                <Link to="/" className="header__btn">
                  Home
                </Link>
                {/* <button className="header__btn" onClick={() => setPage("home")}>
                  Home
                </button> */}
              </li>
              <li className="header__item">
                <Link to="/todos" className="header__btn">
                  Todos
                </Link>
                {/* <button
                  className="header__btn"
                  onClick={() => setPage("todos")}
                >
                  Todos
                </button> */}
              </li>
              <li className="header__item">
                <Link to="/blog/all" className="header__btn">
                  Blog
                </Link>
                {/* <button className="header__btn" onClick={() => setPage("blog")}>
                  Blog
                </button> */}
              </li>
              <li className="header__item">
                <Link to="/game" className="header__btn">
                  Game
                </Link>
                {/* <button className="header__btn" onClick={() => setPage("game")}>
                  Game
                </button> */}
              </li>
            </ul>
          </nav>

          <div className="header__btn">
            {isAuth ? (
              <>
                <img
                  className="header__icon"
                  src={isBlackTheme ? PersonWhite : Person}
                  alt="Logo"
                  onClick={getProfile}
                />
                <ModeButton />
                <Button
                  title="Log out"
                  onClick={handleLogout}
                  isOutlineButton={true}
                />
              </>
            ) : (
              <>
                <Button
                  title="Sing in"
                  onClick={handleSingInClick}
                  isOutlineButton={false}
                />
                <Button
                  title="Sing Up"
                  onClick={handleRegister}
                  isOutlineButton={true}
                />
                <ModeButton />
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
