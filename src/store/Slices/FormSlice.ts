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
  price: number;
}

const initialState: IFormSliceState = {
  city: {} as ICity,
  point: {} as IPoint,
  model: {} as ICar,
  category: {} as ICategory,
  color: "",
  dateFrom: "",
  dateTo: "",
  rate: {
    id: "60b958582aed9a0b9b7ed3d6",
    price: 1500,
    rateTypeId: {
      unit: "сутки",
      name: "Суточный",
      id: "5e26a082099b810b946c5d83",
    },
  },
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
  price: 0,
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
    setPrice(state, action: PayloadAction<number>) {
      state.price = action.payload;
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
