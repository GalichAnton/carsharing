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
  geoData: {
    status: "idle" | "loading" | "success" | "rejected";
    city: string[];
    points: string[];
    selectedPoint: string[];
  };
}
const initialState: IData = {
  cities: {
    data: [],
    status: "idle",
  },
  points: {
    data: [],
    status: "idle",
  },
  geoData: {
    status: "idle",
    city: [],
    points: [],
    selectedPoint: [],
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

export const getCityGeoData = createAsyncThunk(
  "geoData/getGeoData",
  async (city: string, thunkAPI) => {
    const cityPoint = await Service.getGeoData(city);
    return thunkAPI.dispatch(dataActions.setCityPoint(cityPoint));
  }
);

export const getPointsGeoData = createAsyncThunk(
  "geoData/getGeoData",
  async (city: string, thunkAPI) => {
    const points = await Service.getGeoData(city);
    return thunkAPI.dispatch(dataActions.setPoints(points));
  }
);

export const getSelectedPointGeoData = createAsyncThunk(
  "geoData/getGeoData",
  async (city: string, thunkAPI) => {
    const point = await Service.getGeoData(city);
    return thunkAPI.dispatch(dataActions.setSelectedPoint(point));
  }
);

const dataSlice = createSlice({
  name: "competitions",
  initialState,
  reducers: {
    setCityPoint(state, action) {
      state.geoData.city =
        action.payload.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos
          .split(" ")
          .reverse();
    },

    setPoints(state, action) {
      state.geoData.points = [
        ...state.geoData.points,
        action.payload.response.GeoObjectCollection,
      ];
    },

    setSelectedPoint(state, action) {
      state.geoData.selectedPoint =
        action.payload.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos
          .split(" ")
          .reverse();
    },
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
  },
});

export const dataActions = dataSlice.actions;
export default dataSlice.reducer;
