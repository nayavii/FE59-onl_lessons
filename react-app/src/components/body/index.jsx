import "./index.scss";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { BlogPage } from "../blog-page";
import { Modal } from "../modal";
import { Login } from "../login";
import { LoginSuccess } from "../successLogin";
import { Article } from "../article";
import { Register } from "../register";
import { RegisterSuccess } from "../successRegister";
import { Game } from "../game/main";
import { NotFound } from "../not-found";
import { MainPage } from "../main-page";
import { TodosPage } from "../todos-page";
import { ActivationEmailPage } from "../activation-email";
import { getBlackTheme } from "../../store/selectors";
import { UserProfile } from "../user-profile";

export const Body = ({ isShowModal, setIsShowModal }) => {
  const isBlackTheme = useSelector(getBlackTheme);

  return (
    <section className={isBlackTheme ? "black-theme" : ""}>
      <Routes>
        <Route
          path="/"
          element={
            <MainPage
              setIsShowModal={setIsShowModal}
              // isBlackTheme={isBlackTheme}
            />
          }
        />
        <Route path="*" element={<NotFound />} />

        <Route path="/blog/:filter" element={<BlogPage />} />
        <Route path="/blog/:filter/:postId" element={<Article />} />

        <Route path="todos" element={<TodosPage />} />
        <Route path="game" element={<Game />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="loginSuccess" element={<LoginSuccess />} />
        <Route path="registerSuccess" element={<RegisterSuccess />} />
        <Route path="activate/:uid/:token" element={<ActivationEmailPage />} />
        {/* <Route path="my-profile" element={<UserProfile />} /> */}
      </Routes>
      {/* {isShowModal && <Modal setIsShowModal={setIsShowModal} />} */}
      {isShowModal && <UserProfile setIsShowModal={setIsShowModal} /> } 
    </section>
  );
};
