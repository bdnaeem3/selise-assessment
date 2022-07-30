import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  appointments: [
    {
      name: "Naeem Ahmed",
      gender: "Male",
      age: "28",
      date: "2022-08-01",
      time: "23:39",
    },
    {
      name: "Naeem Ahmed",
      gender: "Male",
      age: "28",
      date: "2022-07-01",
      time: "02:15",
    },
    {
      name: "Naeem Ahmed",
      gender: "Male",
      age: "28",
      date: "2022-07-01",
      time: "02:00",
    },
    {
      name: "Naeem Ahmed",
      gender: "Male",
      age: "28",
      date: "2022-07-01",
      time: "02:05",
    },
    {
      name: "Naeem Ahmed",
      gender: "Male",
      age: "28",
      date: "2022-07-01",
      time: "01:00",
    },
    {
      name: "Naeem Ahmed",
      gender: "Male",
      age: "28",
      date: "2022-07-01",
      time: "03:00",
    },
    {
      name: "Naeem Ahmed",
      gender: "Male",
      age: "28",
      date: "2022-07-01",
      time: "04:00",
    },
    {
      name: "Naeem Ahmed",
      gender: "Male",
      age: "28",
      date: "2022-07-01",
      time: "05:00",
    },
    {
      name: "Naeem Ahmed",
      gender: "Male",
      age: "28",
      date: "2022-07-02",
      time: "01:00",
    },
    {
      name: "Naeem Ahmed",
      gender: "Male",
      age: "28",
      date: "2022-07-15",
      time: "01:00",
    },
    {
      name: "Naeem Ahmed",
      gender: "Male",
      age: "28",
      date: "2022-07-20",
      time: "01:00",
    },
    {
      name: "Naeem Ahmed",
      gender: "Male",
      age: "28",
      date: "2022-07-22",
      time: "01:00",
    },
  ],
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
