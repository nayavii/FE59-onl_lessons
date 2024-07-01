import { useContext } from "react";
import { Button } from "../button";
import { ModeButton } from "../mode-btn";
import Logo from "./images/logo.png";
import LogoWhite from "./images/logo_white.png";
import { MyContext } from "../hooks/context.hook";
import "./index.scss";
import { Link, useNavigate } from "react-router-dom";

export const Header = ({ handleChangeTheme }) => {
  const { isBlackTheme } = useContext(MyContext);
  const navigate = useNavigate()

  const handleSingInClick = () => {
    navigate("login");
  };

  const handleRegister = () => {
    navigate("register");
  };

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
            <Button
              title={"Sing in"}
              onClick={handleSingInClick}
              isOutlineButton={false}
            />
            <Button
              title={"Sing Up"}
              onClick={handleRegister}
              isOutlineButton={true}
            />
            <ModeButton handleChangeTheme={handleChangeTheme} />
          </div>
        </div>
      </div>
    </header>
  );
};
