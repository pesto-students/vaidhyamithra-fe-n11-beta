import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  insertTagApi,
  searchApi,
  searchTopicsApi,
} from "../../../api/search/searchApi";
import { SEARCH_SLICE } from "./search.config";

const initialState = {
  results: {
    paginatedResults: [],
    totalCount: 999,
  },
  pageNumber: 1,
  searchText: "",
  tags: [],
  isLoading: false,
  errorMessage: "",
};

export const search = createAsyncThunk(
  `${SEARCH_SLICE}`,
  async ({ searchText, pageNumber, pageSize }, { rejectWithValue }) => {
    try {
      const data = await searchApi({ searchText, pageNumber, pageSize });
      return data;
    } catch (err) {
      return rejectWithValue([], err);
    }
  }
);

export const searchTags = createAsyncThunk(
  `${SEARCH_SLICE}/getTagsBySearchText`,
  async ({ tagName }, { rejectWithValue }) => {
    try {
      const data = await searchTopicsApi({ tagName });
      return data;
    } catch (err) {
      return rejectWithValue([], err);
    }
  }
);

export const createTag = createAsyncThunk(
  `${SEARCH_SLICE}/createTag`,
  async ({ tagName }, { rejectWithValue }) => {
    try {
      const data = await insertTagApi({ tagName });
      return data;
    } catch (err) {
      return rejectWithValue([], err);
    }
  }
);

export const searchSlice = createSlice({
  name: SEARCH_SLICE,
  initialState,
  reducers: {
    removeSearchResults: (state) => {
      state.results = initialState.results;
      state.pageNumber = initialState.pageNumber;
    },
    updateSearchText: (state, { payload }) => {
      state.searchText = payload;
    },
    removeSearchTagsResult: (state) => {
      state.tags = initialState.tags;
    },
    updateSearchTagsResult: (state, { payload }) => {
      state.tags = payload;
    },
  },
  extraReducers: {
    [search.pending]: (state) => {
      state.isLoading = true;
      state.errorMessage = "";
    },
    [search.fulfilled]: (state, { payload }) => {
      state.results.paginatedResults = state.results.paginatedResults.concat(
        payload.paginatedResults
      );
      state.pageNumber = state.pageNumber + 1;
      if (payload.totalCount) state.results.totalCount = payload.totalCount;
      state.isLoading = false;
      state.errorMessage = "";
    },
    [search.rejected]: (state, { meta }) => {
      state.pageNumber = initialState.pageNumber;
      state.errorMessage = meta.response.data.message;
      state.isLoading = false;
    },
    [searchTags.pending]: (state) => {
      state.isLoading = true;
      state.errorMessage = "";
    },
    [searchTags.fulfilled]: (state, { payload }) => {
      state.tags = payload.map(({ tagName }) => tagName);
      state.isLoading = false;
      state.errorMessage = "";
    },
    [searchTags.rejected]: (state, { meta }) => {
      state.errorMessage = meta.response.data.message;
      state.isLoading = false;
    },
  },
});

export const {
  removeSearchResults,
  updateSearchText,
  removeSearchTagsResult,
  updateSearchTagsResult,
} = searchSlice.actions;
export default searchSlice.reducer;
