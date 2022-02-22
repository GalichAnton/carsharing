export interface ICrumbItems {
  name: string;
  link: string;
}
export const crumbItems: ICrumbItems[] = [
  { name: "Местоположение", link: "/order/location" },
  { name: "Модель", link: "/order/model" },
  { name: "Дополнительно", link: "/order/more" },
  { name: "Итого", link: "/order/total" },
];
