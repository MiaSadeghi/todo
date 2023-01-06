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

    toggleAddTaskModal: (state) => {
      state.addTaskModalOpen = !state.addTaskModalOpen;
    },
  },
});

export const { toggleAddTaskModal, toggleSideMenu } = layoutSlice.actions;
export default layoutSlice.reducer;
