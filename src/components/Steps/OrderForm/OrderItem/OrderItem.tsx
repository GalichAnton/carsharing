import React, { FC } from "react";
import classes from "./OrderItem.module.scss";
export interface IOrderItem {
  title: string;
  info: string | undefined;
}

const OrderItem: FC<IOrderItem> = ({ title, info }) => {
  return (
    <div className={classes.container}>
      <h3 className={classes.title}>{title}</h3>
      <span className={classes.dots}></span>
      <span className={classes.info}>{info}</span>
    </div>
  );
};

export default OrderItem;
