import { useContext } from "react";
import { Button } from "../button";
import { ModeButton } from "../mode-btn";
import Logo from "./images/logo.png";
import LogoWhite from "./images/logo_white.png";
import { MyContext } from "../hooks/context.hook";
import "./index.scss";

export const Header = ({setPage, handleChangeTheme}) => {

  const {isBlackTheme} = useContext(MyContext);

  const handleSingInClick = () => {
    setPage("login");
  };

  const handleRegister = () => {
    setPage("register");
  };

  return (
    <header className={`header ${isBlackTheme ? "header_black" : ""}`}>
      <div className="container">
        <div className="header__wrapper">
          <div className="header__logo">
            <img src={isBlackTheme ? LogoWhite : Logo} alt="Logo" onClick={() => setPage("home")} />
          </div>
          <nav className="header__menu">
            <ul className="header__list">
              <li className="header__item">
                <button className="header__btn" onClick={() => setPage("home")}>
                  Home
                </button>
              </li>
              <li className="header__item">
                <button
                  className="header__btn"
                  onClick={() => setPage("todos")}
                >
                  Todos
                </button>
              </li>
              <li className="header__item">
                <button className="header__btn" onClick={() => setPage("blog")}>
                  Blog
                </button>
              </li>
              <li className="header__item">
                <button className="header__btn" onClick={() => setPage("game")}>
                  Game
                </button>
              </li>
            </ul>

          </nav>

          <div className="header__btn">
            <Button title={"Sing in"} onClick={handleSingInClick} isOutlineButton={false}/>
            <Button title={"Sing Up"} onClick={handleRegister} isOutlineButton={true} />
            <ModeButton
              handleChangeTheme={handleChangeTheme}
              
            />
          </div>


        </div>
      </div>
    </header>
  );
};
