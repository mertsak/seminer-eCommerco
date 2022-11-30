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
    PhoneData: PhoneData,
    HeadPhoneData: HeadPhoneData,
    TelevisionData: TelevisionData,
    MonitorData: MonitorData,
    HighlightsData: HighlightsData,
    BestSellsData: BestSellsData,
    OpportunityData: OpportunityData,
    myBasket: [],
    myFavorites: [],
    allProducts: [],
    filteredLaptopData: [],
    filteredPhoneData: [],
    filteredHeadPhoneData: [],
    filteredTelevisionData: [],
    filteredMonitorData: [],
  },
  reducers: {
    handleMenu: (state) => {
      state.menu = !state.menu;
    },
    laptopHandleFilter: (state, action) => {
      const filterArray = [];
      if (action.payload.brands.length > 0) {
        state.LaptopData.filter((x) => {
          action.payload.brands.map((y) => {
            if (x.brand === y) {
              filterArray.push(x);
              state.filteredLaptopData = filterArray;
              if (action.payload.sortName === "def") {
                filterArray.sort((a, b) => {
                  return a.id - b.id;
                });
              } else if (action.payload.sortName === "lth") {
                filterArray.sort((a, b) => {
                  return a.price - b.price;
                });
              } else if (action.payload.sortName === "htl") {
                filterArray.sort((a, b) => {
                  return b.price - a.price;
                });
              }
            }
          });
        });
      } else state.filteredLaptopData = state.LaptopData;
    },
    laptopHandleSorting: (state, action) => {
      const sortedData = state.filteredLaptopData.sort((a, b) => {
        if (action.payload === "lth") {
          return a.price - b.price;
        } else if (action.payload === "htl") {
          return b.price - a.price;
        } else if (action.payload === "def") {
          return a.id - b.id;
        }
      });
      state.filteredLaptopData = sortedData;
    },
    phoneHandleFilter: (state, action) => {
      const filterArray = [];
      if (action.payload.brands.length > 0) {
        state.PhoneData.filter((x) => {
          action.payload.brands.map((y) => {
            if (x.brand === y) {
              filterArray.push(x);
              state.filteredPhoneData = filterArray;
              if (action.payload.sortName === "def") {
                filterArray.sort((a, b) => {
                  return a.id - b.id;
                });
              } else if (action.payload.sortName === "lth") {
                filterArray.sort((a, b) => {
                  return a.price - b.price;
                });
              } else if (action.payload.sortName === "htl") {
                filterArray.sort((a, b) => {
                  return b.price - a.price;
                });
              }
            }
          });
        });
      } else state.filteredPhoneData = state.PhoneData;
    },
    phoneHandleSorting: (state, action) => {
      const sortedData = state.filteredPhoneData.sort((a, b) => {
        if (action.payload === "lth") {
          return a.price - b.price;
        } else if (action.payload === "htl") {
          return b.price - a.price;
        } else if (action.payload === "def") {
          return a.id - b.id;
        }
      });
      state.filteredPhoneData = sortedData;
    },
    headPhoneHandleFilter: (state, action) => {
      const filterArray = [];
      if (action.payload.brands.length > 0) {
        state.HeadPhoneData.filter((x) => {
          action.payload.brands.map((y) => {
            if (x.brand === y) {
              filterArray.push(x);
              state.filteredHeadPhoneData = filterArray;
              if (action.payload.sortName === "def") {
                filterArray.sort((a, b) => {
                  return a.id - b.id;
                });
              } else if (action.payload.sortName === "lth") {
                filterArray.sort((a, b) => {
                  return a.price - b.price;
                });
              } else if (action.payload.sortName === "htl") {
                filterArray.sort((a, b) => {
                  return b.price - a.price;
                });
              }
            }
          });
        });
      } else state.filteredHeadPhoneData = state.HeadPhoneData;
    },
    headPhoneHandleSorting: (state, action) => {
      const sortedData = state.filteredHeadPhoneData.sort((a, b) => {
        if (action.payload === "lth") {
          return a.price - b.price;
        } else if (action.payload === "htl") {
          return b.price - a.price;
        } else if (action.payload === "def") {
          return a.id - b.id;
        }
      });
      state.filteredHeadPhoneData = sortedData;
    },
    televisionHandleFilter: (state, action) => {
      const filterArray = [];
      if (action.payload.brands.length > 0) {
        state.TelevisionData.filter((x) => {
          action.payload.brands.map((y) => {
            if (x.brand === y) {
              filterArray.push(x);
              state.filteredTelevisionData = filterArray;
              if (action.payload.sortName === "def") {
                filterArray.sort((a, b) => {
                  return a.id - b.id;
                });
              } else if (action.payload.sortName === "lth") {
                filterArray.sort((a, b) => {
                  return a.price - b.price;
                });
              } else if (action.payload.sortName === "htl") {
                filterArray.sort((a, b) => {
                  return b.price - a.price;
                });
              }
            }
          });
        });
      } else state.filteredTelevisionData = state.TelevisionData;
    },
    televisionHandleSorting: (state, action) => {
      const sortedData = state.filteredTelevisionData.sort((a, b) => {
        if (action.payload === "lth") {
          return a.price - b.price;
        } else if (action.payload === "htl") {
          return b.price - a.price;
        } else if (action.payload === "def") {
          return a.id - b.id;
        }
      });
      state.filteredTelevisionData = sortedData;
    },
    monitorHandleFilter: (state, action) => {
      const filterArray = [];
      if (action.payload.brands.length > 0) {
        state.MonitorData.filter((x) => {
          action.payload.brands.map((y) => {
            if (x.brand === y) {
              filterArray.push(x);
              state.filteredMonitorData = filterArray;
              if (action.payload.sortName === "def") {
                filterArray.sort((a, b) => {
                  return a.id - b.id;
                });
              } else if (action.payload.sortName === "lth") {
                filterArray.sort((a, b) => {
                  return a.price - b.price;
                });
              } else if (action.payload.sortName === "htl") {
                filterArray.sort((a, b) => {
                  return b.price - a.price;
                });
              }
            }
          });
        });
      } else state.filteredMonitorData = state.MonitorData;
    },
    monitorHandleSorting: (state, action) => {
      const sortedData = state.filteredMonitorData.sort((a, b) => {
        if (action.payload === "lth") {
          return a.price - b.price;
        } else if (action.payload === "htl") {
          return b.price - a.price;
        } else if (action.payload === "def") {
          return a.id - b.id;
        }
      });
      state.filteredMonitorData = sortedData;
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
        state.OpportunityData,
        state.filteredLaptopData,
        state.filteredPhoneData,
        state.filteredHeadPhoneData
      );

      const item = allFavoritesItem.find(
        (item) => item.productUnicId === action.payload
      );

      const newItems = [...allFavoritesItem];

      newItems.map((item) => {
        if (item.productUnicId === action.payload) {
          item.chechFavorites = !item.chechFavorites;
        }
      });

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
  laptopHandleFilter,
  laptopHandleSorting,
  phoneHandleFilter,
  phoneHandleSorting,
  headPhoneHandleFilter,
  headPhoneHandleSorting,
  televisionHandleFilter,
  televisionHandleSorting,
  monitorHandleFilter,
  monitorHandleSorting,
  addBasket,
  incrementQuantity,
  decrementQuantity,
  removeBasket,
  addFavorites,
  allProducts,
} = commerceSlice.actions;

export default commerceSlice.reducer;
