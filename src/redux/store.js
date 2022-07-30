import { configureStore } from "@reduxjs/toolkit";
import appointments from "./slice/appointmentSlice";
import ui from "./slice/uiSlice";

export const store = configureStore({
  reducer: {
    ui: ui,
    appointments: appointments,
  },
});
