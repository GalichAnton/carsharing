import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface IValidSliceState extends Record<string, boolean> {
  locationStep: boolean;
  modelStep: boolean;
  moreStep: boolean;
  totalStep: boolean;
}
const initialState: IValidSliceState = {
  locationStep: false,
  modelStep: false,
  moreStep: false,
  totalStep: false,
};

export const validSlice = createSlice({
  name: "valid",
  initialState,
  reducers: {
    setLocationStep(state, action: PayloadAction<boolean>) {
      state.locationStep = action.payload;
    },
    setModelStep(state, action: PayloadAction<boolean>) {
      state.modelStep = action.payload;
    },
    setMoreStep(state, action: PayloadAction<boolean>) {
      state.moreStep = action.payload;
    },
    setTotalStep(state, action: PayloadAction<boolean>) {
      state.totalStep = action.payload;
    },
    resetValid(state) {
      return { ...state, ...initialState };
    },
  },
});

export const validActions = validSlice.actions;
export default validSlice.reducer;
