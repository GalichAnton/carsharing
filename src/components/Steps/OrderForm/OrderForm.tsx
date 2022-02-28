import React, { FC } from "react";
import classes from "./OrderForm.module.scss";
import OrderItem from "./OrderItem/OrderItem";
import Price from "./Price/Price";
import Button from "../../UI/Button/Button";
import { useDispatch } from "react-redux";
import { modalActions } from "../../../store/Slices/ModalSlice";
import { IOrderItem } from "../../../Interfaces/OrderInterface";
import { useAppSelector } from "../../../hooks/redux/redux-hooks";
import { useLocation, useNavigate } from "react-router-dom";

interface IProps {
  orderItems: IOrderItem[];
  startPrice: number | undefined;
  endPrice: number | undefined;
}

const OrderForm: FC<IProps> = ({ startPrice, endPrice }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const orderItems = useAppSelector((state) => state.order.orderItems);
  const { locationStep, modelStep, moreStep, totalStep } = useAppSelector(
    (state) => state.valid
  );
  const handleOpenOrderModal = () => {
    dispatch(modalActions.setOpenModal(true));
  };
  const setButtonTitle = (location: string) => {
    switch (location) {
      case "/order/location":
        return "Выбрать модель";
      case "/order/model":
        return "Дополнительно";
      case "/order/more":
        return "Итого";
      case "/order/total":
        return "Заказать";
      default:
        return "Отменить";
    }
  };
  const setButtonDisable = (location: string) => {
    switch (location) {
      case "/order/location":
        return !locationStep;
      case "/order/model":
        return !modelStep;
      case "/order/more":
        return !moreStep;
      case "/order/total":
        return !totalStep;
      default:
        return true;
    }
  };
  const setHandleOnclick = (location: string) => {
    switch (location) {
      case "/order/location":
        return () => navigate("/order/model");
      case "/order/model":
        return () => navigate("/order/more");
      case "/order/more":
        return () => navigate("/order/total");
      case "/order/total":
        return () => handleOpenOrderModal();
      default:
        break;
    }
  };
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

        {startPrice && endPrice && (
          <div>
            <Price startPrice={startPrice} endPrice={endPrice} />
          </div>
        )}

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
