import React, { FC } from "react";
import classes from "./RadioButton.module.scss";
interface IRadioButtonProps {
  value: string;
  checked: boolean;
  handleChange: (value: string) => void;
}
const RadioButton: FC<IRadioButtonProps> = ({
  value,
  checked,
  handleChange,
}) => {
  return (
    <div className={classes.radioContainer}>
      <form className={classes.form}>
        <input
          className={classes.input}
          checked={checked}
          value={value}
          type="radio"
          onChange={() => handleChange(value)}
          name="radio-button"
        />

        <label
          onClick={() => handleChange(value)}
          htmlFor="radio-button"
          className={classes.label}
        >
          {value}
        </label>
      </form>
    </div>
  );
};

export default RadioButton;
