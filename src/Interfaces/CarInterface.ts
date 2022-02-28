export interface ICar {
  description: string;
  priceMin: number;
  priceMax: number;
  name: string;
  number: string;
  categoryId: {
    name: string;
    description: string;
    id: string;
  };
  thumbnail: {
    path: string;
    size: number;
    originalname: string;
    mimetype: string;
  };
  tank: number;
  colors: string[];
  id: string;
}

export interface ICarResponse {
  data: ICar[];
}
