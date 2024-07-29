import { useNavigate } from "react-router-dom";
import { Button } from "../../components/button";
import "./index.scss";

export const LoginSuccess = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="success">
      <div className="container">
        <div className="success__wrapper">
          <h2 className="success__title title">Success</h2>
          <p className="success__text"> Вы успешно залогинились! </p>
          <Button
            className="success__btn"
            title={"Go to Home"}
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
};
