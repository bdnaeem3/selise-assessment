import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  appointments: [],
};

export const appointmentsSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addAppointment: (state, action) => {
      state.appointments = [...state.appointments, action.appointment];
    },
  },
});

export const { addAppointment } = appointmentsSlice.actions;

export default appointmentsSlice.reducer;
