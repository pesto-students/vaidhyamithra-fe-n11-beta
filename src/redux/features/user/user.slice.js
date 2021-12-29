import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getDraftBlogsApi,
  getSavedBlogsApi,
  loginApi,
  signupApi,
  updateUserInfoApi,
} from "../../../api/user/userApi";
import { USER_SLICE } from "./user.config";

const initialState = {
  userInfo: {
    id: "",
    userName: "",
    email: "",
    about: "",
    isDoctor: false,
    interests: [],
    accessToken: null,
  },
  bookmarks: [],
  drafts: [],
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

export const updateUserInfo = createAsyncThunk(
  `${USER_SLICE}/updateUserInfo`,
  async (userData, { rejectWithValue }) => {
    try {
      const data = await updateUserInfoApi(userData);
      return data;
    } catch (err) {
      return rejectWithValue([], err);
    }
  }
);

export const getSavedBlogs = createAsyncThunk(
  `${USER_SLICE}/getSavedBlogs`,
  async ({ userId }, { rejectWithValue }) => {
    try {
      const data = await getSavedBlogsApi({ userId });
      return data;
    } catch (err) {
      return rejectWithValue([], err);
    }
  }
);

export const getDraftBlogs = createAsyncThunk(
  `${USER_SLICE}/getDraftBlogs`,
  async ({ userId }, { rejectWithValue }) => {
    try {
      const data = await getDraftBlogsApi({ userId });
      return data;
    } catch (err) {
      return rejectWithValue([], err);
    }
  }
);

export const userSlice = createSlice({
  name: USER_SLICE,
  initialState,
  reducers: {
    logoutUser: () => initialState,
  },
  extraReducers: {
    // login user
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
    // sign up user
    [signupUser.pending]: (state) => {
      state.isLoading = true;
      state.errorMessage = "";
    },
    [signupUser.fulfilled]: (state, { payload }) => {
      state.userInfo = payload;
      state.isLoading = false;
      state.errorMessage = "";
    },
    [signupUser.rejected]: (state, { meta }) => {
      state.errorMessage = meta.response.data.message;
      state.isLoading = false;
    },
    // update user info
    [updateUserInfo.pending]: (state) => {
      state.isLoading = true;
      state.errorMessage = "";
    },
    [updateUserInfo.fulfilled]: (state, { payload }) => {
      state.userInfo = { ...payload, accessToken: state.userInfo.accessToken };
      state.isLoading = false;
      state.errorMessage = "";
    },
    [updateUserInfo.rejected]: (state, { meta }) => {
      state.errorMessage = meta.response.data.message;
      state.isLoading = false;
    },
    // bookmarked blogs
    [getSavedBlogs.pending]: (state) => {
      state.isLoading = true;
      state.errorMessage = "";
    },
    [getSavedBlogs.fulfilled]: (state, { payload }) => {
      state.bookmarks = payload.map(({ blogDetails }) => blogDetails);
      state.isLoading = false;
      state.errorMessage = "";
    },
    [getSavedBlogs.rejected]: (state, { meta }) => {
      state.errorMessage = meta.response.data.message;
      state.isLoading = false;
    },
    // Draft blogs
    [getDraftBlogs.pending]: (state) => {
      state.isLoading = true;
      state.errorMessage = "";
    },
    [getDraftBlogs.fulfilled]: (state, { payload }) => {
      state.drafts = payload;
      state.isLoading = false;
      state.errorMessage = "";
    },
    [getDraftBlogs.rejected]: (state, { meta }) => {
      state.errorMessage = meta.response.data.message;
      state.isLoading = false;
    },
  },
});

export const { logoutUser } = userSlice.actions;

export default userSlice.reducer;
