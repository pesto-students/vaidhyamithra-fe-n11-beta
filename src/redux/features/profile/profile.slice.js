import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getDraftBlogsApi,
  getProfileDetailsApi,
  getPublishedBlogsApi,
  getSavedBlogsApi,
  getTagsByAuthorApi,
} from "../../../api/profile/profileApi";
import { PROFILE_SLICE } from "./profile.config";

const initialState = {
  userInfo: {
    id: "",
    userName: "Author",
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

export const getPublishedBlogs = createAsyncThunk(
  `${PROFILE_SLICE}/getPublishedBlogs`,
  async ({ userId }, { rejectWithValue }) => {
    try {
      const data = await getPublishedBlogsApi({ userId });
      return data;
    } catch (err) {
      return rejectWithValue([], err);
    }
  }
);

export const getDraftBlogs = createAsyncThunk(
  `${PROFILE_SLICE}/getDraftBlogs`,
  async ({ userId }, { rejectWithValue }) => {
    try {
      const data = await getDraftBlogsApi({ userId });
      return data;
    } catch (err) {
      return rejectWithValue([], err);
    }
  }
);

export const getProfileDetails = createAsyncThunk(
  `${PROFILE_SLICE}/getProfileDetails`,
  async ({ userId }, { rejectWithValue }) => {
    try {
      const data = await getProfileDetailsApi({ userId });
      return data;
    } catch (err) {
      return rejectWithValue([], err);
    }
  }
);

export const profileSlice = createSlice({
  name: PROFILE_SLICE,
  initialState,
  reducers: {
    resetProfile: () => initialState,
  },
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
    // Published blogs
    [getPublishedBlogs.pending]: (state) => {
      state.isLoading = true;
      state.errorMessage = "";
    },
    [getPublishedBlogs.fulfilled]: (state, { payload }) => {
      state.published = payload;
      state.isLoading = false;
      state.errorMessage = "";
    },
    [getPublishedBlogs.rejected]: (state, { meta }) => {
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
    // Profile Basic Info
    [getProfileDetails.pending]: (state) => {
      state.isLoading = true;
      state.errorMessage = "";
    },
    [getProfileDetails.fulfilled]: (state, { payload }) => {
      state.userInfo = payload;
      state.isLoading = false;
      state.errorMessage = "";
    },
    [getProfileDetails.rejected]: (state, { meta }) => {
      state.errorMessage = meta.response.data.message;
      state.isLoading = false;
    },
  },
});

export const { resetProfile } = profileSlice.actions;

export default profileSlice.reducer;
