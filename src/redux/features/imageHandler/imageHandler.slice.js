import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const uploadImage = createAsyncThunk(
    "uploadImage",
    async(formData, {rejectWithValue}) => {
        try {
            const {data} = await axios.post("https://api.Cloudinary.com/v1_1/dnotnf02j/image/upload", formData);
            return data;
        }
        catch (err) {
            return rejectWithValue(err);
        }
    }
)