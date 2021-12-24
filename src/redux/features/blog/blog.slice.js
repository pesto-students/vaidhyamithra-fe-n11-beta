import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBlogApi } from "../../../api/blog/blogApi";
import { BLOG_SLICE } from "./blog.congif";

const initialState = {
  blogInfo: {
    _id: "",
    title: "",
    content: "",
    authorId: "",
    tags: [],
    status: "",
    updatedAt: "",
    authorDetails: {
      _id: "",
      name: "",
    },
  },
  isLoading: false,
  errorMessage: "",
};

export const getBlog = createAsyncThunk(
  `${BLOG_SLICE}/getBlog`,
  async ({ blogId }, { rejectWithValue }) => {
    try {
      const data = await getBlogApi({ blogId });
      return data;
    } catch (err) {
      return rejectWithValue([], err);
    }
  }
);

export const blogSlice = createSlice({
  name: BLOG_SLICE,
  initialState,
  reducers: {},
  extraReducers: {
    [getBlog.pending]: (state) => {
      state.blogInfo = initialState.blogInfo;
      state.isLoading = true;
      state.errorMessage = "";
    },
    [getBlog.fulfilled]: (state, { payload }) => {
      state.blogInfo = payload[0];
      state.isLoading = false;
      state.errorMessage = "";
    },
    [getBlog.rejected]: (state, { meta }) => {
      state.blogInfo = initialState.blogInfo;
      state.errorMessage = meta.response.data.message;
      state.isLoading = false;
    },
  },
});

export default blogSlice.reducer;