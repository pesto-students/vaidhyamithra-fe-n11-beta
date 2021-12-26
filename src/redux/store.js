import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

import { ALERTS_SLICE } from "./features/alerts/alerts.config";
import { USER_SLICE } from "./features/user/user.config";
import { MODALS_SLICE } from "./features/modals/modals.congif";
import { SEARCH_SLICE } from "./features/search/search.config";
import { BLOG_SLICE } from "./features/blog/blog.congif";
import { PROFILE_SLICE } from "./features/profile/profile.config";

import userReducer from "./features/user/user.slice";
import alertsReducer from "./features/alerts/alerts.slice";
import modalsReducer from "./features/modals/modals.slice";
import searchReducer from "./features/search/search.slice";
import blogReducer from "./features/blog/blog.slice";
import profileReducer from "./features/profile/profile.slice";

const reducers = combineReducers({
  [USER_SLICE]: userReducer,
  [ALERTS_SLICE]: alertsReducer,
  [MODALS_SLICE]: modalsReducer,
  [SEARCH_SLICE]: searchReducer,
  [BLOG_SLICE]: blogReducer,
  [PROFILE_SLICE]: profileReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
