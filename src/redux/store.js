import { configureStore } from "@reduxjs/toolkit";
import { USER_SLICE } from "./features/user/user.config";

import userReducer from "./features/user/user.slice";

export const store = configureStore({
  reducer: {
    [USER_SLICE]: userReducer,
  },
});
