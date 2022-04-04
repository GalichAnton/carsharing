export interface ICategory {
  name: string;
  description: string;
  id: string;
}

export interface ICategoryResponse {
  data: ICategory[];
}
