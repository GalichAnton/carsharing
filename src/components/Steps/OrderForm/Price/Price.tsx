import React, { FC } from "react";
import classes from "./Price.module.scss";
export interface IPrice {
  totalPrice: number;
}
const Price: FC<IPrice> = ({ totalPrice }) => {
  return (
    <div className={classes.price}>
      <h5 className={classes.title}>Цена:</h5>

      <h3 className={classes.number}>{totalPrice}</h3>
    </div>
  );
};

export default Price;
