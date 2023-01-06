import { configureStore } from "@reduxjs/toolkit";
import layoutReducer from "./layoutSlice";
import cachedDataReducer from "./cachedDataSLice";
export default configureStore({
  reducer: {
    layout: layoutReducer,
    cachedData: cachedDataReducer,
  },
});
