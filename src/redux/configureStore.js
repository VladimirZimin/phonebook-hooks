import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { filterSlice } from "./filter/slice";
import { authReducer } from "./auth/authSlice";

const filterPersistConfig = {
  key: "root",
  storage,
};

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

export const persistedReducer = persistReducer(
  filterPersistConfig,
  filterSlice.reducer
);

export const authPersistedReducer = persistReducer(
  authPersistConfig,
  authReducer
);
