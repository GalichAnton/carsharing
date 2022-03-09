import { ICity, ICityResponse } from "../../Interfaces/CityInterfaces";
import { IPoint, IPointsResponse } from "../../Interfaces/PointInterfaces";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import Service from "../../api/Service";

interface IData {
  cities: {
    data: ICity[];
    status: "idle" | "loading" | "success" | "rejected";
  };
  points: {
    data: IPoint[];
    status: "idle" | "loading" | "success" | "rejected";
  };
}
const initialState: IData = {
  cities: {
    data: [],
    status: "idle",
  },
  points: {
    status: "idle",
    data: [],
  },
};

export const getCities = createAsyncThunk("cities/getCities", async () => {
  const { data }: AxiosResponse<ICityResponse> = await Service.getCity();
  return data.data;
});

export const getPoints = createAsyncThunk(
  "points/getPoints",
  async (city: string) => {
    const { data }: AxiosResponse<IPointsResponse> = await Service.getPoints(
      city
    );
    return data.data;
  }
);

export const getAllPoints = createAsyncThunk(
  "points/getAllPoints",
  async () => {
    const { data }: AxiosResponse<IPointsResponse> =
      await Service.getAllPoints();
    return data.data;
  }
);

const locationSlice = createSlice({
  name: "competitions",
  initialState,
  reducers: {
    resetData(state) {
      return { ...state, ...initialState };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCities.rejected, (state) => {
      state.cities.status = "rejected";
    });
    builder.addCase(getCities.fulfilled, (state, { payload }) => {
      if (payload) {
        state.cities.data = payload;
        state.cities.status = "success";
      } else {
        state.cities.status = "rejected";
      }
    });
    builder.addCase(getCities.pending, (state) => {
      state.cities.status = "loading";
    });
    // ==========================
    builder.addCase(getPoints.rejected, (state) => {
      state.points.status = "rejected";
    });
    builder.addCase(getPoints.fulfilled, (state, { payload }) => {
      if (payload) {
        state.points.data = payload;
        state.points.status = "success";
      } else {
        state.points.status = "rejected";
      }
    });
    builder.addCase(getPoints.pending, (state) => {
      state.points.status = "loading";
    });
    // ==========================
    builder.addCase(getAllPoints.rejected, (state) => {
      state.points.status = "rejected";
    });
    builder.addCase(getAllPoints.fulfilled, (state, { payload }) => {
      if (payload) {
        state.points.data = payload;
        state.points.status = "success";
      } else {
        state.points.status = "rejected";
      }
    });
    builder.addCase(getAllPoints.pending, (state) => {
      state.points.status = "loading";
    });
  },
});

export const locationActions = locationSlice.actions;
export default locationSlice.reducer;
