import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginApi } from "../../../api/user/userApi";
import { USER_SLICE } from "./user.config";

const initialState = {
  userInfo: {},
  isLoading: false,
  errorMessage: "",
};

export const loginUser = createAsyncThunk(
  `${USER_SLICE}/login`,
  async ({ name, password }, { rejectWithValue }) => {
    try {
      const data = await loginApi({ name, password });
      return data;
    } catch (err) {
      return rejectWithValue([], err);
    }
  }
);

export const userSlice = createSlice({
  name: USER_SLICE,
  initialState,
  reducers: {},
  extraReducers: {
    [loginUser.fulfilled]: (state, { payload }) => {
      state.userInfo = payload;
      state.isLoading = false;
      state.errorMessage = "";
    },
    [loginUser.pending]: (state) => {
      state.isLoading = true;
    },
    [loginUser.rejected]: (state, { meta }) => {
      state.errorMessage = meta.response.data.message;
      state.isLoading = false;
    },
  },
});

export default userSlice.reducer;
