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
import { Route, Routes } from "react-router-dom";
import { NotFound } from "../not-found";

export const Body = ({ isShowModal, setIsShowModal, isBlackTheme }) => {
  return (
    <section className={isBlackTheme ? "black-theme" : ""}>
      <Routes>
        <Route
          path="/"
          element={
            <Banner
              setIsShowModal={setIsShowModal}
              isBlackTheme={isBlackTheme}
            />
          }
        />
        <Route path="/blog/:filter" element={<Blog />} />
        <Route path="/blog/:filter/:postId" element={<Article />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/game" element={<Game />} />
        <Route path="*" element={<NotFound />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="loginSuccess" element={<LoginSuccess />} />
        <Route path="registerSuccess" element={<RegisterSuccess />} />

      

        {isShowModal && <Modal setIsShowModal={setIsShowModal} />}
        {/* {isShowModal && <Modal /> }  */}
      </Routes>
    </section>
  );
};
