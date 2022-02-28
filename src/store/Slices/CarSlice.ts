import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import Service from "../../api/Service";
import {
  ICategory,
  ICategoryResponse,
} from "../../Interfaces/CategoryInterface";
import { ICar, ICarResponse } from "../../Interfaces/CarInterface";

interface ICarState {
  cars: {
    data: ICar[];
    status: "idle" | "loading" | "success" | "rejected";
  };
  categories: {
    data: ICategory[];
    status: "idle" | "loading" | "success" | "rejected";
  };
}
const initialState: ICarState = {
  cars: {
    data: [],
    status: "idle",
  },
  categories: {
    data: [],
    status: "idle",
  },
};

export const getCars = createAsyncThunk("cars/getCars", async () => {
  const { data }: AxiosResponse<ICarResponse> = await Service.getCars();
  return data.data;
});

export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async () => {
    const { data }: AxiosResponse<ICategoryResponse> =
      await Service.getCategories();
    return data.data;
  }
);

export const getCarByCategory = createAsyncThunk(
  "carsByCategory/getByCategory",
  async (id: string) => {
    const { data }: AxiosResponse<ICarResponse> =
      await Service.getCarsByCategory(id);
    return data.data;
  }
);

const CarSlice = createSlice({
  name: "competitions",
  initialState,
  reducers: {
    resetData(state) {
      return { ...state, ...initialState };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCars.rejected, (state) => {
      state.cars.status = "rejected";
    });
    builder.addCase(getCars.fulfilled, (state, { payload }) => {
      if (payload) {
        state.cars.data = payload;
        state.cars.status = "success";
      } else {
        state.cars.status = "rejected";
      }
    });
    builder.addCase(getCars.pending, (state) => {
      state.cars.status = "loading";
    });
    // ==========================
    builder.addCase(getCategories.rejected, (state) => {
      state.categories.status = "rejected";
    });
    builder.addCase(getCategories.fulfilled, (state, { payload }) => {
      if (payload) {
        state.categories.data = payload;
        state.categories.status = "success";
      } else {
        state.categories.status = "rejected";
      }
    });
    builder.addCase(getCategories.pending, (state) => {
      state.categories.status = "loading";
    });
    // ==========================
    builder.addCase(getCarByCategory.rejected, (state) => {
      state.cars.status = "rejected";
    });
    builder.addCase(getCarByCategory.fulfilled, (state, { payload }) => {
      if (payload) {
        state.cars.data = payload;
        state.cars.status = "success";
      } else {
        state.cars.status = "rejected";
      }
    });
    builder.addCase(getCarByCategory.pending, (state) => {
      state.cars.status = "loading";
    });
  },
});

export const carActions = CarSlice.actions;
export default CarSlice.reducer;
