import React, { FC } from "react";
import classes from "./RadioGroup.module.scss";
import RadioButton from "./RadioButton/RadioButton";
import cn from "classnames";
interface IRadioGroupProps {
  buttons: string[];
  selected: string;
  handleChange: (value: string) => void;
  direction?: "vertical" | "horizontal";
}
const RadioGroup: FC<IRadioGroupProps> = ({
  buttons,
  selected,
  handleChange,
  direction = "horizontal",
}) => {
  return (
    <form
      className={cn(classes.form, {
        [classes.form__vertical]: direction === "vertical",
      })}
    >
      {buttons.map((button, i) => (
        <div
          key={i}
          className={cn(classes.radioButton, {
            [classes.radioButton__vertical]: direction === "vertical",
          })}
        >
          <RadioButton
            value={button}
            checked={selected === button}
            handleChange={handleChange}
          />
        </div>
      ))}
    </form>
  );
};

export default RadioGroup;
