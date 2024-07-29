import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeTabAction } from "../../store/actions";
import { Button } from "../button";
import { useState } from "react";
import { getTab } from "../../store/selectors";

export const BlogNavBar = ({ handleSearch, setOrder, order }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const tab = useSelector(getTab);
  const [searchValue, setSearchValue] = useState("");

  const isAll = tab === "all";
  const isFavorites = tab === "favorite";
  const isPopular = tab === "popular";

  const handleClick = (path) => {
    return () => {
      dispatch(changeTabAction(path));
      navigate(`/blog/${path}`);
    };
  };

  const handleSearchChange = (e) => {
    handleSearch(e.target.value, order);
    setSearchValue(e.target.value);
  };

  const handleSortChange = (e) => {
    setOrder(e.target.value);
    handleSearch(searchValue, e.target.value);
  };

  return (
    <>
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
      <div className="posts__nav-search">
      <select
          className="posts__sort"
          value={order}
          onChange={handleSortChange}
        >
          <option value="title">Title</option>
          <option value="text">Text</option>
          <option value="date">Date</option>
          <option value="lesson_num">Lesson Number</option>
        </select>
        <input
          className="posts__search"
          type="text"
          placeholder="Search posts..."
          value={searchValue}
          onChange={handleSearchChange}
        />
        <Button title="Search" onClick={() => handleSearch(searchValue, order)} />
      </div>
    </>
  );
};
