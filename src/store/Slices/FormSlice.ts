import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IFormSliceState {
  city: string;
  point: string;
  model: string;
  category: string;
  color: string;
  dateFrom: string;
  dateTo: string;
  tax: string;
  isFullTank: boolean;
  isChildChair: boolean;
  isRightWheel: boolean;
}

const initialState: IFormSliceState = {
  city: "",
  point: "",
  model: "",
  category: "Все модели",
  color: "",
  dateFrom: "",
  dateTo: "",
  tax: "",
  isFullTank: false,
  isChildChair: false,
  isRightWheel: false,
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setCity(state, action: PayloadAction<string>) {
      state.city = action.payload;
    },
    setPoint(state, action: PayloadAction<string>) {
      state.point = action.payload;
    },
    setModel(state, action: PayloadAction<string>) {
      state.model = action.payload;
    },
    setCategory(state, action: PayloadAction<string>) {
      state.category = action.payload;
    },
    setColor(state, action: PayloadAction<string>) {
      state.color = action.payload;
    },
    setDateFrom(state, action: PayloadAction<string>) {
      state.dateFrom = action.payload;
    },
    setDateTo(state, action: PayloadAction<string>) {
      state.dateTo = action.payload;
    },
    setTax(state, action: PayloadAction<string>) {
      state.tax = action.payload;
    },
    setTank(state, action: PayloadAction<boolean>) {
      state.isFullTank = action.payload;
    },
    setChildChair(state, action: PayloadAction<boolean>) {
      state.isChildChair = action.payload;
    },
    setRightWheel(state, action: PayloadAction<boolean>) {
      state.isRightWheel = action.payload;
    },
    resetForm(state) {
      return { ...state, ...initialState };
    },
  },
});

export const formActions = formSlice.actions;
export default formSlice.reducer;
