import { createSlice } from "@reduxjs/toolkit";

export const commerceSlice = createSlice({
  name: "commerce",
  initialState: {
    menu: false,
    close: false,
  },
  reducers: {
    handleMenu: (state) => {
      state.menu = !state.menu;
    },
  },
});

// Action creators are generated for each case reducer function
export const { handleMenu } = commerceSlice.actions;

export default commerceSlice.reducer;
