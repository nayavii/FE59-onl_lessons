import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { Header } from "../header";
import { Modal } from "../modal";
import { Body } from "../body";
import { MyContext } from "../hooks/context.hook";
import "./index.scss";

export const App = () => {
  // const [page, setPage] = useState("home");
  const [isShowModal, setIsShowModal] = useState(false);
  const [isBlackTheme, setIsBlackTheme] = useState(false);

  const handleChangeTheme = () => {
    setIsBlackTheme((prevState) => !prevState);
  };

  useEffect(() => {
    // ..что-то что должно выполняться

    return () => {
      //..что-то что должно выполняться когда компонент размонтируется
      // то же что и   componentWillUnmount;
    };
  }, []); // то же что и componentDidMount;

  // useEffect(() => {
  //   // ..что-то что должно выполняться только когда меняется page
  // }, [page]); // то же что и componentDidUpdate с обновлением page;

  useEffect(() => {
    // ..что-то что должно выполняться всегда
  }); // то же что и componentDidUpdate;

  return (
    <BrowserRouter>
      <MyContext.Provider value={{ isBlackTheme }}>
        <Header
          setIsShowModal={setIsShowModal}
          // setPage={setPage}
          handleChangeTheme={handleChangeTheme}
        />
        <Body
          // setPage={setPage}
          // page={page}
          isShowModal={isShowModal}
          setIsShowModal={setIsShowModal}
          isBlackTheme={isBlackTheme}
        />
      </MyContext.Provider>
    </BrowserRouter>
  );
};
