import React from "react";
import LocationForm from "./LocationForm/LocationForm";
import classes from "./Location.module.scss";
import OrderForm from "../OrderForm/OrderForm";
import { IOrderItem } from "../OrderForm/OrderItem/OrderItem";
import Map from "./Map/Map";
const Location = () => {
  const orderItem: IOrderItem[] = [{ title: "Пункт", info: "Санкт-Петербург" }];
  return (
    <section className={classes.location}>
      <div className={classes.container}>
        <LocationForm />
        <h3 className={classes.title}>Выбрать на карте:</h3>
        <Map />
      </div>
      <OrderForm orderItems={orderItem} startPrice={5000} endPrice={10000} />
    </section>
  );
};

export default Location;
