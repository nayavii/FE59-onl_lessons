import { useNavigate, useParams } from "react-router-dom";
import "./index.scss";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { activationEmailMiddlewareActions } from "../../store/actions";

export const ActivationEmailPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { uid, token } = useParams();

  console.log(uid, token);

  const handleLogin = () => {
    navigate("/login");
  };

  useEffect(() => {
    dispatch(activationEmailMiddlewareActions(uid, token))

  }, [])

  return (
    <div className="active-email">
      <div className="container">
        <div className="active-email__wrapper">
          <h2 className="active-email__title title">Email confirm</h2>
          <p className="active-email__text text">
            {" "}
            Поздравляю, ваша почта подтвердена.
          </p>
          <p className="active-email__text">
            {" "}
            Можете залогиниться{" "}
            <span onClick={handleLogin} className="active-email__link">
              Sing In
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
