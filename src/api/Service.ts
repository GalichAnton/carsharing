import { AxiosResponse } from "axios";
import api from "./axios";
import { ICityResponse } from "../Interfaces/CityInterfaces";
import { IPointResponse, IPointsResponse } from "../Interfaces/PointInterfaces";
import { ICarResponse } from "../Interfaces/CarInterface";
import { ICategoryResponse } from "../Interfaces/CategoryInterface";
import { IRateResponse } from "../Interfaces/RateInterface";
import { ApiPaths } from "../Paths/ApiPaths";
import { IOrder, IOrderResponse } from "../Interfaces/OrderInterface";

export default class Service {
  static async getCity(): Promise<AxiosResponse<ICityResponse>> {
    return api.get<ICityResponse>(ApiPaths.city);
  }

  static async getAllPoints(): Promise<AxiosResponse<IPointsResponse>> {
    return api.get<IPointsResponse>(ApiPaths.point);
  }

  static async getPoints(
    cityId: string
  ): Promise<AxiosResponse<IPointsResponse>> {
    return api.get<IPointsResponse>(`${ApiPaths.point}?cityId=${cityId}`);
  }

  static async getPoint(
    pointId: string
  ): Promise<AxiosResponse<IPointResponse>> {
    return api.get<IPointResponse>(`${ApiPaths.point}${pointId}`);
  }

  static async getCars(): Promise<AxiosResponse<ICarResponse>> {
    return api.get<ICarResponse>(ApiPaths.car);
  }

  static async getCarsByCategory(
    id: string
  ): Promise<AxiosResponse<ICarResponse>> {
    return api.get<ICarResponse>(`${ApiPaths.car}?categoryId=${id}`);
  }

  static async getCategories(): Promise<AxiosResponse<ICategoryResponse>> {
    return api.get<ICategoryResponse>(ApiPaths.category);
  }

  static async getRates(): Promise<AxiosResponse<IRateResponse>> {
    return api.get<IRateResponse>(ApiPaths.rate);
  }

  static async postOrder(order: IOrder) {
    return api.post(ApiPaths.order, { ...order });
  }

  static async getOrderById(
    orderId: string
  ): Promise<AxiosResponse<IOrderResponse>> {
    return api.get<IOrderResponse>(`${ApiPaths.order}${orderId}`);
  }
}
