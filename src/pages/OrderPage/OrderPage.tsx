import React from "react";
import Header from "../../components/Header/Header";
import SideBar from "../../components/SideBar/SideBar";
import { Outlet } from "react-router-dom";
import classes from "./OrderPage.module.scss";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import OrderForm from "../../components/Steps/OrderForm/OrderForm";
import { IOrderItem } from "../../components/Steps/OrderForm/OrderItem/OrderItem";
import BurgerMenu from "../../components/BurgerMenu/BurgerMenu";
import { crumbItems } from "../../components/BreadCrumbs/constants";
import Modal from "../../components/ModalWindow/Modal";
const OrderPage = () => {
  const orderItem: IOrderItem[] = [{ title: "Пункт", info: "Санкт-Петербург" }];
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
          <OrderForm orderItems={orderItem} />
        </div>
        <Modal />
      </div>

      <BurgerMenu />
    </section>
  );
};

export default OrderPage;
