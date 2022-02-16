import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import OrderPage from "../pages/OrderPage/OrderPage";
import Location from "../components/Steps/Location/Location";

const Router = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="order/" element={<OrderPage />}>
        <Route path="location" element={<Location />} />
        {/* <Route path="/model" element={<Model />} />*/}
        {/* <Route path="/total" element={<Total />} />*/}
        {/* <Route path=' :id' element={<Total />} />*/}
      </Route>
    </Routes>
  </HashRouter>
);

export default Router;
