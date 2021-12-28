import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBlogsByTagsApi } from "../../../api/blog/blogApi";
import { BLOGS_BY_TAG_SLICE } from "./blogsByTag.config";

const initialState = {
  blogs: [],
  isLoading: false,
  errorMessage: "",
};

export const getBlogsByTag = createAsyncThunk(
  `${BLOGS_BY_TAG_SLICE}/getBlogsByTag`,
  async (tagName, { rejectWithValue }) => {
    try {
      const data = await getBlogsByTagsApi({ tags: [tagName] });
      return data;
    } catch (err) {
      return rejectWithValue([], err);
    }
  }
);

export const blogsByTagSlice = createSlice({
  name: BLOGS_BY_TAG_SLICE,
  initialState,
  reducers: {
    resetBlogsByTag: () => initialState,
  },
  extraReducers: {
    [getBlogsByTag.pending]: (state) => {
      state.isLoading = true;
      state.errorMessage = "";
    },
    [getBlogsByTag.fulfilled]: (state, { payload }) => {
      state.blogs = payload;
      state.isLoading = false;
      state.errorMessage = "";
    },
    [getBlogsByTag.rejected]: (state, { meta }) => {
      state.errorMessage = meta.response.data.message;
      state.isLoading = false;
    },
  },
});

export const { resetBlogsByTag } = blogsByTagSlice.actions;

export default blogsByTagSlice.reducer;
