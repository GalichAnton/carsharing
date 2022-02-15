import bg1 from "../../assets/images/slider/bg_1.jpg";
import bg2 from "../../assets/images/slider/bg_2.jpg";
import bg3 from "../../assets/images/slider/bg_3.jpg";
import bg4 from "../../assets/images/slider/bg_4.jpg";
export interface ISlide {
  background: string;
  title: string;
  text: string;
  buttonName: string;
  buttonColor: string;
}
export const slides: ISlide[] = [
  {
    background: bg1,
    title: "Бесплатная парковка",
    text: `Оставляйте машину на платных городских парковках и разрешенных местах,
      не нарушая ПДД, а также в аэропортах.`,
    buttonName: "Подробнее",
    buttonColor: "linear-gradient(90deg, #13493F 0%, #0C7B1B 100%)",
  },
  {
    background: bg2,
    title: "Страховка",
    text: "Полная страховка страховка автомобиля",
    buttonName: "Подробнее",
    buttonColor: "linear-gradient(90deg, #132949 0%, #0C7B67 100%)",
  },
  {
    background: bg3,
    title: "Бензин",
    text: "Полный бак на любой заправке города за наш счёт",
    buttonName: "Подробнее",
    buttonColor: "linear-gradient(90deg, #493013 0%, #7B0C3B 100%)",
  },
  {
    background: bg4,
    title: "Обслуживание",
    text: "Автомобиль проходит еженедельное ТО",
    buttonName: "Подробнее",
    buttonColor: "linear-gradient(90deg, #281349 0%, #720C7B 100%)",
  },
];
