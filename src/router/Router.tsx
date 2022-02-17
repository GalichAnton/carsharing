import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";

const Router = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  </HashRouter>
);

export default Router;
