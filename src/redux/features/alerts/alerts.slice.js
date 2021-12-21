import { createSlice } from "@reduxjs/toolkit";
import { alertTypes } from "../../../components/molecules/snackbar";
import { ALERTS_SLICE } from "./alerts.config";

const initialState = {
  text: "",
  type: alertTypes.info,
};

export const alertsSlice = createSlice({
  name: ALERTS_SLICE,
  initialState,
  reducers: {
    setAlert: (state, { payload }) => {
      state.text = payload.text;
      state.type = payload.type || alertTypes.info;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAlert } = alertsSlice.actions;

export default alertsSlice.reducer;
