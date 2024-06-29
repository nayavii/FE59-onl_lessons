import { useState } from "react";
import { Posts } from "../posts/index.jsx";
import "./index.scss";
import { Article } from "../article/index.jsx";

export const Blog = () => {

  
  const [currentPost, setCurrentPost] = useState(null);

  return (
    <section className="blog">
      <div className="container">
        <h1 className="blog__title title">Blog</h1>
        <div className="blog__wrapper">
          {currentPost ? <Article post={currentPost} setCurrentPost={setCurrentPost} /> : <Posts setCurrentPost={setCurrentPost} />}
        </div>
      </div>
    </section>
  );
};
