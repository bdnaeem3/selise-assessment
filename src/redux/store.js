import { configureStore } from "@reduxjs/toolkit";
import appointments from "./slice";

export const store = configureStore({
  reducer: {
    appointments: appointments,
  },
});
