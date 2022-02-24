import React, { useEffect } from "react";
import { Input } from "../../../UI/Inputs/Input";
import classes from "./LocationForm.module.scss";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../../hooks/redux/redux-hooks";
import { formActions } from "../../../../store/Slices/FormSlice";
import { validActions } from "../../../../store/Slices/ValidSlice";
const LocationForm = () => {
  const dispatch = useDispatch();
  const { city, point } = useAppSelector((state) => state.form);
  const handleCityChange = (str: string) => {
    dispatch(formActions.setCity(str));
  };
  const handlePointChange = (str: string) => {
    dispatch(formActions.setPoint(str));
  };
  useEffect(() => {
    dispatch(validActions.setLocationStep(Boolean(city && point)));
    dispatch(validActions.setModelStep(Boolean(city && point)));
  }, [city, point]);
  return (
    <form className={classes.container}>
      <div className={classes.inputWrapper}>
        <label htmlFor="town">Город</label>

        <Input
          value={city}
          onChange={handleCityChange}
          name="town"
          placeholder="Начните вводить город..."
        />
      </div>

      <div className={classes.inputWrapper}>
        <label htmlFor="point">Пункт выдачи</label>

        <Input
          value={point}
          onChange={handlePointChange}
          name="point"
          placeholder="Начните вводить пункт..."
        />
      </div>
    </form>
  );
};

export default LocationForm;
