import React from "react";
import Header from "../../components/Header/Header";
import SideBar from "../../components/SideBar/SideBar";
import Modal from "../../components/Modal/Modal";
import { Outlet } from "react-router-dom";

const OrderPage = () => {
  return (
    <div>
      <Header />
      <SideBar />
      <Outlet />
      <Modal />
    </div>
  );
};

export default OrderPage;
