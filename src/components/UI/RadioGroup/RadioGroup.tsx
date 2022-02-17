import React, { FC } from "react";
import classes from "./RadioGroup.module.scss";
import RadioButton from "../../Input/RadioButton/RadioButton";
interface IRadioGroupProps {
  buttons: string[];
  selected: string;
  handleChange: (value: string) => void;
}
const RadioGroup: FC<IRadioGroupProps> = ({
  buttons,
  selected,
  handleChange,
}) => {
  return (
    <form className={classes.form}>
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
