import React, { useEffect } from "react";
import classes from "./OrderForm.module.scss";
import OrderItem from "./OrderItem/OrderItem";
import Price from "./Price/Price";
import Button from "../../UI/Button/Button";
import { useAppSelector } from "../../../hooks/redux/redux-hooks";
import { useLocation, useParams } from "react-router-dom";
import useButtonState from "../../../hooks/useButtonState";
import usePrice from "../../../hooks/usePrice";
import { RootState } from "../../../store/store";
const mapState = (state: RootState) => ({
  orderItems: state.order.orderItems,
  totalPrice: state.form.price,
  orderPrice: state.order.order.data.price,
  orderStatus: state.order.order.data.orderStatusId,
});
const OrderForm = () => {
  const location = useLocation();
  const { setButtonDisable, setButtonTitle, setHandleOnclick } =
    useButtonState();
  const { orderItems, totalPrice, orderPrice, orderStatus } =
    useAppSelector(mapState);

  const setPrice = () => {
    if (orderPrice) return orderPrice;
    return totalPrice;
  };
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
          <Price totalPrice={setPrice()} />
        </div>

        {orderStatus?.name !== "Отмененые" && (
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
        )}
      </div>
    </form>
  );
};

export default OrderForm;
