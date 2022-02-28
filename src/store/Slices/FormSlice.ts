import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICheckbox } from "../../Interfaces/CheckBoxInterface";
import { ICity } from "../../Interfaces/CityInterfaces";
import { IPoint } from "../../Interfaces/PointInterfaces";
import { ICar } from "../../Interfaces/CarInterface";
import { ICategory } from "../../Interfaces/CategoryInterface";
import { IRate } from "../../Interfaces/RateInterface";

interface IFormSliceState {
  city: ICity;
  point: IPoint;
  model: ICar;
  category: ICategory;
  color: string;
  dateFrom: string;
  dateTo: string;
  rate: IRate;
  moreOptions: ICheckbox[];
}

const initialState: IFormSliceState = {
  city: {} as ICity,
  point: {} as IPoint,
  model: {} as ICar,
  category: {} as ICategory,
  color: "",
  dateFrom: "",
  dateTo: "",
  rate: {} as IRate,
  moreOptions: [
    { title: "Полный бак, 500р", value: "Полный бак", id: 0, isChecked: false },
    {
      title: "Детское кресло, 200р",
      value: "Детское кресло",
      id: 1,
      isChecked: false,
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
    setModel(state, action: PayloadAction<ICar>) {
      state.model = action.payload;
    },
    setCategory(state, action: PayloadAction<ICategory>) {
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
    setRate(state, action: PayloadAction<IRate>) {
      state.rate = action.payload;
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
    resetPoint(state) {
      return {
        ...state,
        ...initialState,
        city: state.city,
      };
    },
  },
});

export const formActions = formSlice.actions;
export default formSlice.reducer;
