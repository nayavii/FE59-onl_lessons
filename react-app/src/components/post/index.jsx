import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  LIKE_ACTION,
  addPostAction,
  addImageAction,
  likeAction,
  dislikeAction,
  favoriteAction,
  addPostByIdAction,
} from "../../store/actions";
import likeIcon from "./images/like_icon.svg";
import dislikeIcon from "./images/dislike_icon.svg";
import saveIcon from "./images/save_icon.svg";
import optionsIcon from "./images/options_icon.png";
import "./index.scss";
import { getBlackTheme, getImage } from "../../store/selectors";

export const Post = ({ size, post, index }) => {
  const dispatch = useDispatch();
  const isBlackTheme = useSelector(getBlackTheme);
  const image = useSelector(getImage);

  const handleLike = () => {
    dispatch(likeAction(post.id));
  };

  const handleDislike = () => {
    dispatch(dislikeAction(post.id));
  };

  const handleFavoriteClick = () => {
    dispatch(favoriteAction(post.id));
  };

  const handleImage = () => {
    dispatch(addImageAction(post.image));
    console.log(image);
  };

  const handlePreview = () => {
    dispatch(addPostByIdAction(post));
  };

  return (
    <div
      className={`post post_${size} ${isBlackTheme ? "post_black" : ""}`}
      style={{ gridArea: `post-${index}` }}
    >
      <div className="container">
        <div className="post__wrapper">
          <div className="post__info">
            <p className="post__date">{post.date}</p>
            <Link to={`${post.id}`} className="post__title">
              {post.title}
            </Link>

            <p className="post__text">{post.text}</p>
          </div>

          <div className="post__img" onClick={handleImage}>
            <img src={post.image} alt="Image" />
          </div>
        </div>
        <div className="post__actions">
          <div className="post__likes">
            <img
              src={likeIcon}
              alt="Like"
              className={`post__icon ${
                post.isLiked ? "post__icon_active" : ""
              }`}
              onClick={handleLike}
            />
            <p className="post__likes__info post__like">{post.likesCount}</p>
            <img
              src={dislikeIcon}
              alt="Dislike"
              className={`post__icon post__icon_dislike ${
                post.isDisliked ? "post__icon_active" : ""
              }`}
              onClick={handleDislike}
            />
            <p className="post__likes__info post__dislike">
              {post.dislikesCount}
            </p>
          </div>
          <div className="post__options">
            <img
              src={saveIcon}
              alt="Save"
              className={`post__icon ${
                post.favorites ? "post__icon_active" : ""
              }`}
              onClick={handleFavoriteClick}
            />
            <img
              src={optionsIcon}
              alt="Options"
              className="post__icon"
              onClick={handlePreview}
            />
          </div>
        </div>
        <div className="post__line"></div>
      </div>
    </div>
  );
};
