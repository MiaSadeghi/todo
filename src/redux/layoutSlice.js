import { createSlice } from "@reduxjs/toolkit";

export const layoutSlice = createSlice({
  name: "layout",
  initialState: {
    sideMenuOpen: false,
    addTaskModalOpen: false,
    addProjectModalOpen: false,
  },

  reducers: {
    toggleSideMenu: (state) => {
      state.sideMenuOpen = !state.sideMenuOpen;
    },

    showAddTaskModal: (state) => {
      state.addTaskModalOpen = true;
    },

    hideAddTaskModal: (state) => {
      state.addTaskModalOpen = false;
    },

    toggleAddProjectModal: (state) => {
      state.addProjectModalOpen = !state.addProjectModalOpen;
    },
  },
});

export const {
  showAddTaskModal,
  hideAddTaskModal,
  toggleSideMenu,
  toggleAddProjectModal,
} = layoutSlice.actions;
export default layoutSlice.reducer;
