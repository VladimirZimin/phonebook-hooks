import { configureStore } from "@reduxjs/toolkit";
// import { filterSlice } from "./slice";
import { contactApi } from "../services/services";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { authPersistedReducer, persistedReducer } from "./configureStore";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistStore,
} from "redux-persist";

export const store = configureStore({
  reducer: {
    auth: authPersistedReducer,
    contacts: persistedReducer,
    [contactApi.reducerPath]: contactApi.reducer,
  },

  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(contactApi.middleware);
  },
  devTools: process.env.NODE_ENV === "development",
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
