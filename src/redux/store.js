import { configureStore } from "@reduxjs/toolkit";
import { USER_SLICE } from "./features/user/user.config";
import { userApi } from "./features/user/user.service";

import userReducer from "./features/user/user.slice";

export const store = configureStore({
  reducer: {
    // [USER_SLICE]: userReducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});
