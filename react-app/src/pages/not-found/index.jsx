import { Link } from "react-router-dom";
import "./index.scss";

export const NotFound = () => {
  return (
    <section className="notFound">
      <div className="container">
        <h1 className="notFound__title title">404</h1>
        <p className="notFound__text">Страница не найдена или удалена.</p>
        <Link to="/" className="notFound__btn">
          Вернуться на главную
        </Link>
      </div>
    </section>
  );
};
