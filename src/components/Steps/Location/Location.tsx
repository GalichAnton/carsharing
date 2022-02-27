import React from "react";
import LocationForm from "./LocationForm/LocationForm";
import classes from "./Location.module.scss";
import CustomMap from "./Map/Map";
const Location = () => {
  return (
    <section className={classes.location}>
      <LocationForm />
      <h3 className={classes.title}>Выбрать на карте:</h3>

      <CustomMap />
    </section>
  );
};

export default Location;
