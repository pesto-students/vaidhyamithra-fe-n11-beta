import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { searchApi } from "../../../api/search/searchApi";
import { SEARCH_SLICE } from "./search.config";

const initialState = {
  results: {
    paginatedResults: [],
    totalCount: 0,
  },
  hasMore: true,
  searchText: "",
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

export const searchSlice = createSlice({
  name: SEARCH_SLICE,
  initialState,
  reducers: {
    removeSearchResults: (state, { payload }) => {
      state.results = payload;
    },
    updateSearchText: (state, { payload }) => {
      state.searchText = payload;
    },
    updateHasMore: (state, { payload }) => {
      state.hasMore = payload;
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
      if (payload.totalCount) state.results.totalCount = payload.totalCount;
      state.isLoading = false;
      state.errorMessage = "";
    },
    [search.rejected]: (state, { meta }) => {
      state.errorMessage = meta.response.data.message;
      state.isLoading = false;
    },
  },
});

export const { removeSearchResults, updateSearchText, updateHasMore } =
  searchSlice.actions;
export default searchSlice.reducer;
