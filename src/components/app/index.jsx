import { Alert } from "../alert";
import { MenuHamburger } from "../menuBurger";
import { Title } from "../title";
import "./index.css";

export const App = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <h1>Home Work 37</h1>
        </div>
      </header>
      <section className="section">
        <div className="container">
          <h2>1. Создать компонент "Title"</h2>
          <Title title={'Sing In'}/>
          <Title title={'Sing Out'}/>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>2. Кнопка “menu hamburger”</h2>
          <MenuHamburger isOpen={true} />
          <MenuHamburger  />
          
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>3. Alerts”</h2>
          
          <Alert status={'warning'}  />
          <Alert status={'stop'}  />
          <Alert status={'accept'}  />
          <Alert status={'info'}  />
          <Alert status={'alert'}  />
          
        </div>
      </section>
    </>
  );
};
