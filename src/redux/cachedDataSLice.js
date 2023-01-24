import { createSlice } from "@reduxjs/toolkit";

export const cachedDataSlice = createSlice({
  name: "cachedData",
  initialState: {
    projects: [],
    labels: [],
  },

  reducers: {
    addProject: (state, action) => {
      state.projects.push(action.payload);
    },

    addLabel: (state, action) => {
      state.labels.push(action.payload);
    },
  },
});

export const { addProject, addLabel } = cachedDataSlice.actions;
export default cachedDataSlice.reducer;
