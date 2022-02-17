import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IState {
  isOpen: boolean;
}

const initialState: IState = {
  isOpen: false,
};

const BurgerSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setOpen(state, action: PayloadAction<boolean>) {
      state.isOpen = action.payload;
    },
  },
});

export const burgerActions = BurgerSlice.actions;
export default BurgerSlice.reducer;
