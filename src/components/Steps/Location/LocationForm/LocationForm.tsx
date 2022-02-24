import React, { useEffect } from "react";
import classes from "./LocationForm.module.scss";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../../hooks/redux/redux-hooks";
import { validActions } from "../../../../store/Slices/ValidSlice";
const LocationForm = () => {
  const dispatch = useDispatch();
  const { city, point } = useAppSelector((state) => state.form);

  useEffect(() => {
    dispatch(validActions.setLocationStep(Boolean(city && point)));
    dispatch(validActions.setModelStep(Boolean(city && point)));
  }, [city, point]);
  return (
    <form className={classes.container}>
      <div className={classes.inputWrapper}></div>
    </form>
  );
};

export default LocationForm;
