import {
  CHANGE_THEME,
  ADD_POST,
  DELETE_POST,
  ADD_IMAGE,
  DELETE_IMAGE,
  ADD_POSTS,
  ADD_IMAGES,
  LIKE,
  DISLIKE,
  FAVORITE,
  CHANGE_TAB,
} from "../actions";

const initialState = {
  // like: 0,
  // dislike: 0,
  isBlackTheme: false,
  post: null,
  posts: null,
  image: null,
  images: [],
  tab: "all",
}; // создаем начальное значение state

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        isBlackTheme: !state.isBlackTheme,
      };

    case ADD_POST:
      return {
        ...state,
        post: action.payload,
      };

    case DELETE_POST:
      return {
        ...state,
        post: null,
      };

    case ADD_POSTS:
      return {
        ...state,
        posts: action.payload,
      };

    case ADD_IMAGE:
      return {
        ...state,
        image: action.payload,
      };

    case DELETE_IMAGE:
      return {
        ...state,
        image: null,
      };

    case LIKE:
      return {
        ...state,
        posts: state.posts.map((post) => {
          return post.id === action.id
            ? {
                ...post,
                isLiked: !post.isLiked,
                isDisliked: false,
                likesCount: post.isLiked
                  ? post.likesCount - 1
                  : post.likesCount + 1,
                dislikesCount: post.isDisliked
                  ? post.dislikesCount - 1
                  : post.dislikesCount,
              }
            : post;
        }),
      };

    case DISLIKE:
      return {
        ...state,
        posts: state.posts.map((post) => {
          return post.id === action.id
            ? {
                ...post,
                isLiked: false,
                isDisliked: !post.isDisliked,
                likesCount: post.isLiked
                  ? post.likesCount - 1
                  : post.likesCount,

                dislikesCount: post.isDisliked
                  ? post.dislikesCount - 1
                  : post.dislikesCount + 1,
              }
            : post;
        }),
      };

    case FAVORITE:
      return {
        ...state,
        posts: state.posts.map((post) => {
          return post.id === action.id
            ? {
                ...post,
                favorites: !post.favorites,
              }
            : post;
        }),
      };

    case CHANGE_TAB:
      return {
        ...state,
        tab: action.payload,
      };
  }

  // if (action.type === LIKE) {
  //   return {
  //     ...state,
  //     like: state.like + 1,
  //   };
  // }

  // if (action.type === "DISLIKE") {
  //   return {
  //     ...state,
  //     dislike: state.dislike + 1,
  //   };
  // }

  if (action.type === ADD_IMAGES) {
    return {
      ...state,
      images: action.payload,
    };
  }

  return state;
};

export default reducer;
