import { AxiosResponse } from "axios";
import api from "./axios";
import { ICityResponse } from "../Interfaces/CityInterfaces";
import { IPointResponse, IPointsResponse } from "../Interfaces/PointInterfaces";
import { Paths } from "./constants";
import { ICarResponse } from "../Interfaces/CarInterface";
import { ICategoryResponse } from "../Interfaces/CategoryInterface";
import { IRateResponse } from "../Interfaces/RateInterface";

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
    return api.get<IPointsResponse>(`${Paths.point}?cityId=${cityId}`);
  }

  static async getPoint(
    pointId: string
  ): Promise<AxiosResponse<IPointResponse>> {
    return api.get<IPointResponse>(`${Paths.point}${pointId}`);
  }

  static async getCars(): Promise<AxiosResponse<ICarResponse>> {
    return api.get<ICarResponse>(Paths.car);
  }

  static async getCarsByCategory(
    id: string
  ): Promise<AxiosResponse<ICarResponse>> {
    return api.get<ICarResponse>(`${Paths.car}?categoryId=${id}`);
  }

  static async getCategories(): Promise<AxiosResponse<ICategoryResponse>> {
    return api.get<ICategoryResponse>(Paths.category);
  }

  static async getRates(): Promise<AxiosResponse<IRateResponse>> {
    return api.get<IRateResponse>(Paths.rate);
  }
}
