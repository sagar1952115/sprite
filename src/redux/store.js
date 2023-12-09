import { configureStore } from "@reduxjs/toolkit";
import { spriteReducer } from "./spriteSlice";
import { combineReducers } from "@reduxjs/toolkit";

const reducers = combineReducers({
  spriteReducer,
});

const store = configureStore({
  reducer: reducers,
});

export default store;
