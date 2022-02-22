import React, { FC, useState } from "react";
import CloseBtn from "./CloseBtn";
import classes from "./Input.module.scss";
import cn from "classnames";
interface IProps {
  placeholder: string;
  name: string;
  date?: boolean;
}

export const Input: FC<IProps> = (props) => {
  const { placeholder, name, date } = props;
  const [value, setValue] = useState("");
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
        onChange={(e) => setValue(e.currentTarget.value)}
      />

      <span
        className={cn(classes.close, {
          [classes.close__date]: type === "datetime-local",
        })}
        onClick={() => setValue("")}
      >
        {value !== "" && CloseBtn}
      </span>
    </div>
  );
};
