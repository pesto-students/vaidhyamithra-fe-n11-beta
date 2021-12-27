import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createBlogApi,
  getBlogApi,
  updateBlogApi,
} from "../../../api/blog/blogApi";
import { BLOG_STATUS } from "../../../pages/editBlog/editBlog.constants";
import { BLOG_SLICE } from "./blog.congif";

const initialState = {
  blogInfo: {
    _id: "",
    title: "",
    content: "",
    authorId: "",
    tags: [],
    status: BLOG_STATUS.DRAFT,
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

export const createBlog = createAsyncThunk(
  `${BLOG_SLICE}/createBlog`,
  async ({ title, content, tags, authorId, status }, { rejectWithValue }) => {
    try {
      const data = await createBlogApi({
        title,
        content,
        tags,
        authorId,
        status,
      });
      return data;
    } catch (err) {
      return rejectWithValue([], err);
    }
  }
);

export const updateBlog = createAsyncThunk(
  `${BLOG_SLICE}/updateBlog`,
  async (
    { blogId, title, content, tags, authorId, status },
    { rejectWithValue }
  ) => {
    try {
      const data = await updateBlogApi({
        blogId,
        title,
        content,
        tags,
        authorId,
        status,
      });
      return data;
    } catch (err) {
      return rejectWithValue([], err);
    }
  }
);

export const blogSlice = createSlice({
  name: BLOG_SLICE,
  initialState,
  reducers: {
    resetBlogState: () => initialState,
  },
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
    [createBlog.pending]: (state) => {
      state.isLoading = true;
      state.errorMessage = "";
    },
    [createBlog.fulfilled]: (state, { payload }) => {
      state.blogInfo = payload;
      state.isLoading = false;
      state.errorMessage = "";
    },
    [createBlog.rejected]: (state, { meta }) => {
      state.blogInfo = initialState.blogInfo;
      state.errorMessage = meta.response.data.message;
      state.isLoading = false;
    },
    [updateBlog.pending]: (state) => {
      state.isLoading = true;
      state.errorMessage = "";
    },
    [updateBlog.fulfilled]: (state, { payload }) => {
      state.blogInfo = payload;
      state.isLoading = false;
      state.errorMessage = "";
    },
    [updateBlog.rejected]: (state, { meta }) => {
      state.blogInfo = initialState.blogInfo;
      state.errorMessage = meta.response.data.message;
      state.isLoading = false;
    },
  },
});

export const { resetBlogState } = blogSlice.actions;

export default blogSlice.reducer;
