import React, { FC } from "react";
import classes from "./OrderForm.module.scss";
import OrderItem, { IOrderItem } from "./OrderItem/OrderItem";
import Price from "./Price/Price";

interface IProps {
  orderItems: IOrderItem[];
  startPrice: number | undefined;
  endPrice: number | undefined;
}

const OrderForm: FC<IProps> = ({ orderItems, startPrice, endPrice }) => {
  return (
    <form className={classes.form}>
      <h3 className={classes.title}>Ваш заказ:</h3>

      <div>
        {orderItems.map((item, i) => (
          <OrderItem key={i} title={item.title} info={item.info} />
        ))}

        {startPrice && endPrice && (
          <div className="order-info__price-range">
            <Price startPrice={startPrice} endPrice={endPrice} />
          </div>
        )}

        <button className={classes.button}>Выбрать модель</button>
      </div>
    </form>
  );
};

export default OrderForm;
