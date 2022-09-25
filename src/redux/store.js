import { configureStore } from "@reduxjs/toolkit";
import commerceSlice from "../redux/commerceSlice";

export const store = configureStore({
  reducer: {
    commerce: commerceSlice,
  },
});
