import { useDispatch } from "react-redux";
import { IOrder } from "../Interfaces/OrderInterface";
import { orderActions } from "../store/Slices/OrderSlice";
import { dateCalc } from "../utils/DateCalc";

export const useRecoveryOrder = () => {
  const dispatch = useDispatch();
  const recoveryOrder = (order: IOrder) => {
    dispatch(
      orderActions.setOrderItem({
        title: "Пункт выдачи",
        info: `${order.cityId.name} 
          ${order.pointId.address}`,
      })
    );
    dispatch(
      orderActions.setOrderItem({
        title: "Модель",
        info: order.carId.name,
      })
    );
    dispatch(
      orderActions.setOrderItem({
        title: "Цвет",
        info: order.color,
      })
    );
    dispatch(
      orderActions.setOrderItem({
        title: "Длительность аренды",
        info: dateCalc(order.dateFrom, order.dateTo),
      })
    );
    dispatch(
      orderActions.setOrderItem({
        title: "Тариф",
        info: order.rateId.rateTypeId.name,
      })
    );
    dispatch(
      orderActions.setOrderItem({
        title: "Полный бак",
        info: order.isFullTank ? "Да" : "",
      })
    );
    dispatch(
      orderActions.setOrderItem({
        title: "Детское кресло",
        info: order.isNeedChildChair ? "Да" : "",
      })
    );
    dispatch(
      orderActions.setOrderItem({
        title: "Правый руль",
        info: order.isRightWheel ? "Да" : "",
      })
    );
  };
  return { recoveryOrder };
};
