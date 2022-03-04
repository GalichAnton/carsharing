import React from "react";
import Header from "../../components/Header/Header";
import SideBar from "../../components/SideBar/SideBar";
import { Outlet } from "react-router-dom";
import classes from "./OrderPage.module.scss";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import OrderForm from "../../components/Steps/OrderForm/OrderForm";
import BurgerMenu from "../../components/BurgerMenu/BurgerMenu";
import { crumbItems } from "../../components/BreadCrumbs/constants";
import Modal from "../../components/ModalWindow/Modal";
import { postOrder } from "../../store/Slices/OrderSlice";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../hooks/redux/redux-hooks";
const OrderPage = () => {
  const dispatch = useDispatch();
  const form = useAppSelector((state) => state.form);
  const onClick = () => {
    dispatch(
      postOrder({
        orderStatusId: {
          name: "Новые",
          id: "5e26a191099b810b946c5d89",
        },
        cityId: {
          name: form.city.name,
          id: form.city.id,
        },
        pointId: {
          name: form.point.name,
          address: form.point.address,
          id: form.point.id,
        },
        carId: form.model,
        color: form.color,
        dateFrom: form.dateFrom,
        dateTo: form.dateTo,
        rateId: form.rate,
        price: form.price,
        isFullTank: form.moreOptions[0].isChecked,
        isNeedChildChair: form.moreOptions[1].isChecked,
        isRightWheel: form.moreOptions[2].isChecked,
        id: "",
      })
    );
  };
  return (
    <section className={classes.container}>
      <SideBar />
      <div className={classes.content}>
        <div className={classes.headerWrapper}>
          {" "}
          <Header />
        </div>
        <BreadCrumbs items={crumbItems} />
        <div className={classes.wrapper}>
          <Outlet />
          <OrderForm />
        </div>
        <Modal handleSubmit={onClick} />
      </div>

      <BurgerMenu />
    </section>
  );
};

export default OrderPage;
