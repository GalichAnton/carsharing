import React, { FC } from "react";
import classes from "./Price.module.scss";
export interface IPrice {
  startPrice?: number;
  endPrice?: number;
  totalPrice?: number;
}
const Price: FC<IPrice> = ({ startPrice, endPrice, totalPrice }) => {
  return (
    <div className={classes.price}>
      <h5 className={classes.title}>Цена:</h5>

      {startPrice && endPrice ? (
        <div className={classes.range}>
          <h3 className={classes.title}>от</h3>

          <span className={classes.number}>{startPrice}</span>

          <h3 className={classes.title}>до</h3>

          <span className={classes.number}>{endPrice} </span>
        </div>
      ) : (
        <h3 className={classes.number}>{totalPrice}</h3>
      )}
    </div>
  );
};

export default Price;
