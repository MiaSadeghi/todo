import { createSlice } from "@reduxjs/toolkit";

export const layoutSlice = createSlice({
  name: "layout",
  initialState: {
    sideMenuOpen: false,
    addTaskModalOpen: false,
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
  },
});

export const { showAddTaskModal, hideAddTaskModal, toggleSideMenu } =
  layoutSlice.actions;
export default layoutSlice.reducer;
