import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./Slices/ModalSlice";
import validReducer from "./Slices/ValidSlice";
import formReducer from "./Slices/FormSlice";
import dataReducer from "./Slices/dataSlice";
export const store = configureStore({
  reducer: {
    modal: modalReducer,
    valid: validReducer,
    form: formReducer,
    data: dataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
