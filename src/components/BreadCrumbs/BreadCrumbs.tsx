import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./BreadCrumbs.module.scss";
import arrow from "./arrow";
const BreadCrumbs = () => {
  return (
    <nav className={classes.breadCrumbs}>
      <div className={classes.container}>
        <NavLink
          to={{ pathname: "/order/location" }}
          className={({ isActive }) =>
            isActive ? classes.link_active : classes.link
          }
        >
          Местоположение
        </NavLink>
        <div className={classes.arrow}>{arrow}</div>
        <NavLink
          className={({ isActive }) =>
            isActive ? classes.link_active : classes.link
          }
          to={{ pathname: "/order/model" }}
        >
          Модель
        </NavLink>
        <div className={classes.arrow}>{arrow}</div>
        <NavLink
          className={({ isActive }) =>
            isActive ? classes.link_active : classes.link
          }
          to={{ pathname: "/order/more" }}
        >
          Дополнительно
        </NavLink>
        <div className={classes.arrow}>{arrow}</div>
        <NavLink
          className={({ isActive }) =>
            isActive ? classes.link_active : classes.link
          }
          to={{ pathname: "/order/tolal" }}
        >
          Итого
        </NavLink>
        <div className={classes.arrow}>{arrow}</div>
      </div>
    </nav>
  );
};

export default BreadCrumbs;
