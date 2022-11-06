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
    myFavorites: [],
    allProducts: [],
  },
  reducers: {
    handleMenu: (state) => {
      state.menu = !state.menu;
    },
    handleFilter: (state, action) => {
      console.log(action.payload);
      const filterArray = [];
      LaptopData.filter((x) => {
        action.payload.brands.map((y) => {
          if (x.brand === y) {
            filterArray.push(x);
            state.LaptopData = filterArray;
          }
        });
        // if (action.payload.brands.length === 0) {
        //   state.LaptopData = LaptopData;
        // }
      });
    },
    addBasket: (state, action) => {
      const itemInBasket = state.myBasket.find(
        (item) => item.productUnicId === action.payload.productUnicId
      );
      if (itemInBasket) {
        itemInBasket.quantity++;
      } else {
        state.myBasket.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.myBasket.find(
        (item) => item.productUnicId === action.payload
      );
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.myBasket.find(
        (item) => item.productUnicId === action.payload
      );

      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    removeBasket: (state, action) => {
      const filtered = state.myBasket.filter(
        (item) => item.productUnicId !== action.payload
      );
      state.myBasket = filtered;
    },
    addFavorites: (state, action) => {
      const allFavoritesItem = state.LaptopData.concat(
        state.PhoneData,
        state.TelevisionData,
        state.MonitorData,
        state.HeadPhoneData,
        state.HighlightsData,
        state.BestSellsData,
        state.OpportunityData
      );

      const item = allFavoritesItem.find(
        (item) => item.productUnicId === action.payload
      );

      const newItems = [...allFavoritesItem];

      // newItems.map(
      //   (item) => item.productUnicId === action.payload
      // ).chechFavorites = !item.chechFavorites;

      newItems.map((item) => {
        if (item.productUnicId === action.payload) {
          item.chechFavorites = !item.chechFavorites;
        }
      });

      // newItems.find((item) => {
      //   if (item.productUnicId === action.payload) {
      //     console.log(item.chechFavorites);
      //     console.log(item.productUnicId);
      //     console.log(action.payload);
      //   }
      // });

      if (item.chechFavorites) {
        state.myFavorites.push(item);
      } else {
        const filtered = state.myFavorites.filter(
          (item) => item.productUnicId !== action.payload
        );
        state.myFavorites = filtered;
      }
    },
    allProducts: (state) => {
      const allProducts = state.LaptopData.concat(
        state.PhoneData,
        state.TelevisionData,
        state.MonitorData,
        state.HeadPhoneData
      );
      state.allProducts = allProducts;
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
  addFavorites,
  allProducts,
} = commerceSlice.actions;

export default commerceSlice.reducer;
