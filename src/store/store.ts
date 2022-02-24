import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./Slices/ModalSlice";
import validReducer from "./Slices/ValidSlice";
import formReducer from "./Slices/FormSlice";
export const store = configureStore({
  reducer: {
    modal: modalReducer,
    valid: validReducer,
    form: formReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
