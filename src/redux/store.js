import { configureStore } from "@reduxjs/toolkit";
import layoutReducer from "./layoutSlice";
import cachedDataReducer from "./cachedDataSLice";
import todoReducer from "./todoSlice";
import authReducer from "./authSlice";

export default configureStore({
  reducer: {
    layout: layoutReducer,
    cachedData: cachedDataReducer,
    todo: todoReducer,
    auth: authReducer,
  },
});
