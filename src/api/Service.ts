import { AxiosResponse } from "axios";
import api from "./axios";
import { ICityResponse } from "../Interfaces/CityInterfaces";
import { IPointResponse, IPointsResponse } from "../Interfaces/PointInterfaces";
import { Paths } from "./constants";

export default class Service {
  static async getCity(): Promise<AxiosResponse<ICityResponse>> {
    return api.get<ICityResponse>(Paths.city);
  }

  static async getAllPoints(): Promise<AxiosResponse<IPointsResponse>> {
    return api.get<IPointsResponse>(Paths.point);
  }

  static async getPoints(
    cityId: string
  ): Promise<AxiosResponse<IPointsResponse>> {
    return api.get<IPointsResponse>(`${Paths.points}${cityId}`);
  }

  static async getPoint(
    pointId: string
  ): Promise<AxiosResponse<IPointResponse>> {
    return api.get<IPointResponse>(`${Paths.point}${pointId}`);
  }
}
