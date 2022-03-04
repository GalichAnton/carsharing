import React, { useEffect } from "react";
import classes from "./OrderForm.module.scss";
import OrderItem from "./OrderItem/OrderItem";
import Price from "./Price/Price";
import Button from "../../UI/Button/Button";
import { useAppSelector } from "../../../hooks/redux/redux-hooks";
import { useLocation, useParams } from "react-router-dom";
import useButtonState from "../../../hooks/useButtonState";
import usePrice from "../../../hooks/usePrice";

const OrderForm = () => {
  const location = useLocation();
  const { setButtonDisable, setButtonTitle, setHandleOnclick } =
    useButtonState();
  const orderItems = useAppSelector((state) => state.order.orderItems);
  const totalPrice = useAppSelector((state) => state.form.price);
  const { calcPrice } = usePrice();
  const { orderId } = useParams();
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
          background={
            location.pathname === `/order/${orderId}`
              ? "linear-gradient(90deg, #493013 0%, #7B0C3B 100%)"
              : ""
          }
          onClick={setHandleOnclick(location.pathname)}
        />
      </div>
    </form>
  );
};

export default OrderForm;
