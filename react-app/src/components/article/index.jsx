import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Button } from "../button";
import { useEffect, useState } from "react";
import { postsData } from "../posts/mock-data.js";
import { Spinner } from "../spinner/index.jsx";
import "./index.scss";
import {
  getPostByIdMiddlewareActions,
  addPostsMiddlewareActions,
  DELETE_POST_ACTION,
  REQUEST_POST_ACTION,
} from "../../store/actions/index.js";
import { useDispatch, useSelector } from "react-redux";
import { getPost, getTab } from "../../store/selectors/index.js";

export const Article = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  // const [post, setPost] = useState(null);
  const post = useSelector(getPost);
  console.log(post);
  console.log(postId);
  const tab = useSelector(getTab);

  useEffect(() => {
    dispatch(getPostByIdMiddlewareActions(postId));
  }, [dispatch, postId]);

  const handleClick = () => {
    dispatch(DELETE_POST_ACTION);
    // navigate("/blog");
    // navigate(-1); // возврат на предыдущую страницу
    // navigate('/blog/all'); // возврат на предыдущую страницу
    navigate(`/blog/${tab}`);
  };

  if (!post) {
    return <Spinner />;
  }

  return (
    <div className="article">
      <div className="container">
        {/* <Link to="/blog" className="article__btn">
          <Button
            className={"article__btn"}
            title={"Go back"}
            isOutlineButton={true}
          />
        </Link> */}

        <Button
          className={"article__btn"}
          title={"Go back"}
          isOutlineButton={true}
          onClick={handleClick}
        />

        <p className="article__date">{post.date}</p>
        <h2 className="article__title title">{post.title}</h2>
        <div className="article__img">
          <img src={post.image} alt="" />
        </div>
        <p className="article__text">{post.text}</p>
      </div>
    </div>
  );
};
