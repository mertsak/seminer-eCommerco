import { configureStore } from "@reduxjs/toolkit";
import commerceSlice from "../redux/commerceSlice";
import authSlice from "./authSlice";
import { getDefaultMiddleware } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    commerce: commerceSlice,
    auth: authSlice,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
