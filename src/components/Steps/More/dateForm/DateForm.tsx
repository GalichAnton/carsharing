import React from "react";
import { Input } from "../../../UI/Inputs/Input";
import classes from "./DateForm.module.scss";
const DateForm = () => {
  return (
    <form className={classes.container}>
      <h3 className={classes.title}>Даты аренды</h3>
      <div className={classes.inputWrapper}>
        <label htmlFor="from">С</label>

        <Input type={"datetime-local"} name="from" placeholder="" />
      </div>

      <div className={classes.inputWrapper}>
        <label htmlFor="to">По</label>

        <Input type={"datetime-local"} name="to" placeholder="" />
      </div>
    </form>
  );
};

export default DateForm;
