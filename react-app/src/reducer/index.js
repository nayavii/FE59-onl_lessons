import {
  CHANGE_THEME,
  ADD_POST,
  DELETE_POST,
  ADD_IMAGE,
  DELETE_IMAGE,
  RECEIVED_POSTS,
  ADD_IMAGES,
  LIKE,
  DISLIKE,
  FAVORITE,
  CHANGE_TAB,
  REQUEST_POSTS,
  RECEIVED_USER_DATA,
  POST_USER_DATA,
  REQUEST_POST,
  RECEIVED_POST,
} from "../actions";

const initialState = {
  isBlackTheme: false,
  post: {
    content: null,
    loading: false,
    loaded: false,
  },
  posts: {
    content: null,
    loading: false,
    loaded: false,
  },
  image: null,
  images: [],
  tab: "all",
  user: {
    content: {},
    loading: false,
    loaded: false,
    errors: {},
  },
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
        post: {
          ...state.post,
          content: null
        },
      };

    case REQUEST_POSTS:
      return {
        ...state,
        // posts: action.payload,
        posts: {
          ...state.posts,
          loading: true,
          loaded: false,
          error: null,
        },
      };

    case RECEIVED_POSTS:
      return {
        ...state,
        // posts: action.payload,
        posts: {
          content: action.payload,
          loading: false,
          loaded: true,
        },
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
        posts: {
          ...state.posts,
          content: state.posts.content.map((post) => {
            if (post.id === action.id) {
              const isLiked = !post.isLiked;
              return {
                ...post,
                isLiked,
                isDisliked: false,
                likesCount: isLiked ? post.likesCount + 1 : post.likesCount - 1,
                dislikesCount: post.isDisliked
                  ? post.dislikesCount - 1
                  : post.dislikesCount,
              };
            }
            return post;
          }),
        },
      };

    case DISLIKE:
      return {
        ...state,
        posts: {
          ...state.posts,
          content: state.posts.content.map((post) => {
            if (post.id === action.id) {
              const isDisliked = !post.isDisliked;
              return {
                ...post,
                isLiked: false,
                isDisliked,
                likesCount: post.isLiked
                  ? post.likesCount - 1
                  : post.likesCount,
                dislikesCount: isDisliked
                  ? post.dislikesCount + 1
                  : post.dislikesCount - 1,
              };
            }
            return post;
          }),
        },
      };

    case FAVORITE:
      return {
        ...state,
        posts: {
          ...state.posts,
          content: state.posts.content.map((post) => {
            if (post.id === action.id) {
              return {
                ...post,
                favorites: !post.favorites,
              };
            }
            return post;
          }),
        },
      };

    case CHANGE_TAB:
      return {
        ...state,
        tab: action.payload,
      };

    case POST_USER_DATA:
      return {
        ...state,
        user: {
          ...state.user,
          loading: true,
        },
      };

    case RECEIVED_USER_DATA:
      const isError = !action.payload.id;

      return {
        ...state,
        // posts: action.payload,
        user: {
          ...state.user,
          content: isError ? {} : action.payload,
          loading: false,
          loaded: true,
          errors: isError ? action.payload : {},
        },
      };

    case REQUEST_POST:
      return {
        ...state,
        post: {
          ...state.post,
          loading: true,
          loaded: false,
          error: null,
        },
      };

    case RECEIVED_POST:
      return {
        ...state,
        post: {
          content: action.payload,
          loading: false,
          loaded: true,
        },
      };

    default:
      return state;
  }

  // if (action.type === ADD_IMAGES) {
  //   return {
  //     ...state,
  //     images: action.payload,
  //   };
  // }

  // return state;
};

export default reducer;
