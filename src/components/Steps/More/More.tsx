import React, { useState } from "react";
import classes from "./More.module.scss";
import DateForm from "./dateForm/DateForm";
import { ICheckbox } from "../../../Interfaces/CheckBoxInterface";
import RadioGroup from "../../UI/Inputs/RadioGroup/RadioGroup";
import CheckBoxGroup from "../../UI/Inputs/CheckBoxGroup/CheckBoxGroup";

const radioColor = ["Любой", "Красный", "Голубой"];
const radioTax = ["Поминутно, 7Р/мин", "На сутки, 1999Р/сутки"];
const checkboxGroup: ICheckbox[] = [
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
const More = () => {
  const [selectedColor, setSelectedColor] = useState<string>("Любой");
  const [selectedTax, setSelectedTax] = useState<string>(
    "На сутки, 1999Р/сутки"
  );
  const [checkedItems, setCheckedItems] = useState<ICheckbox[]>(checkboxGroup);
  const handleColorChange = (value: string) => {
    setSelectedColor(value);
  };
  const handleTaxChange = (value: string) => {
    setSelectedTax(value);
  };
  const handleCheckboxChange = (checkbox: ICheckbox) => {
    const newItems = [...checkedItems];
    newItems[checkbox.id] = {
      ...checkbox,
      isChecked: !newItems[checkbox.id].isChecked,
    };
    setCheckedItems(newItems);
  };
  return (
    <section className={classes.more}>
      <h4 className={classes.title}>Цвет</h4>
      <div className={classes.radioContainer}>
        <RadioGroup
          buttons={radioColor}
          selected={selectedColor}
          handleChange={handleColorChange}
        />
      </div>

      <DateForm />
      <div className={classes.radioContainer}>
        <RadioGroup
          direction={"vertical"}
          buttons={radioTax}
          selected={selectedTax}
          handleChange={handleTaxChange}
        />
      </div>
      <h4 className={classes.title}>Доп услуги</h4>
      <CheckBoxGroup
        checkboxes={checkedItems}
        handleChange={handleCheckboxChange}
      />
    </section>
  );
};

export default More;
