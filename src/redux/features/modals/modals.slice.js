import { createSlice } from "@reduxjs/toolkit";
import { MODALS_SLICE, MODAL_TYPES } from "./modals.congif";

const initialState = {
  modalType: MODAL_TYPES.NONE,
};

export const modalsSlice = createSlice({
  name: MODALS_SLICE,
  initialState,
  reducers: {
    showModal: (state, { payload }) => {
      state.modalType = payload.type;
    },
    hideModal: (state) => {
      state.modalType = MODAL_TYPES.NONE;
    },
  },
});

// Action creators are generated for each case reducer function
export const { showModal, hideModal } = modalsSlice.actions;

export default modalsSlice.reducer;
