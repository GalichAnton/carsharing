import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./Slices/ModalSlice";
import validReducer from "./Slices/ValidSlice";
import formReducer from "./Slices/FormSlice";
import locationReducer from "./Slices/LocationSlice";
import carsReducer from "./Slices/CarSlice";
import rateReducer from "./Slices/RateSlice";
import orderReduer from "./Slices/OrderSlice";
export const store = configureStore({
  reducer: {
    modal: modalReducer,
    valid: validReducer,
    form: formReducer,
    location: locationReducer,
    cars: carsReducer,
    rate: rateReducer,
    order: orderReduer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
