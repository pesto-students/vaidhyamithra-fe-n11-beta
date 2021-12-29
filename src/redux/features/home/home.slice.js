import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getBlogsByTagsApi,
  getLatestBlogsApi,
} from "../../../api/blog/blogApi";
import { HOME_SLICE } from "./home.config";

const initialState = {
  recommended: [],
  latest: {
    paginatedResults:[],
    totalCount: 9999
  },
  pageNumber: 1,
  isLoading: false,
  errorMessage: "",
};

export const getLatestBlogs = createAsyncThunk(
  `${HOME_SLICE}/getLatestBlogs`,
  async ({ pageNumber, pageSize }, { rejectWithValue }) => {
    try {
      console.log("Pagenumber, PageSize", {pageNumber, pageSize});
      const data = await getLatestBlogsApi({pageNumber, pageSize});
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
  reducers: {
    resetLatest:(state) => {
      state.pageNumber = initialState.pageNumber;
      state.latest = initialState.latest;
    }
  },
  extraReducers: {
    // get latest blogs
    [getLatestBlogs.pending]: (state) => {
      state.isLoading = true;
      state.errorMessage = "";
    },
    [getLatestBlogs.fulfilled]: (state, { payload }) => {
      state.latest.paginatedResults = state.latest.paginatedResults.concat(
        payload.paginatedResults
      );
      state.pageNumber = state.pageNumber + 1;
      console.log("I came here:", state.pageNumber);
      if(payload.totalCount) state.latest.totalCount = payload.totalCount;
      state.isLoading = false;
      state.errorMessage = "";
    },
    [getLatestBlogs.rejected]: (state, { meta }) => {
      state.pageNumber = initialState.pageNumber;
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
export const { resetLatest } = homeSlice.actions;
export default homeSlice.reducer;
