import React, { FC } from "react";
import classes from "./RadioButton.module.scss";
import { ICategory } from "../../../../../Interfaces/CategoryInterface";
interface IRadioButtonProps {
  value: any;
  checked: boolean;
  handleChange: (category: ICategory) => void;
  name: string;
}
const RadioButton: FC<IRadioButtonProps> = ({
  value,
  checked,
  handleChange,
  name,
}) => {
  const setLabelText = (name: string) => {
    switch (name) {
      case "color":
        return value;
      case "rate":
        return value.rateTypeId.name;
      default:
        return value.name;
    }
  };
  return (
    <div className={classes.radioContainer}>
      <div className={classes.form}>
        <input
          className={classes.input}
          checked={checked}
          value={value.name}
          type="radio"
          onChange={() => handleChange(value)}
          name="radio-button"
        />

        <label
          onClick={() => handleChange(value)}
          htmlFor="radio-button"
          className={classes.label}
        >
          {setLabelText(name)}
        </label>
      </div>
    </div>
  );
};

export default RadioButton;
