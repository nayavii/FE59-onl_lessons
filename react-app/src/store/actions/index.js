import { useNavigate } from "react-router-dom";
import { postsData } from "../../components/posts/mock-data";
import { fetchActivation, fetchRegister, fetchToken } from "../../api/auth";
import { fetchUserInfo } from "../../api/user";

export const LIKE = "LIKE";
export const DISLIKE = "DISLIKE";
export const FAVORITE = "FAVORITE";
export const CHANGE_THEME = "CHANGE_THEME";
export const ADD_POST = "ADD_POST";
export const DELETE_POST = "DELETE_POST";
export const RECEIVED_POSTS = "RECEIVED_POSTS";
export const ADD_IMAGE = "ADD_IMAGE";
export const DELETE_IMAGE = "DELETE_IMAGE";
export const ADD_IMAGES = "ADD_IMAGES";
export const CHANGE_TAB = "CHANGE_TAB";
export const REQUEST_POSTS = "REQUEST_POSTS";
export const POST_USER_DATA = "POST_USER_DATA";
export const RECEIVED_USER_DATA = "RECEIVED_USER_DATA";
export const REQUEST_POST = "REQUEST_POST";
export const RECEIVED_POST = "RECEIVED_POST";
export const RECEIVED_TOKEN = "RECEIVED_TOKEN";
export const LOGOUT = "LOGOUT";

export const CHANGE_THEME_ACTION = { type: CHANGE_THEME };
export const DELETE_POST_ACTION = { type: DELETE_POST };
export const DELETE_IMAGE_ACTION = { type: DELETE_IMAGE };
export const REQUEST_POSTS_ACTION = { type: REQUEST_POSTS };
export const POST_USER_DATA_ACTION = { type: POST_USER_DATA };
export const REQUEST_POST_ACTION = { type: REQUEST_POST };
export const LOGOUT_ACTION = { type: LOGOUT };

export const likeAction = (id) => ({ type: LIKE, id });
export const dislikeAction = (id) => ({ type: DISLIKE, id });
export const favoriteAction = (id) => ({ type: FAVORITE, id });
export const addPostAction = (post) => ({ type: ADD_POST, payload: post }); // action creator
export const addPostSAction = (posts) => ({
  type: RECEIVED_POSTS,
  payload: posts,
});
export const addImageAction = (image) => ({ type: ADD_IMAGE, payload: image });
export const addImagesAction = (images) => ({
  type: ADD_IMAGES,
  payload: images,
});

export const changeTabAction = (tab) => ({ type: CHANGE_TAB, payload: tab });
export const addUserDataAction = (user) => ({
  type: RECEIVED_USER_DATA,
  payload: user,
});
export const addPostByIdAction = (post) => ({
  type: RECEIVED_POST,
  payload: post,
}); // action creator

export const getToken = (token) => ({ type: RECEIVED_TOKEN, payload: token });

const URL = "https://studapi.teachmeskills.by";

export const getPostsMiddlewareActions = () => {
  return (dispatch) => {
    dispatch(REQUEST_POSTS_ACTION);

    fetch(`${URL}/blog/posts/`)
      .then((response) => response.json())
      .then(({ results }) => {
        dispatch(addPostSAction(postsData));
        // dispatch(addPostSAction(results));
        dispatch(addImagesAction(postsData.map(({ image }) => image)));
      })
      .catch((error) => {
        console.log(error);
        //dispatch(ERROR_POSTS_ACTION);
      });
  };
};

export const getPostByIdMiddlewareActions = (postId) => {
  return (dispatch) => {
    dispatch(REQUEST_POST_ACTION);

    fetch(`${URL}/blog/posts/${postId}`)
      .then((response) => response.json())
      .then((res) => {
        const currentPost = postsData.find((post) => post.id === +postId);
        dispatch(addPostByIdAction(currentPost));
      })
      .catch((error) => {
        console.log(error);
        //dispatch(ERROR_POSTS_ACTION);
      });
  };
};

// user

export const getUserInfoAction = (navigate) => {
  return (dispatch) => {
    fetchUserInfo(navigate).then((response) => dispatch(addUserDataAction(response)));
  };
};

// auth

export const registerMiddlewareActions = ({
  name,
  email,
  password,
  course_group,
}) => {
  return (dispatch) => {
    dispatch(POST_USER_DATA_ACTION);

    fetchRegister(name, email, password, course_group).then((json) =>
      dispatch(addUserDataAction(json))
    );
  };
};

export const loginMiddlewareActions = ({ email, password },navigate) => {
  return (dispatch) => {
    fetchToken(email, password).then(() => {
      fetchUserInfo(navigate).then((response) => {
        console.log(response);
        dispatch(addUserDataAction(response));
      });
    });
  };
};

export const activationEmailMiddlewareActions = (uid, token) => {
  return (dispatch) => {
    fetchActivation(uid, token);
  };
};
