import { configureStore } from "@reduxjs/toolkit";

import { ALERTS_SLICE } from "./features/alerts/alerts.config";
import { USER_SLICE } from "./features/user/user.config";
import { MODALS_SLICE } from "./features/modals/modals.congif";
import { SEARCH_SLICE } from "./features/search/search.config";

import userReducer from "./features/user/user.slice";
import alertsReducer from "./features/alerts/alerts.slice";
import modalsReducer from "./features/modals/modals.slice";
import searchReducer from "./features/search/search.slice";

export const store = configureStore({
  reducer: {
    [USER_SLICE]: userReducer,
    [ALERTS_SLICE]: alertsReducer,
    [MODALS_SLICE]: modalsReducer,
    [SEARCH_SLICE]: searchReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
