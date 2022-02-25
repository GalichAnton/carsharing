import React, { useEffect } from "react";
import classes from "./LocationForm.module.scss";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../../hooks/redux/redux-hooks";
import { validActions } from "../../../../store/Slices/ValidSlice";
import { getCities, getPoints } from "../../../../store/Slices/dataSlice";
import useAutocomplete from "../../../../hooks/useAutocomplete";
import Autocomplete from "../../../Autocomplete/Autocomplete";

const LocationForm = () => {
  const dispatch = useDispatch();
  const { onCityChange, onPointChange, onReset } = useAutocomplete();
  const { cities, points } = useAppSelector((state) => state.data);
  const { city, point } = useAppSelector((state) => state.form);
  const cityOptions = cities.data
    ? cities.data.map((item) => ({
        value: item.name,
        label: item.name,
        id: item.id,
      }))
    : [];
  const pointOptions = points.data
    ? points.data.map((item) => ({
        value: item.address,
        label: item.address,
        id: item.id,
      }))
    : [];

  useEffect(() => {
    if (cities.status === "idle") {
      dispatch(getCities());
    }
  }, [cities.status]);

  useEffect(() => {
    dispatch(validActions.setLocationStep(Boolean(city.name && point.name)));
    dispatch(validActions.setModelStep(Boolean(city.name && point.name)));
  }, [city, point]);

  useEffect(() => {
    if (city.name && points.status === "idle") {
      dispatch(getPoints(city.id));
    }
  }, [city.name, points.status]);

  return (
    <form className={classes.container}>
      <div className={classes.inputWrapper}>
        <Autocomplete
          name="city"
          onChange={onCityChange}
          options={cityOptions}
          valueState={city.name}
          placeholder={"Начните вводить город"}
          onReset={onReset}
          labelText="Город"
        />
        <Autocomplete
          name="point"
          onChange={onPointChange}
          options={pointOptions}
          valueState={point.name}
          placeholder={
            points.data.length === 0
              ? "В этом городе нет пунктов"
              : "Начните вводить пункт"
          }
          onReset={onReset}
          isDisabled={points.data.length === 0}
          labelText="Пункт выдачи"
        />
      </div>
    </form>
  );
};

export default LocationForm;
