import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICheckbox } from "../../Interfaces/CheckBoxInterface";
import { ICity } from "../../Interfaces/CityInterfaces";
import { IPoint } from "../../Interfaces/PointInterfaces";

interface IFormSliceState {
  city: ICity;
  point: IPoint;
  model: string;
  category: string;
  color: string;
  dateFrom: string;
  dateTo: string;
  tax: string;
  moreOptions: ICheckbox[];
}

const initialState: IFormSliceState = {
  city: {} as ICity,
  point: {} as IPoint,
  model: "",
  category: "Все модели",
  color: "Любой",
  dateFrom: "",
  dateTo: "",
  tax: "На сутки, 1999Р/сутки",
  moreOptions: [
    { title: "Полный бак, 500р", value: "Полный бак", id: 0, isChecked: false },
    {
      title: "Детское кресло, 200р",
      value: "Детское кресло",
      id: 1,
      isChecked: true,
    },
    {
      title: "Правый руль, 1600р",
      value: "Правый руль",
      id: 2,
      isChecked: false,
    },
  ],
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setCity(state, action: PayloadAction<ICity>) {
      state.city = { ...state.city, ...action.payload };
    },
    setPoint(state, action: PayloadAction<{ name: string; id: string }>) {
      state.point = { ...state.point, ...action.payload };
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
    setOptions(state, action: PayloadAction<number>) {
      state.moreOptions = state.moreOptions.map((option) =>
        option.id === action.payload
          ? { ...option, isChecked: !option.isChecked }
          : option
      );
    },
    resetForm(state) {
      return { ...state, ...initialState };
    },
  },
});

export const formActions = formSlice.actions;
export default formSlice.reducer;
