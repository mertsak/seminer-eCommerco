import { createSlice } from "@reduxjs/toolkit";

import LaptopData from "./Services/LaptopData";
import TelevisionData from "./Services/TelevisionData";
import PhoneData from "./Services/PhoneData";
import MonitorData from "./Services/MonitorData";
import HeadPhoneData from "./Services/HeadPhoneData";

export const commerceSlice = createSlice({
  name: "commerce",
  initialState: {
    menu: false,
    close: false,
    LaptopData: LaptopData,
    TelevisionData: TelevisionData,
    PhoneData: PhoneData,
    MonitorData: MonitorData,
    HeadPhoneData: HeadPhoneData
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
