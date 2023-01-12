import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    isChecked: false,
  },
  reducers: {
    toggleCheck: (state) => {
      state.isChecked = !state.isChecked;
    },
  },
});

export const { toggleCheck } = todoSlice.actions;

export default todoSlice.reducer;
