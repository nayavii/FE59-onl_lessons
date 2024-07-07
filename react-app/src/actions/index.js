export const LIKE = 'LIKE';
export const DISLIKE = 'DISLIKE';
export const FAVORITE = 'FAVORITE';
export const CHANGE_THEME = 'CHANGE_THEME';
export const ADD_POST = 'ADD_POST';
export const DELETE_POST = 'DELETE_POST';
export const ADD_POSTS = 'ADD_POSTS';
export const ADD_IMAGE = 'ADD_IMAGE';
export const DELETE_IMAGE = 'DELETE_IMAGE';
export const ADD_IMAGES = 'ADD_IMAGES';
export const CHANGE_TAB = 'CHANGE_TAB';


export const CHANGE_THEME_ACTION = {type: CHANGE_THEME};
export const DELETE_POST_ACTION = {type: DELETE_POST};
export const DELETE_IMAGE_ACTION = {type: DELETE_IMAGE};

export const likeAction = (id) => ({type: LIKE, id});
export const dislikeAction = (id) => ({type: DISLIKE, id});
export const favoriteAction = (id) => ({type: FAVORITE, id});
export const addPostAction = (post) => ({type: ADD_POST, payload: post});  // action creator
export const addPostSAction = (posts) => ({type: ADD_POSTS, payload: posts});  
export const addImageAction = (image) => ({type: ADD_IMAGE, payload: image});
export const addImagesAction = (images) => ({type: ADD_IMAGES, payload: images});

export const changeTabAction = (tab) => ({type: CHANGE_TAB, payload: tab});
