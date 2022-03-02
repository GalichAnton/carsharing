import React, { FC, useEffect } from "react";
import classes from "./OrderForm.module.scss";
import OrderItem from "./OrderItem/OrderItem";
import Price from "./Price/Price";
import Button from "../../UI/Button/Button";
import { IOrderItem } from "../../../Interfaces/OrderInterface";
import { useAppSelector } from "../../../hooks/redux/redux-hooks";
import { useLocation } from "react-router-dom";
import useButtonState from "../../../hooks/useButtonState";
import usePrice from "../../../hooks/usePrice";
interface IOrderFormProps {
  orderItems: IOrderItem[];
}

const OrderForm: FC<IOrderFormProps> = () => {
  const location = useLocation();
  const { setButtonDisable, setButtonTitle, setHandleOnclick } =
    useButtonState();
  const orderItems = useAppSelector((state) => state.order.orderItems);
  const totalPrice = useAppSelector((state) => state.form.price);
  const { calcPrice } = usePrice();
  useEffect(() => {
    calcPrice();
  }, [orderItems]);
  return (
    <form className={classes.form}>
      <h3 className={classes.title}>Ваш заказ:</h3>

      <div>
        {orderItems.map(
          (item, i) =>
            item.info && (
              <OrderItem key={i} title={item.title} info={item.info} />
            )
        )}

        <div>
          <Price totalPrice={totalPrice} />
        </div>

        <Button
          disabled={setButtonDisable(location.pathname)}
          title={setButtonTitle(location.pathname)}
          className={classes.button}
          onClick={setHandleOnclick(location.pathname)}
        />
      </div>
    </form>
  );
};

export default OrderForm;
