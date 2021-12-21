import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginApi, signupApi } from "../../../api/user/userApi";
import { USER_SLICE } from "./user.config";

const initialState = {
  userInfo: {
    id: "",
    email: "",
    name: "",
    authToken: null,
  },
  isLoading: false,
  errorMessage: "",
  isLoginModalOpen: false,
};

export const loginUser = createAsyncThunk(
  `${USER_SLICE}/login`,
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const data = await loginApi({ email, password });
      return data;
    } catch (err) {
      return rejectWithValue([], err);
    }
  }
);

export const signupUser = createAsyncThunk(
  `${USER_SLICE}/signup`,
  async ({ name, email, password, isDoctor }, { rejectWithValue }) => {
    try {
      const data = await signupApi({ name, email, password, isDoctor });
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
    [loginUser.pending]: (state) => {
      state.isLoading = true;
      state.errorMessage = "";
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.userInfo = payload;
      state.isLoading = false;
      state.errorMessage = "";
    },
    [loginUser.rejected]: (state, { meta }) => {
      state.errorMessage = meta.response.data.message;
      state.isLoading = false;
    },

    [signupUser.pending]: (state) => {
      state.isLoading = true;
      state.errorMessage = "";
    },
    [signupUser.fulfilled]: (state, { payload }) => {
      // TODO: make API send same auth details as from login
      state.userInfo = payload;
      state.isLoading = false;
      state.errorMessage = "";
    },
    [signupUser.rejected]: (state, { meta }) => {
      state.errorMessage = meta.response.data.message;
      state.isLoading = false;
    },
  },
});

export default userSlice.reducer;
