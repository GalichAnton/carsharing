import React, { FC, useState } from "react";
import CloseBtn from "./CloseBtn";
import classes from "./Input.module.scss";
interface IProps {
  placeholder: string;
  name: string;
}

export const Input: FC<IProps> = ({ placeholder, name }) => {
  const [value, setValue] = useState("");

  return (
    <div className={classes.container}>
      <input
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
