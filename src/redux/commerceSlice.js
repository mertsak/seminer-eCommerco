import { createSlice } from "@reduxjs/toolkit";

import LaptopData from "./LaptopData";

export const commerceSlice = createSlice({
  name: "commerce",
  initialState: {
    menu: false,
    close: false,
    LaptopData: LaptopData,
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
