import React, { FC, FocusEvent, useState } from "react";
import CloseBtn from "./CloseBtn";
import classes from "./Input.module.scss";
interface IProps {
  placeholder: string;
  name: string;
  onFocus?: boolean;
}

export const Input: FC<IProps> = (props) => {
  const [value, setValue] = useState("");
  const { placeholder, name, onFocus } = props;
  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    if (onFocus) {
      e.target.type = "datetime-local";
    }
  };
  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    e.target.type = "text";
  };
  return (
    <div className={classes.container}>
      <input
        type={"text"}
        onFocus={(e) => handleFocus(e)}
        onBlur={(e) => handleBlur(e)}
        name={name}
        className={classes.input}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
      />

      <span className={classes.close} onClick={() => setValue("")}>
        {value !== "" && CloseBtn}
      </span>
    </div>
  );
};
