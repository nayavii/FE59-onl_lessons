import React, { createRef } from "react";
import { Button } from "../button";
import BannerImg from "./images/banner.jpg";
import "./index.scss";
import { MyContext } from "../hooks/context.hook";
import { useLocation, useNavigate } from "react-router-dom";

// это обертка над классовмы компонентом что бы ему передать хуки из реакт роутер дома
export const Banner = (props) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <View {...props} location={location} navigate={navigate} />
  );
};

export class View extends React.Component {
  interval;
  


  constructor(props) {
    // console.log("constructor - здесь инициилизируется класс");
    super(props);
    this.state = { isShowImage: true, shouldFetchData: false };
    this.bannerRef = createRef(null)
    // this.handleClick = this.handleClick.bind(this);
  }

  // static getDerivedStateFromProps(props) {
  //   if (props) {
  //     return {
  //       isShowImage: true,
  //       shouldFetchData: false,
  //     };
  //   }

  //   return null;
  // }

  componentDidMount() {
    //... какой-то код, который выполнится единожды при создании компонента (монтировании)
    // console.log(
    //   "componentDidMount - выполняется один раз и здесь мы ОБЫЧНО делаем запросы на сервак, навешиваем обработчики событий и тд "
    // );

    document.body.addEventListener("click", this.callback);

    // this.interval = setInterval(() => {
    //   console.log("ok");
    // }, 1000);
  }

  // shouldComponentUpdate() {
  //что-то подсчитываем и решаем, обновить компонент или нет, возвращает булевое значени
  //   return true || false;
  // }

  componentDidUpdate(prevProps, prevState) {
    // if (!prevState.shouldFetchData && this.state.shouldFetchData) {
    //   fetch("");
    // }

    // console.log(
    //   "componentDidUpdate - выполняется каждый раз когда обновляется стэйт или пропсы",
    //   prevProps,
    //   prevState,
    //   this.state
    // );
  }

  componentDidCatch() {
    // console.log("componentDidCatch - обработка ошибок компонента");
  }

  componentWillUnmount() {
    // console.log(
    //   "componentWillUnmount - выполняется при размонтировании (здесь удаляем таймауты и интервалы, глушем запросы и обрботчики событий)"
    // );

    clearInterval(this.interval);

    document.body.removeEventListener("click", this.callback);
  }

  handleClick = () => {
    this.setState({
      isShowImage: !this.state.isShowImage,
      shouldFetchData: true,
    });
  };

  render() {
    
    // console.log("render - смонтировался/изменился стэйт или пропсы");
    return (
      <section
        className={`main ${this.props.isBlackTheme ? "main_black" : ""}`}
        ref={this.bannerRef}
      >
        <div className="container">
          <div className="main__wrapper">
            <div className="main__info">
              <h1 className="main__title" >Открой для себя мир серфинга</h1>
              <p className="main__text">Присоединяйтесь к нашей серф-школе  и научитесь <br /> покорять волны с профессиональными инструкторами. <br /> Мы предлагаем курсы для всех уровней подготовки, <br /> от новичков до опытных серферов.</p>
              <Button title={"Узнать больше"} isOutlineButton={false} />
            </div>
            {/* <div className="main__img" onClick={this.handleClick}>
              {this.state.isShowImage ? <img src={BannerImg} alt="" /> : null}
            </div> */}
          </div>
        </div>
      </section>
    );
  }
}
