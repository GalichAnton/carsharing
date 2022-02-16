import React from "react";
import Header from "../../components/Header/Header";
import SideBar from "../../components/SideBar/SideBar";
import Modal from "../../components/Modal/Modal";
import { Outlet } from "react-router-dom";
import classes from "./OrderPage.module.scss";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import OrderForm from "../../components/Steps/OrderForm/OrderForm";
import { IOrderItem } from "../../components/Steps/OrderForm/OrderItem/OrderItem";
const OrderPage = () => {
  const orderItem: IOrderItem[] = [{ title: "Пункт", info: "Санкт-Петербург" }];
  return (
    <section className={classes.container}>
      <SideBar />
      <div className={classes.content}>
        <Header />
        <BreadCrumbs />
        <div className={classes.wrapper}>
          <Outlet />
          <OrderForm
            orderItems={orderItem}
            startPrice={5000}
            endPrice={10000}
          />
        </div>
      </div>

      <Modal />
    </section>
  );
};

export default OrderPage;
