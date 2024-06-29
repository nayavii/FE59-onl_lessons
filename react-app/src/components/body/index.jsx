import { Banner } from "../banner";
import { Todos } from "../todos";
import { Blog } from "../blog";
import { Modal } from "../modal";
import { Login } from "../login";
import { LoginSuccess } from "../successLogin";
import { Article } from "../article";
import "./index.scss";
import { Register } from "../register";
import { RegisterSuccess } from "../successRegister";
import { Game } from "../game/main";

export const Body = ({page, isShowModal, setIsShowModal, isBlackTheme, setPage}) => {

  

  return (
    <section className={isBlackTheme ? 'black-theme' : ''}>
      
      {page === "home" && <Banner setIsShowModal={setIsShowModal} isBlackTheme={isBlackTheme} />}
      {page === "blog" && <Blog setPage={setPage} />}
      {page === "todos" && <Todos  />}
      {page === "login" && <Login setPage={setPage} />}
      {page === "register" && <Register setPage={setPage}  />}
      {page === "loginSuccess" && <LoginSuccess setPage={setPage} />}
      {page === "registerSuccess" && <RegisterSuccess setPage={setPage}  />}
      {page === "article" && <Article />}
      {page === "game" && <Game />}
      {isShowModal && <Modal setIsShowModal={setIsShowModal} />}
      {/* {isShowModal && <Modal /> }  */}
    </section>
  );
};
