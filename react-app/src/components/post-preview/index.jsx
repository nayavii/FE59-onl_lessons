import "./index.scss";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../button";
import { getBlackTheme, getPost } from "../../store/selectors";
import { DELETE_POST_ACTION } from "../../store/actions";

export const PostPreview = () => {
  const isBlackTheme = useSelector(getBlackTheme);
  const post = useSelector(getPost);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePreviewClose = () => {
    dispatch(DELETE_POST_ACTION);
  };

  const handlePreviewRead = () => {
    navigate(`${post.id}`);
  };

  return (
    <div className={`post-preview ${isBlackTheme ? "post-preview_black" : ""}`}>
      <div className="container">
        <div className="post-preview__wrapper">
          <Link to={`${post.id}`} className="post-preview__img">
            <img src={post.image} alt="Image" />
          </Link>
          <div className="post-preview__info">
            <p className="post-preview__date">{post.date}</p>
            <Link to={`${post.id}`} className="post-preview__title">
              {post.title}
            </Link>

            <p className="post-preview__text">{post.text}</p>
          </div>
          <div className="post-preview__actions">
            <Button
              title={"Cancel"}
              onClick={handlePreviewClose}
              isOutlineButton={false}
            />

            <Button
              title={"Read"}
              onClick={handlePreviewRead}
              isOutlineButton={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
