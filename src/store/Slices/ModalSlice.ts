import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IState {
  isOpen: boolean;
}

const initialState: IState = {
  isOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setOpen(state, action: PayloadAction<boolean>) {
      state.isOpen = action.payload;
    },
  },
});

export const modalActions = modalSlice.actions;
export default modalSlice.reducer;
