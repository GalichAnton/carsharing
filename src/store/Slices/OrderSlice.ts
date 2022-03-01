import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IOrderItem } from "../../Interfaces/OrderInterface";

interface IOrderSliceState {
  orderItems: IOrderItem[];
}

const initialState: IOrderSliceState = {
  orderItems: [
    {
      title: "Пункт выдачи",
      info: "",
    },
    {
      title: "Модель",
      info: "",
    },
    {
      title: "Цвет",
      info: "",
    },
    {
      title: "Длительность аренды",
      info: "",
    },
    {
      title: "Тариф",
      info: "",
    },
    {
      title: "Полный бак",
      info: "",
    },
    {
      title: "Детское кресло",
      info: "",
    },
    {
      title: "Правый руль",
      info: "",
    },
  ],
};

export const orderSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setOrderItem(state, action: PayloadAction<IOrderItem>) {
      state.orderItems = state.orderItems.map((item) =>
        item.title === action.payload.title ? action.payload : item
      );
    },
    resetOrder(state) {
      return { ...state, ...initialState };
    },
    resetModelOrder(state) {
      return {
        ...state,
        orderItems: state.orderItems.map((item, i) =>
          i > 0 ? { title: item.title, info: "" } : item
        ),
      };
    },
  },
});

export const orderActions = orderSlice.actions;
export default orderSlice.reducer;
