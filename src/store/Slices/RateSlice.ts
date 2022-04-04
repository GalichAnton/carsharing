import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import Service from "../../api/Service";
import { IRate, IRateResponse } from "../../Interfaces/RateInterface";

interface IRateState {
  rates: {
    data: IRate[];
    status: "idle" | "loading" | "success" | "rejected";
  };
}
const initialState: IRateState = {
  rates: {
    data: [],
    status: "idle",
  },
};

export const getRates = createAsyncThunk("rates/getRates", async () => {
  const { data }: AxiosResponse<IRateResponse> = await Service.getRates();
  return data.data;
});

const RateSlice = createSlice({
  name: "competitions",
  initialState,
  reducers: {
    resetData(state) {
      return { ...state, ...initialState };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getRates.rejected, (state) => {
      state.rates.status = "rejected";
    });
    builder.addCase(getRates.fulfilled, (state, { payload }) => {
      if (payload) {
        state.rates.data = payload;
        state.rates.status = "success";
      } else {
        state.rates.status = "rejected";
      }
    });
    builder.addCase(getRates.pending, (state) => {
      state.rates.status = "loading";
    });
  },
});

export const rateActions = RateSlice.actions;
export default RateSlice.reducer;
