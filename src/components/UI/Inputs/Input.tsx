import React, { FC, useState } from "react";
import CloseBtn from "./CloseBtn";
import classes from "./Input.module.scss";
import cn from "classnames";
interface IProps {
  placeholder: string;
  name: string;
  date?: boolean;
  onChange: (str: string) => void;
  value?: string;
}

export const Input: FC<IProps> = (props) => {
  const { placeholder, name, date, value, onChange } = props;
  const [type, setType] = useState("text");
  const handleFocus = () => {
    if (date) {
      setType("datetime-local");
    }
  };

  return (
    <div className={classes.container}>
      <input
        type={type}
        onFocus={handleFocus}
        name={name}
        className={classes.input}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.currentTarget.value)}
      />

      <span
        className={cn(classes.close, {
          [classes.close__date]: type === "datetime-local",
        })}
        onClick={() => onChange("")}
      >
        {value !== "" && CloseBtn}
      </span>
    </div>
  );
};
