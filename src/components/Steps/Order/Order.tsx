import React, { useEffect } from "react";
import classes from "./Order.module.scss";
import { useAppSelector } from "../../../hooks/redux/redux-hooks";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getOrder } from "../../../store/Slices/OrderSlice";
import Preloader from "../../UI/Preloader/Preloader";
import { useRecoveryOrder } from "../../../hooks/useRecoveryOrder";
import { dateParser } from "../../../utils/DateParser";
const Order = () => {
  const dispatch = useDispatch();
  const { orderId } = useParams();
  const { recoveryOrder } = useRecoveryOrder();
  const { data: order, status } = useAppSelector((state) => state.order.order);
  useEffect(() => {
    if (status === "idle" && orderId) dispatch(getOrder(orderId));
    if (status === "success") recoveryOrder(order);
  }, [status]);

  if (status === "success")
    return (
      <form className={classes.form}>
        <div className={classes.container}>
          <div className={classes.info}>
            <h2 className={classes.head}>
              Ваш заказ{" "}
              {order.orderStatusId.name === "Новые" ? "подтверждён" : "отменен"}
            </h2>
            <h2 className={classes.title}>{order.carId.name}</h2>
            <div className={classes.number}>{order.carId.number}</div>
            <p className={classes.textBold}>{order.color}</p>
            {order.isFullTank && (
              <p className={classes.textBold}>
                Топливо <span className={classes.text}>100%</span>
              </p>
            )}
            {order.isNeedChildChair && (
              <p className={classes.textBold}>
                Детское кресло <span className={classes.text}>Да</span>
              </p>
            )}
            {order.isRightWheel && (
              <p className={classes.textBold}>
                Правый руль <span className={classes.text}>Да</span>
              </p>
            )}
            <p className={classes.textBold}>
              Доступен с{" "}
              <span className={classes.text}>
                {dateParser(new Date(order.dateFrom).toDateString())}
              </span>
            </p>
          </div>
          <div className={classes.imageWrapper}>
            <img className={classes.image} src={order.carId.thumbnail.path} />
          </div>
        </div>
      </form>
    );
  if (status === "loading") return <Preloader customText={"Подождите"} />;
  return <h2>Ошибка сервера</h2>;
};

export default Order;
