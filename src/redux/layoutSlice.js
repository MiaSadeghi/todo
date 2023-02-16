import { createSlice } from "@reduxjs/toolkit";

export const layoutSlice = createSlice({
  name: "layout",
  initialState: {
    sideMenuOpen: false,
    addTaskModalOpen: false,
    addProjectModalOpen: false,
    signInModalOpen: false,
    accountMenuModalOpen: false,
  },

  reducers: {
    showAccountMenu: (state) => {
      state.accountMenuModalOpen = true;
    },
    hideAccountMenu: (state) => {
      state.accountMenuModalOpen = false;
    },

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

    showSignInModal: (state) => {
      state.signInModalOpen = true;
    },

    hideSignInModal: (state) => {
      state.signInModalOpen = false;
    },
  },
});

export const {
  showAddTaskModal,
  hideAddTaskModal,
  toggleSideMenu,
  toggleAddProjectModal,
  showSignInModal,
  hideSignInModal,
  showAccountMenu,
  hideAccountMenu,
} = layoutSlice.actions;

export default layoutSlice.reducer;
