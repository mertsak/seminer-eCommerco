/* eslint-disable array-callback-return */
import { createSlice } from "@reduxjs/toolkit";

import LaptopData from "./Services/LaptopData";
import TelevisionData from "./Services/TelevisionData";
import PhoneData from "./Services/PhoneData";
import MonitorData from "./Services/MonitorData";
import HeadPhoneData from "./Services/HeadPhoneData";
import HighlightsData from "./Services/HighlightsData";
import BestSellsData from "./Services/BestSellData";
import OpportunityData from "./Services/OpportunityData";

export const commerceSlice = createSlice({
  name: "commerce",
  initialState: {
    menu: false,
    close: false,
    LaptopData: LaptopData,
    TelevisionData: TelevisionData,
    PhoneData: PhoneData,
    MonitorData: MonitorData,
    HeadPhoneData: HeadPhoneData,
    HighlightsData: HighlightsData,
    BestSellsData: BestSellsData,
    OpportunityData: OpportunityData,
  },
  reducers: {
    handleMenu: (state) => {
      state.menu = !state.menu;
    },
    handleFilter: (state, action) => {
      if (action.payload.Status) {
        LaptopData.filter((x) => {
          if (x.brand === action.payload.Name) {
            const filterArray = [];
            filterArray.push(x);
            state.LaptopData = filterArray;
          }
        });
      } else {
        state.LaptopData = LaptopData;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { handleMenu, handleFilter } = commerceSlice.actions;

export default commerceSlice.reducer;
