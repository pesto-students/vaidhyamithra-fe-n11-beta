import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  deleteCommentApi,
  getBlogCommentsApi,
  postCommentApi,
} from "../../../api/comment/commentApi";
import { COMMENT_SLICE } from "./comment.config";

const initialState = {
  comments: [],
  isLoading: false,
  errorMessage: "",
};

export const getBlogComments = createAsyncThunk(
  `${COMMENT_SLICE}/getComments`,
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
  `${COMMENT_SLICE}/createComment`,
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
  `${COMMENT_SLICE}/deleteComment`,
  async (commentId, { rejectWithValue }) => {
    try {
      const data = await deleteCommentApi(commentId);
      return data;
    } catch (err) {
      return rejectWithValue([], err);
    }
  }
);

export const commentSlice = createSlice({
  name: COMMENT_SLICE,
  initialState,
  reducers: {
    updateComments:(state, {payload}) => {
      state.comments = payload;
    }
  },
  extraReducers: {
    [getBlogComments.pending]: (state) => {
      state.isLoading = true;
      state.errorMessage = "";
    },
    [getBlogComments.fulfilled]: (state, { payload }) => {
      state.comments = payload;
      state.isLoading = false;
      state.errorMessage = "";
    },
    [getBlogComments.rejected]: (state, { meta }) => {
      state.errorMessage = meta.response.data.message;
      state.isLoading = false;
    },
    [postBlogComment.pending]: (state) => {
      state.isLoading = true;
      state.errorMessage = "";
    },
    [postBlogComment.fulfilled]: (state, { payload }) => {
      state.comments = payload;
      state.isLoading = false;
      state.errorMessage = "";
    },
    [postBlogComment.rejected]: (state, { meta }) => {
      state.errorMessage = meta.response.data.message;
      state.isLoading = false;
    }
  },
});

export const { updateComments } = commentSlice.actions;
export default commentSlice.reducer;
