import { ICheckbox } from "../../../../Interfaces/CheckBoxInterface";

export const radioColor = ["Любой", "Красный", "Голубой"];
export const radioTax = ["Поминутно, 7Р/мин", "На сутки, 1999Р/сутки"];
export const checkboxGroup: ICheckbox[] = [
  { title: "Полный бак, 500р", value: "Полный бак", id: 0, isChecked: false },
  {
    title: "Детское кресло, 200р",
    value: "Детское кресло",
    id: 1,
    isChecked: true,
  },
  {
    title: "Правый руль, 1600р",
    value: "Правый руль",
    id: 2,
    isChecked: false,
  },
];
