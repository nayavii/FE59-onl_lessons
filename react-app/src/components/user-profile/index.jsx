import "./index.scss";
import { useSelector } from "react-redux";
import { getBlackTheme } from "../../store/selectors";
import { Button } from "../button";

export const UserProfile = ({setIsShowModal}) => {
  const user = useSelector((state) => state.user);
  const isBlackTheme = useSelector(getBlackTheme);
  console.log(user);

  const handleClose = () => {
    setIsShowModal(false)
  };

  return (
    <div className={`profile ${isBlackTheme ? "profile_black" : ""}`}>
      <div className="container">
        <div className="profile__wrapper">
          <h2 className="profile__title title">Profile</h2>
          <label>
            Id
            <input
              type="text"
              name="username"
              value={user.content.id}
              className="profile__input"
            />
          </label>
          <label>
            UserName
            <input
              type="text"
              name="username"
              value={user.content.username}
              className="profile__input"
            />
          </label>
          <label>
            Email
            <input
              type="text"
              name="username"
              value={user.content.email}
              className="profile__input"
            />
          </label>
          <div className="profile__actions">
            <Button
              title={"Cancel"}
              onClick={handleClose}
              isOutlineButton={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
