import { addPostsAction } from "../store/actions";
import { refreshToken } from "./user";

const URL = "https://studapi.teachmeskills.by";

export const getQueryParams = (order, limit, searchValue, offset) => {

  return `?limit=${limit}&offset=${offset}${
    searchValue ? `&search=${searchValue}` : ""
  }&ordering=${order}`;
};

export const fetchPosts = (dispatch, order, limit, searchValue, page) => {
  const offset = Math.ceil((page - 1) * limit);

  return fetch(`${URL}/blog/posts/${getQueryParams(order, limit, searchValue, offset)}`)
    .then((response) => response.json())
    .then(({ results, count }) => {
      console.log(results);
      // dispatch(addPostsAction(postsData));
      dispatch(addPostsAction([results], count));
      // dispatch(addImagesAction(postsData.map(({ image }) => image)));
    })
    .catch((error) => {
      console.log(error);
      //dispatch(ERROR_POSTS_ACTION);
    });
};

export const createPost = (formData) => {
  const token = localStorage.getItem("accessToken");
  const options = {
    method: "POST",
    body: formData,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return fetch(`${URL}/blog/posts/`, options).then((response) => {
    if (response.status === 401) {
      return refreshToken(URL, options);
    }

    return response.json();
  });
};
