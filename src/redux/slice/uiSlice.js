import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showPopupName: "",
  year: new Date().getFullYear(),
  month: new Date().getMonth(),
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    popupToggle: (state, { payload }) => {
      state.showPopupName = payload;
    },
    setYear: (state, { payload }) => {
      state.year = payload;
    },
    setMonth: (state, { payload }) => {
      state.month = payload;
    },
  },
});

export const { popupToggle, setYear, setMonth } = uiSlice.actions;

export default uiSlice.reducer;
