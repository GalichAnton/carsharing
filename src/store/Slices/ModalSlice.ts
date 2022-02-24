import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IState {
  isBurgerOpen: boolean;
  isModalOpen: boolean;
}

const initialState: IState = {
  isBurgerOpen: false,
  isModalOpen: false,
};

const ModalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setOpenBurger(state, action: PayloadAction<boolean>) {
      state.isBurgerOpen = action.payload;
    },
    setOpenModal(state, action: PayloadAction<boolean>) {
      state.isModalOpen = action.payload;
    },
  },
});

export const modalActions = ModalSlice.actions;
export default ModalSlice.reducer;
