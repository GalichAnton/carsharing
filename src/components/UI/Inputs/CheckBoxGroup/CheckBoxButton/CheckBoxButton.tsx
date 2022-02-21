import React, { FC } from "react";
import { ICheckbox } from "../../../../../Interfaces/CheckBoxInterface";
import classes from "./CheckBoxButton.module.scss";
interface ICheckBoxButtonProps {
  checkbox: ICheckbox;
  onChange: (checkbox: ICheckbox) => void;
}
const CheckBoxButton: FC<ICheckBoxButtonProps> = ({ checkbox, onChange }) => {
  return (
    <div className={classes.container}>
      <input
        type="checkbox"
        className={classes.checkbox}
        name={checkbox.title}
        checked={checkbox.isChecked}
        onChange={() => onChange(checkbox)}
      />

      <label
        key={checkbox.title}
        htmlFor={checkbox.title}
        className={classes.label}
        onClick={() => onChange(checkbox)}
      >
        {checkbox.title}
      </label>
    </div>
  );
};

export default CheckBoxButton;
