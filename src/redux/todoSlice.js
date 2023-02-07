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
    },

    projects: sampleProjects,
  },
  reducers: {
    toggleCheck: (state) => {
      state.task.isChecked = !state.task.isChecked;
    },

    addProject: (state, action) => {
      state.projects.push(action.payload);
    },
  },
});

export const { toggleCheck, addProject } = todoSlice.actions;

export default todoSlice.reducer;
