import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Post } from "../post/index.jsx";
// import { postsData } from "./mock-data.js";
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
import { BlogNavBar } from "../blog-nav-bar/index.jsx";
import { Button } from "../button/index.jsx";
import { NoSearchResult } from "../no-search-result/index.jsx";
import { Pagination } from "../pagination/index.jsx";

const LIMIT = 12;

export const Posts = () => {
  console.log(LIMIT);
  const { filter } = useParams();
  const isBlackTheme = useSelector(getBlackTheme);

  // const [posts, setPosts] = useState([]);
  // const [filterValue, setFilterValue] = useState(filter);
  const [order, setOrder] = useState("title");
  const dispatch = useDispatch();
  const posts = useSelector(getPosts);
  const [page, setPage] = useState(1);

  //в реальной жизни
  useEffect(() => {
    // dispatch(changeTabAction(filter));

    dispatch(getPostsMiddlewareActions(order, LIMIT, "", page));
  }, []);

  const handleSearch = (searchValue, order) => {
    dispatch(getPostsMiddlewareActions(order, LIMIT, searchValue, page));
    setOrder(order);
    setPage(1);
  };

  const handleLoadMore = () => {
    dispatch(getPostsMiddlewareActions(order, LIMIT, "", page + 1));
    setPage((prevState) => prevState + 1);
  };

  console.log(posts.content);

  const handleChangePage = (newPage) => {
    setPage(newPage);
    dispatch(getPostsMiddlewareActions(order, LIMIT, "", newPage));

  };

  return (
    <section className={`posts  ${isBlackTheme ? "posts_black" : ""}`}>
      <div className="container">
        <BlogNavBar handleSearch={handleSearch} setOrder={setOrder} order={order} />

        {/* <div
          className={`posts__wrapper ${
            isFavorites || isPopular ? "posts__wrapper_flex" : ""
          }`}
        > */}

        {posts.content.map((item, index) => {
          return (
            <div className={`posts__wrapper `} key={index}>
              {item.map((post, index) => {
                return (
                  <Post
                    post={post}
                    index={index}
                    key={post.id}
                    size={index <= 5 ? "medium" : "small"}
                  />
                );
              })}
            </div>
          );
        })}

        {!posts.content?.length && !posts.loading && <NoSearchResult />}
        {posts.loading && <Spinner />}

        <Pagination
          count={posts.count}
          limit={LIMIT}
          page={page}
          handleChangePage={handleChangePage}
        />

        {/* {page * (LIMIT + 1) <= posts.count && (
          <div className="posts__load-more">
            <Button
              title="Load more"
              isOutlineButton={false}
              onClick={handleLoadMore}
            />
          </div>
        )} */}
      </div>
    </section>
  );
};
