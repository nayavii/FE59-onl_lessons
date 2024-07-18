// import { createStore, applyMiddleware } from "redux";
// import { thunk } from "redux-thunk";
import reducer from "../store/reducer";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

// const rootReducer = combineReducers({reducer})
// const store = createStore(reducer, applyMiddleware(thunk));
const store = configureStore({reducer});

export default store;
