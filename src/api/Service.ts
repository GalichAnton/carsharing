import { AxiosResponse } from "axios";
import api from "./axios";
import { ICityResponse } from "../Interfaces/CityInterfaces";
import { IPointResponse, IPointsResponse } from "../Interfaces/PointInterfaces";
import { yandexKey, yandexUrl } from "./constants";

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

  static async getGeoData(city: string) {
    return api.get(
      `${yandexUrl}/?format=json&apikey=${yandexKey}&geocode=${city}`
    );
  }
}
