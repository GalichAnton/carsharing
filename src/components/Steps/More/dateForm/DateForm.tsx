import React from "react";
import { Input } from "../../../UI/Inputs/Input";
import classes from "./DateForm.module.scss";
const DateForm = () => {
  return (
    <form className={classes.container}>
      <h3 className={classes.title}>Даты аренды</h3>
      <div className={classes.inputWrapper}>
        <label htmlFor="from">С</label>

        <Input onFocus={true} name="from" placeholder="Введите дату и время" />
      </div>

      <div className={classes.inputWrapper}>
        <label htmlFor="to">По</label>

        <Input onFocus={true} name="to" placeholder="Введите дату и время" />
      </div>
    </form>
  );
};

export default DateForm;
