import "./index.scss";
import { useSelector } from "react-redux";
import { Posts } from "../../components/posts/index.jsx";
import { PostPreview } from "../../components/post-preview/index.jsx";
import { ImagePreview } from "../../components/image-preview/index.jsx";
import { getImage, getPost } from "../../store/selectors/index.js";


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
