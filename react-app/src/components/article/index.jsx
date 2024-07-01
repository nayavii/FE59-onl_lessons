import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { Button } from "../button";
import { useEffect, useState } from "react";
import { postsData } from "../posts/mock-data.js";
import "./index.scss";
import { Spinner } from "../spinner/index.jsx";

export const Article = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [post, setPost] = useState(null);

  useEffect(() => {

    console.log("useLocation", location);
    console.log("window.location", window.location);
    // setTimeout(() => {
    fetch(`https://jsonplaceholder.typicode.com/todows/${postId}`)
      // ниже правильный рабочий вариант
      // .then((res) => setPost(res));
      // ниже НЕправильный рабочий вариант чисто на тестовых данных
      .then((res) => {
        const currentPost = postsData.find((post) => post.id === +postId);

        if (currentPost) {
          // если id в браузерной строке есть среди тестовых данных
          setPost(currentPost);
        } else {
          navigate("/404");
        }
      })
      .catch((e) => console.log(e));
    // }, 1000);
  }, []);

  const handleClick = () => {
    // navigate("/blog");
    navigate(-1); // возврат на предыдущую страницу
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
