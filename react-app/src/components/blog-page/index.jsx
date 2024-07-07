import { useSelector } from "react-redux";
import { Posts } from "../posts/index.jsx";
import { PostPreview } from "../post-preview/index.jsx";
import { ImagePreview } from "../image-preview/index.jsx";
import "./index.scss";
import { getImage, getPost } from "../../selectors/index.js";

export const BlogPage = () => {

  const post = useSelector(getPost);
  const image = useSelector(getImage);
  // const images = useSelector(store => store.images);


  return (
    <section className="blog">
      <div className="container">
        <h1 className="blog__title title">Blog</h1>
        <div className="blog__wrapper">
          <Posts />
          {post && <PostPreview/>}
          {image && <ImagePreview/>}
        </div>
      </div>
      
    </section>
  );
};
