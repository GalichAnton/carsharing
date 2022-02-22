export interface ICrumbItems {
  name: string;
  link: string;
  step: string;
}
export const crumbItems: ICrumbItems[] = [
  { name: "Местоположение", link: "/order/location", step: "locationStep" },
  { name: "Модель", link: "/order/model", step: "modelStep" },
  { name: "Дополнительно", link: "/order/more", step: "moreStep" },
  { name: "Итого", link: "/order/total", step: "totalStep" },
];
