import React, { useEffect } from "react";
import classes from "./LocationForm.module.scss";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../../hooks/redux/redux-hooks";
import { validActions } from "../../../../store/Slices/ValidSlice";
import { getCities, getPoints } from "../../../../store/Slices/LocationSlice";
import useAutocomplete from "../../../../hooks/useAutocomplete";
import Autocomplete from "../../../Autocomplete/Autocomplete";
import { RootState } from "../../../../store/store";
import { IOption } from "../../../../Interfaces/OptionInterface";
const getOptionsByKey =
  (key: string) =>
  (item: Record<string, any>): IOption => ({
    id: item.id,
    value: item?.[key],
    label: item?.[key],
  });

const mapState = (state: RootState) => ({
  cities: state.data.cities,
  points: state.data.points,
  city: state.form.city,
  point: state.form.point,
});

const LocationForm = () => {
  const dispatch = useDispatch();
  const { onCityChange, onPointChange, onReset } = useAutocomplete();
  const { cities, points, city, point } = useAppSelector(mapState);
  const { name: cityName } = city;
  const { name: pointName } = point;
  const { data: dataCities = [], status: statusCities } = cities;
  const { data: dataPoints = [], status: statusPoints } = points;
  const cityOptions = dataCities.map(getOptionsByKey("name"));
  const pointOptions = dataPoints.map(getOptionsByKey("address"));

  useEffect(() => {
    if (cities.status === "idle") {
      dispatch(getCities());
    }
  }, [statusCities]);

  useEffect(() => {
    dispatch(validActions.setLocationStep(Boolean(city.name && point.name)));
    dispatch(validActions.setModelStep(Boolean(city.name && point.name)));
  }, [city, point]);

  useEffect(() => {
    if (city.name && points.status === "idle") {
      dispatch(getPoints(city.id));
    }
  }, [cityName, statusPoints]);

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
          valueState={pointName}
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
