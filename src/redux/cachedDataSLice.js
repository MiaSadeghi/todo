import { createSlice } from "@reduxjs/toolkit";

export const cachedDataSlice = createSlice({
  name: "cachedData",
  initialState: {
    projects: [],
  },

  reducers: {
    setProjects: (state, action) => {
      state.projects = action.payload;
    },
  },
});

export const { setProjects } = cachedDataSlice.actions;
export default cachedDataSlice.reducer;
