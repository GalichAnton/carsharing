import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IOrder, IOrderItem } from "../../Interfaces/OrderInterface";
import Service from "../../api/Service";

interface IOrderSliceState {
  orderItems: IOrderItem[];
  order: {
    status: "idle" | "loading" | "success" | "rejected";
    data: IOrder;
  };
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
  order: {
    status: "idle",
    data: {} as IOrder,
  },
};

export const postOrder = createAsyncThunk(
  "orders/postOrder",
  async (order: IOrder) => {
    const { data } = await Service.postOrder(order);
    return data.data;
  }
);

export const getOrder = createAsyncThunk(
  "orders/getOrder",
  async (orderId: string) => {
    const { data } = await Service.getOrderById(orderId);
    return data.data;
  }
);

export const cancelOrder = createAsyncThunk(
  "orders/deleteOrder",
  async (order: IOrder) => {
    const { data } = await Service.cancelOrder(order);
    return data.data;
  }
);

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
  extraReducers: (builder) => {
    builder.addCase(postOrder.rejected, (state) => {
      state.order.status = "rejected";
    });
    builder.addCase(postOrder.fulfilled, (state, { payload }) => {
      if (payload) {
        state.order.data = payload;
        state.order.status = "success";
      } else {
        state.order.status = "rejected";
      }
    });
    builder.addCase(postOrder.pending, (state) => {
      state.order.status = "loading";
    });
    // ==============================
    builder.addCase(getOrder.rejected, (state) => {
      state.order.status = "rejected";
    });
    builder.addCase(getOrder.fulfilled, (state, { payload }) => {
      if (payload) {
        state.order.data = payload;
        state.order.status = "success";
      } else {
        state.order.status = "rejected";
      }
    });
    builder.addCase(getOrder.pending, (state) => {
      state.order.status = "loading";
    });
  },
});

export const orderActions = orderSlice.actions;
export default orderSlice.reducer;
