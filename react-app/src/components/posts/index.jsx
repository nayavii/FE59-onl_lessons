import { postsData } from "./mock-data.js";
import { Post } from "../post/index.jsx";
import { useContext, useState } from "react";
import "./index.scss";
import { MyContext } from "../hooks/context.hook.jsx";
import { useNavigate, useParams } from "react-router-dom";

export const Posts = () => {
  const { isBlackTheme } = useContext(MyContext);
  const [posts, setPosts] = useState(postsData);
  const [filterValue, setFilterValue] = useState("all");
  const [searchValue, setSearchValue] = useState("");
  const { filter } = useParams();
  const navigate = useNavigate()
  console.log(filter);

  // useEffect(() => {
  //   fetch("https://studapi.teachmeskills.by/blog/posts/")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setPosts(data)
  //     });
  // }, []);

  const isAll = filterValue === "all";
  const isFavorites = filterValue === "favorite";
  const isPopular = filterValue === "popular";

  const filteredPosts = posts.filter((post) => {
    const postsToSearch =
      post.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      post.text.toLowerCase().includes(searchValue.toLowerCase());

    if (!postsToSearch) return false;

    if (isAll) return post;
    if (isFavorites) return post.favorites;
    return post.popular;
  });

  const handleAllClick = () => {
    navigate("/blog/all");
    setFilterValue("all");
  };

  const handleFavClick = () => {
    navigate("/blog/favorites");
    setFilterValue("favorite");
  };

  const handlePopClick = () => {
    navigate("/blog/popular");
    setFilterValue("popular");
  };

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <section className={`posts  ${isBlackTheme ? "posts_black" : ""}`}>
      <div className="container">
        <div className="posts__nav">
          <button
            className={`posts__nav-btn ${
              filterValue === "all" ? "posts__nav-btn_active" : ""
            }`}
            onClick={handleAllClick}
          >
            All
          </button>
          <button
            className={`posts__nav-btn ${
              filterValue === "favorite" ? "posts__nav-btn_active" : ""
            }`}
            onClick={handleFavClick}
          >
            My favorites
          </button>
          <button
            className={`posts__nav-btn ${
              filterValue === "popular" ? "posts__nav-btn_active" : ""
            }`}
            onClick={handlePopClick}
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
          {filteredPosts.map((item, index) => {
            let size = "large";

            if (isAll) {
              if (index >= 1 && index <= 4) {
                size = "medium";
              } else if (index > 4) {
                size = "small";
              }
            }
            return <Post post={item} index={index} key={item.id} size={size} />;
          })}
        </div>
      </div>
    </section>
  );
};
