import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  appointments: [],
};

export const appointmentsSlice = createSlice({
  name: "appointment",
  initialState,
  reducers: {
    addAppointment: (state, { payload }) => {
      state.appointments = [...state.appointments, payload];
    },
  },
});

export const { addAppointment } = appointmentsSlice.actions;

export default appointmentsSlice.reducer;
