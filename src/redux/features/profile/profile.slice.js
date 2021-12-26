import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getSavedBlogsApi,
  getTagsByAuthorApi,
} from "../../../api/profile/profileApi";
import { PROFILE_SLICE } from "./profile.config";

const initialState = {
  userInfo: {
    id: "",
    userName: "Dharmit Dosani", // replace this with empty string
    about: "",
    tags: [],
  },
  bookmarks: [],
  published: [],
  drafts: [],
  isLoading: false,
  errorMessage: "",
};

export const getTagsByAuthor = createAsyncThunk(
  `${PROFILE_SLICE}/getTagsByAuthor`,
  async ({ authorId }, { rejectWithValue }) => {
    try {
      const data = await getTagsByAuthorApi({ authorId });
      return data;
    } catch (err) {
      return rejectWithValue([], err);
    }
  }
);

export const getSavedBlogs = createAsyncThunk(
  `${PROFILE_SLICE}/getSavedBlogs`,
  async ({ userId }, { rejectWithValue }) => {
    try {
      const data = await getSavedBlogsApi({ userId });
      return data;
    } catch (err) {
      return rejectWithValue([], err);
    }
  }
);

export const profileSlice = createSlice({
  name: PROFILE_SLICE,
  initialState,
  reducers: {},
  extraReducers: {
    // Tags by author
    [getTagsByAuthor.pending]: (state) => {
      state.isLoading = true;
      state.errorMessage = "";
    },
    [getTagsByAuthor.fulfilled]: (state, { payload }) => {
      state.userInfo.tags = payload;
      state.isLoading = false;
      state.errorMessage = "";
    },
    [getTagsByAuthor.rejected]: (state, { meta }) => {
      state.errorMessage = meta.response.data.message;
      state.isLoading = false;
    },
    // Saved blogs
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
  },
});

export default profileSlice.reducer;
