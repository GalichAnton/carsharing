import React, { FC } from "react";
import classes from "./RadioGroup.module.scss";
import RadioButton from "./RadioButton/RadioButton";
import cn from "classnames";
interface IRadioGroupProps {
  buttons: Array<any>;
  selected: any;
  handleChange: (value: any) => void;
  direction?: "vertical" | "horizontal";
  name: string;
}
const RadioGroup: FC<IRadioGroupProps> = ({
  buttons,
  selected,
  handleChange,
  name,
  direction = "horizontal",
}) => {
  const setSelected = (button: any) => {
    if (name === "rate" && selected.rateTypeId) {
      return selected.rateTypeId.name === button.rateTypeId.name;
    } else if (name === "color") {
      return selected === button;
    } else if (name === "category") {
      return selected.name === button.name;
    }
    return false;
  };

  return (
    <form
      className={cn(classes.form, {
        [classes.form__vertical]: direction === "vertical",
      })}
    >
      {buttons &&
        buttons.map((button, i) => (
          <div
            key={i}
            className={cn(classes.radioButton, {
              [classes.radioButton__vertical]: direction === "vertical",
            })}
          >
            <RadioButton
              name={name}
              value={button}
              checked={setSelected(button)}
              handleChange={handleChange}
            />
          </div>
        ))}
    </form>
  );
};

export default RadioGroup;
