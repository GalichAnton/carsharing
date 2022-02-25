import { AxiosResponse } from "axios";
import api from "./axios";
import { ICityResponse } from "../Interfaces/CityInterfaces";
import { IPointResponse, IPointsResponse } from "../Interfaces/PointInterfaces";

export default class Service {
  static async getCity(): Promise<AxiosResponse<ICityResponse>> {
    return api.get<ICityResponse>(`/db/city`);
  }

  static async getPoints(
    cityId: string
  ): Promise<AxiosResponse<IPointsResponse>> {
    return api.get<IPointsResponse>(`/db/point?cityId=${cityId}`);
  }

  static async getPoint(
    pointId: string
  ): Promise<AxiosResponse<IPointResponse>> {
    return api.get<IPointResponse>(`/db/point/${pointId}`);
  }
}
