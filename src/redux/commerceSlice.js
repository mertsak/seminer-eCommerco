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
    myBasket: [],
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
    addBasket: (state, action) => {
      console.log(action.payload);
      const itemInBasket = state.myBasket.find(
        (item) => item.id === action.payload.id
      );
      if (itemInBasket) {
        itemInBasket.quantity++;
      } else {
        state.myBasket.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.myBasket.find((item) => item.id === action.payload);
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.myBasket.find((item) => item.id === action.payload);

      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    removeBasket: (state, action) => {
      const filtered = state.myBasket.filter(
        (item) => item.id !== action.payload
      );
      state.myBasket = filtered;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  handleMenu,
  handleFilter,
  addBasket,
  incrementQuantity,
  decrementQuantity,
  removeBasket,
} = commerceSlice.actions;

export default commerceSlice.reducer;
