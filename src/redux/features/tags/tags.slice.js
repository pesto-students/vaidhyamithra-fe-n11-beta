import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllTagsApi } from "../../../api/tag/tagApi";
import { TAG_SLICE } from "./tags.config";

const initialState = {
    tags: [],
    isLoading: false,
    errorMessage: ""
};

export const getAllTags = createAsyncThunk(
    `${TAG_SLICE}/getAllTags`,
    async () => {
        try {
            const data = await getAllTagsApi();
            return data;
        }
        catch(err) {
            //return rejecWithValue([], err);
        }
    }
);

export const tagSlice = createSlice({
    name: TAG_SLICE,
    initialState,
    reducers:{},
    extraReducers:{
        [getAllTags.pending]:(state) =>{
            state.isLoading = true;
            state.errorMessage = "";
        },
        [getAllTags.fulfilled]:(state, {payload}) => {
            state.tags = payload;
            state.isLoading = false;
            state.errorMessage = "";
        },
        [getAllTags.rejected]:(state, {meta}) => {
            state.errorMessage = meta.response;
            state.isLoading = false;
        }
    }
});

export default tagSlice.reducer;