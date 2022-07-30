import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showPopupName: "",
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    popupToggle: (state, { payload }) => {
      state.showPopupName = payload;
    },
  },
});

export const { popupToggle } = uiSlice.actions;

export default uiSlice.reducer;
