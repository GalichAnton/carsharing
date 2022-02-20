import React from "react";
import { Input } from "../../../UI/Inputs/Input";
import classes from "./LocationForm.module.scss";
const LocationForm = () => {
  return (
    <form className={classes.container}>
      <div className={classes.inputWrapper}>
        <label htmlFor="town">Город</label>

        <Input name="town" placeholder="Начните вводить город..." />
      </div>

      <div className={classes.inputWrapper}>
        <label htmlFor="point">Пункт выдачи</label>

        <Input name="point" placeholder="Начните вводить пункт..." />
      </div>
    </form>
  );
};

export default LocationForm;
