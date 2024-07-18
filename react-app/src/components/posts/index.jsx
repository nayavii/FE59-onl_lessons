import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Post } from "../post/index.jsx";
import { postsData } from "./mock-data.js";
import "./index.scss";
import {
  addImagesAction,
  addPostSAction,
  getPostsMiddlewareActions,
  changeTabAction,
  REQUEST_POSTS_ACTION,
} from "../../store/actions/index.js";
import { Spinner } from "../spinner/index.jsx";
import {
  getBlackTheme,
  getPosts,
  getTab,
} from "../../store/selectors/index.js";

export const Posts = () => {
  const { filter } = useParams();
  const isBlackTheme = useSelector(getBlackTheme);
  // const [posts, setPosts] = useState([]);
  // const [filterValue, setFilterValue] = useState(filter);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const posts = useSelector(getPosts);
  const tab = useSelector(getTab);

  //в реальной жизни
  useEffect(() => {
    dispatch(changeTabAction(filter));

    dispatch(getPostsMiddlewareActions());
  }, []);

  const isAll = tab === "all";
  const isFavorites = tab === "favorite";
  const isPopular = tab === "popular";

  // const filteredPosts = posts.filter((post) => {
  //   const postsToSearch =
  //     post.title.toLowerCase().includes(searchValue.toLowerCase()) ||
  //     post.text.toLowerCase().includes(searchValue.toLowerCase());

  //   if (!postsToSearch) return false;

  //   if (isAll) return post;
  //   if (isFavorites) return post.favorites;
  //   return post.popular;
  // });

  const handleClick = (path) => {
    return () => {
      dispatch(changeTabAction(path));
      navigate(`/blog/${path}`);
    };
  };

  // const handleAllClick = () => {
  //   navigate("/blog/all");
  //   setFilterValue("all");
  // };

  // const handleFavClick = () => {
  //   navigate("/blog/favorites");
  //   setFilterValue("favorite");
  // };

  // const handlePopClick = () => {
  //   navigate("/blog/popular");
  //   setFilterValue("popular");
  // };

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  if (posts.loading || !posts.loaded) {
    return <Spinner />;
  }

  return (
    <section className={`posts  ${isBlackTheme ? "posts_black" : ""}`}>
      <div className="container">
        <div className="posts__nav">
          <button
            className={`posts__nav-btn ${isAll ? "posts__nav-btn_active" : ""}`}
            // onClick={handleAllClick}
            onClick={handleClick("all")}
          >
            All
          </button>
          <button
            className={`posts__nav-btn ${
              isFavorites ? "posts__nav-btn_active" : ""
            }`}
            onClick={handleClick("favorite")}
          >
            My favorites
          </button>
          <button
            className={`posts__nav-btn ${
              isPopular ? "posts__nav-btn_active" : ""
            }`}
            onClick={handleClick("popular")}
          >
            Popular
          </button>
        </div>

        <input
          className="posts__search"
          type="text"
          placeholder="Search posts..."
          value={searchValue}
          onChange={handleSearchChange}
        />

        <div
          className={`posts__wrapper ${
            isFavorites || isPopular ? "posts__wrapper_flex" : ""
          }`}
        >
          {
            /* {filteredPosts.map((item, index) => {
            let size = "large";

            if (isAll) {
              if (index >= 1 && index <= 4) {
                size = "medium";
              } else if (index > 4) {
                size = "small";
              }
            }
            return <Post post={item} index={index} key={item.id} size={size} />;
          })} */

            posts.content?.reduce((result, post, index) => {
              if (
                isAll ||
                (isFavorites && post.favorites) ||
                (isPopular && post.popular)
              ) {
                if (
                  post.title
                    .toLowerCase()
                    .includes(searchValue.toLowerCase()) ||
                  post.text.toLowerCase().includes(searchValue.toLowerCase())
                ) {
                  let size = "large";

                  if (isAll) {
                    if (index >= 1 && index <= 4) {
                      size = "medium";
                    } else if (index > 4) {
                      size = "small";
                    }
                  }
                  // Добавление отфильтрованных и модифицированных постов в аккумулятор
                  result.push(
                    <Post post={post} index={index} key={post.id} size={size} />
                  );
                }
              }
              return result;
            }, [])
          }
        </div>
      </div>
    </section>
  );
};
