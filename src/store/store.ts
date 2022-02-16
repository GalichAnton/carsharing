import { configureStore } from "@reduxjs/toolkit";
import modal from "./Slices/ModalSlice";
export const store = configureStore({
  reducer: {
    modalReducer: modal,
  },
});

export type RootState = ReturnType<typeof store.getState>;
