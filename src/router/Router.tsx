import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import OrderPage from "../pages/OrderPage/OrderPage";
import Location from "../components/Steps/Location/Location";
import Model from "../components/Steps/Model/Model";
import More from "../components/Steps/More/More";

const Router = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="order/" element={<OrderPage />}>
        <Route path="location" element={<Location />} />
        <Route path="model" element={<Model />} />
        <Route path="more" element={<More />} />
        {/* <Route path="/total" element={<Total />} />*/}
        {/* <Route path=' :id' element={<Total />} />*/}
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
