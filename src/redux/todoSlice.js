import { createSlice } from "@reduxjs/toolkit";
import sampleProjects from "./../utils/sampleProjects";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    task: {
      isChecked: false,
      title: "",
      dueDate: "",
      project: "",
      description: "",
      priority: "",
      reminder: "",
      labels: [],
    },
    project: {
      title: "",
      color: "",
      isFavorite: false,
      view: "list",
      labels: [],
    },

    projects: sampleProjects,
    labels: [],
  },
  reducers: {
    toggleCheck: (state) => {
      state.task.isChecked = !state.task.isChecked;
    },

    addProject: (state, action) => {
      state.projects.push(action.payload);
    },

    addLabel: (state, action) => {
      if (!state.labels.includes(action.payload)) {
        state.labels.push(action.payload);
      }
    },

    removeLabel: (state, action) => {
      state.labels = state.labels.filter((label) => label !== action.payload);
    },
  },
});

export const { toggleCheck, addProject, addLabel, removeLabel } =
  todoSlice.actions;

export default todoSlice.reducer;
