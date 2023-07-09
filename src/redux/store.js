import { configureStore } from "@reduxjs/toolkit";
import { filterSlice } from "./slice";
import { contactApi } from "../services/services";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
  reducer: {
    contacts: filterSlice.reducer,
    [contactApi.reducerPath]: contactApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactApi.middleware),
});

setupListeners(store.dispatch);
