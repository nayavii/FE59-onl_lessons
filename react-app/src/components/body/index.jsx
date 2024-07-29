import "./index.scss";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { BlogPage } from "../../pages/blog-page";
import { Modal } from "../modal";
import { Login } from "../../pages/login";
import { LoginSuccess } from "../../pages/successLogin";
import { Article } from "../../pages/article";
import { Register } from "../../pages/register";
import { RegisterSuccess } from "../../pages/successRegister";
import { Game } from "../../pages/game/main";
import { NotFound } from "../../pages/not-found";
import { MainPage } from "../../pages/main-page";
import { TodosPage } from "../../pages/todos-page";
import { ActivationEmailPage } from "../../pages/activation-email";
import { getBlackTheme } from "../../store/selectors";
import { UserProfile } from "../user-profile";
import { CreatePost } from "../../pages/create-post";

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
        <Route path="create-post" element={<CreatePost />} />
        {/* <Route path="my-profile" element={<UserProfile />} /> */}
      </Routes>
      {/* {isShowModal && <Modal setIsShowModal={setIsShowModal} />} */}
      {isShowModal && <UserProfile setIsShowModal={setIsShowModal} /> } 
    </section>
  );
};
