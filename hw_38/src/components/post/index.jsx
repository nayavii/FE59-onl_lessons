import likeIcon from "./images/like_icon.png";
import dislikeIcon from "./images/dislike_icon.png";
import saveIcon from "./images/save_icon.png";
import optionsIcon from "./images/options_icon.png";
import "./index.scss";

export const Post = ({ size, post}) => {
  const className = size ? `post post_${size}` : "post";
  

  return (
    <div className={className}>
      <div className="container">
        <div className="post__wrapper">
          <div className="post__info">
            <p className="post__date">{post.date}</p>
            <h3 className="post__title">{post.title}</h3>
            <p className="post__text">{post.text}</p>
          </div>
          <div className="post__img">
            <img src={post.image} alt="" />
          </div>
        </div>
        <div className="post__icons">
          <div className="post__icons__likes">
            <img src={likeIcon} alt="Like" />
            <img src={dislikeIcon} alt="Dislike" />
          </div>
          <div className="post__icons__save">
            <img src={saveIcon} alt="Save" />
            <img src={optionsIcon} alt="Options" />
          </div>
        </div>
        <div className="post__line"></div>
      </div>
    </div>
  );
};
