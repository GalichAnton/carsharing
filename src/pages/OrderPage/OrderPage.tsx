import React from "react";
import Header from "../../components/Header/Header";
import SideBar from "../../components/SideBar/SideBar";
import Modal from "../../components/Modal/Modal";
import { Outlet } from "react-router-dom";
import classes from "./OrderPage.module.scss";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
const OrderPage = () => {
  return (
    <section className={classes.container}>
      <SideBar />
      <div className={classes.content}>
        <Header />
        <BreadCrumbs />
        <Outlet />
      </div>
      <Modal />
    </section>
  );
};

export default OrderPage;
