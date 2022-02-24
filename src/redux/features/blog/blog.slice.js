import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createBlogApi,
  deleteBookmarkApi,
  getBlogApi,
  saveBookmarkApi,
  updateBlogApi,
} from "../../../api/blog/blogApi";
import {
  deleteCommentApi,
  getBlogCommentsApi,
  postCommentApi,
} from "../../../api/comment/commentApi";
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
    description: "",
    imgUrl: "",
    authorDetails: {
      _id: "",
      name: "",
      imgUrl: "",
    },
  },
  comments: [],
  isLoading: false,
  isCommentLoading: false,
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
  async (
    { title, content, tags, authorId, status, description, imgUrl },
    { rejectWithValue }
  ) => {
    try {
      const data = await createBlogApi({
        title,
        content,
        tags,
        authorId,
        status,
        description,
        imgUrl,
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
    { blogId, title, content, tags, authorId, status, description, imgUrl },
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
        description,
        imgUrl,
      });
      return data;
    } catch (err) {
      return rejectWithValue([], err);
    }
  }
);

export const getBlogComments = createAsyncThunk(
  `${BLOG_SLICE}/getComments`,
  async ({ blogId }, { rejectWithValue }) => {
    try {
      const data = await getBlogCommentsApi({ blogId });
      return data;
    } catch (err) {
      return rejectWithValue([], err);
    }
  }
);

export const postBlogComment = createAsyncThunk(
  `${BLOG_SLICE}/createComment`,
  async ({ userId, blogId, comment }, { rejectWithValue }) => {
    try {
      const data = await postCommentApi({ userId, blogId, comment });
      return data;
    } catch (err) {
      return rejectWithValue([], err);
    }
  }
);

export const deleteComment = createAsyncThunk(
  `${BLOG_SLICE}/deleteComment`,
  async (commentId, { rejectWithValue }) => {
    try {
      const data = await deleteCommentApi(commentId);
      return data;
    } catch (err) {
      return rejectWithValue([], err);
    }
  }
);

export const saveBookmark = createAsyncThunk(
  `${BLOG_SLICE}/saveBookmark`,
  async ({ userId, blogId }, { rejectWithValue }) => {
    try {
      const data = await saveBookmarkApi({ userId, blogId });
      return data;
    } catch (err) {
      return rejectWithValue([], err);
    }
  }
);

export const deleteBookmark = createAsyncThunk(
  `${BLOG_SLICE}/deleteBookmark`,
  async ({ userId, blogId }, { rejectWithValue }) => {
    try {
      const data = await deleteBookmarkApi({ userId, blogId });
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
    updateComments: (state, { payload }) => {
      state.comments = payload;
    },
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
    [getBlogComments.pending]: (state) => {
      state.isCommentLoading = true;
      state.errorMessage = "";
    },
    [getBlogComments.fulfilled]: (state, { payload }) => {
      state.comments = payload;
      state.isCommentLoading = false;
      state.errorMessage = "";
    },
    [getBlogComments.rejected]: (state, { meta }) => {
      state.errorMessage = meta.response.data.message;
      state.isCommentLoading = false;
    },
    [postBlogComment.pending]: (state) => {
      state.isCommentLoading = true;
      state.errorMessage = "";
    },
    [postBlogComment.fulfilled]: (state, { payload }) => {
      state.comments = payload;
      state.isCommentLoading = false;
      state.errorMessage = "";
    },
    [postBlogComment.rejected]: (state, { meta }) => {
      state.errorMessage = meta.response.data.message;
      state.isCommentLoading = false;
    },
  },
});

export const { resetBlogState, updateComments } = blogSlice.actions;

export default blogSlice.reducer;
