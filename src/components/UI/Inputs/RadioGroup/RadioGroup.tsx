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
        <RadioButton
          key={i}
          value={button}
          checked={selected === button}
          handleChange={handleChange}
        />
      ))}
    </form>
  );
};

export default RadioGroup;