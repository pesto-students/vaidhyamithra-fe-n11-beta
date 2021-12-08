import { createSlice } from "@reduxjs/toolkit";
import { USER_SLICE } from "./user.config";

const initialState = {};

export const userSlice = createSlice({
  name: USER_SLICE,
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateUser } = userSlice.actions;

export default userSlice.reducer;
