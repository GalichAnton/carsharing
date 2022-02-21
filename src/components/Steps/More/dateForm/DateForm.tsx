import React from "react";
import { Input } from "../../../UI/Inputs/Input";
import classes from "./DateForm.module.scss";
const DateForm = () => {
  return (
    <form className={classes.container}>
      <h3 className={classes.title}>Даты аренды</h3>
      <div className={classes.inputWrapper}>
        <label className={classes.label} htmlFor="from">
          С
        </label>

        <Input name="from" placeholder="Введите дату и время" />
      </div>

      <div className={classes.inputWrapper}>
        <label className={classes.label} htmlFor="to">
          По
        </label>

        <Input name="to" placeholder="Введите дату и время" />
      </div>
    </form>
  );
};

export default DateForm;
