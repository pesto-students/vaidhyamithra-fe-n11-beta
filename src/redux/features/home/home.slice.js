import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getBlogsByTagsApi,
  getLatestBlogsApi,
} from "../../../api/blog/blogApi";
import { HOME_SLICE } from "./home.config";

const initialState = {
  recommended: [],
  latest: [],
  isLoading: false,
  errorMessage: "",
};

export const getLatestBlogs = createAsyncThunk(
  `${HOME_SLICE}/getLatestBlogs`,
  async (input, { rejectWithValue }) => {
    try {
      const data = await getLatestBlogsApi();
      return data;
    } catch (err) {
      return rejectWithValue([], err);
    }
  }
);

export const getRecommendedBlogs = createAsyncThunk(
  `${HOME_SLICE}/getRecommendedBlogs`,
  async ({ tags }, { rejectWithValue }) => {
    try {
      const data = await getBlogsByTagsApi({ tags });
      return data;
    } catch (err) {
      return rejectWithValue([], err);
    }
  }
);

export const homeSlice = createSlice({
  name: HOME_SLICE,
  initialState,
  reducers: {},
  extraReducers: {
    // get latest blogs
    [getLatestBlogs.pending]: (state) => {
      state.isLoading = true;
      state.errorMessage = "";
    },
    [getLatestBlogs.fulfilled]: (state, { payload }) => {
      state.latest = payload;
      state.isLoading = false;
      state.errorMessage = "";
    },
    [getLatestBlogs.rejected]: (state, { meta }) => {
      state.errorMessage = meta.response.data.message;
      state.isLoading = false;
    },
    // get recommended blogs
    [getRecommendedBlogs.pending]: (state) => {
      state.isLoading = true;
      state.errorMessage = "";
    },
    [getRecommendedBlogs.fulfilled]: (state, { payload }) => {
      state.recommended = payload;
      state.isLoading = false;
      state.errorMessage = "";
    },
    [getRecommendedBlogs.rejected]: (state, { meta }) => {
      state.errorMessage = meta.response.data.message;
      state.isLoading = false;
    },
  },
});

export default homeSlice.reducer;
