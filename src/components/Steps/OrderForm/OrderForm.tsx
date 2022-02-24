import React, { FC } from "react";
import classes from "./OrderForm.module.scss";
import OrderItem, { IOrderItem } from "./OrderItem/OrderItem";
import Price from "./Price/Price";
import Button from "../../UI/Button/Button";
import { useDispatch } from "react-redux";
import { modalActions } from "../../../store/Slices/ModalSlice";

interface IProps {
  orderItems: IOrderItem[];
  startPrice: number | undefined;
  endPrice: number | undefined;
}

const OrderForm: FC<IProps> = ({ orderItems, startPrice, endPrice }) => {
  const dispatch = useDispatch();
  const handleOpenOrderModal = () => {
    dispatch(modalActions.setOpenModal(true));
  };
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

        <Button
          disabled={false}
          title={"Выбрать модель"}
          className={classes.button}
          onClick={handleOpenOrderModal}
        />
      </div>
    </form>
  );
};

export default OrderForm;
