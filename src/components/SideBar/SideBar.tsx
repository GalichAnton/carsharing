import React from "react";
import classes from "./SideBar.module.scss";
import burgerWhite from "./svg/burgerWhite";
import { useDispatch } from "react-redux";
import { modalActions } from "../../store/Slices/ModalSlice";
const SideBar = () => {
  const dispatch = useDispatch();

  return (
    <div className={classes.sidebar}>
      <button
        onClick={() => dispatch(modalActions.setOpenBurger(true))}
        className={classes.button}
      >
        <div className={classes.button__img}>{burgerWhite}</div>
      </button>
      <button className={classes.button__lang}>Eng</button>
    </div>
  );
};

export default SideBar;
