import { BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import { Header } from "../header";
import { Body } from "../body";
// import { MyContext } from "../hooks/context.hook";
import "./index.scss";
import { fetchUserInfo } from "../../api/user";
import { addUserDataAction, getUserInfoAction } from "../../store/actions";
import { useDispatch } from "react-redux";

export const App = () => {
  // const [page, setPage] = useState("home");
  const [isShowModal, setIsShowModal] = useState(false);
  // const [isBlackTheme, setIsBlackTheme] = useState(false);
  const dispatch = useDispatch()
  // const handleChangeTheme = () => {
  //   setIsBlackTheme((prevState) => !prevState);
  // };

  // useEffect(() => {
  //   fetchUserInfo().then((response) => {
  //     console.log(response);
  //     // localStorage.setItem("isAuth", response.id ? true : false);
  //     localStorage.setItem("isAuth", !!response?.id);

  //     if (response?.id) {
  //       dispatch(addUserDataAction(response));
  //     }
  //   });
  // }, []); // то же что и componentDidMount;

  // useEffect(() => {
  //   // ..что-то что должно выполняться только когда меняется page
  // }, [page]); // то же что и componentDidUpdate с обновлением page;

  useEffect(() => {
    // ..что-то что должно выполняться всегда
  }); // то же что и componentDidUpdate;

  return (
    <BrowserRouter>
      {/* <MyContext.Provider> */}
      {/* <MyContext.Provider value={{ isBlackTheme }}> */}

      <Header
        setIsShowModal={setIsShowModal}
        // setPage={setPage}
        // handleChangeTheme={handleChangeTheme}
      />
      <Body
        // setPage={setPage}
        // page={page}
        isShowModal={isShowModal}
        setIsShowModal={setIsShowModal}
        // isBlackTheme={isBlackTheme}
      />
      {/* </MyContext.Provider> */}
    </BrowserRouter>
  );
};
