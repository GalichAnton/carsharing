import React from "react";
import classes from "./SideBar.module.scss";
import burgerWhite from "./svg/burgerWhite";
import { useAppDispatch } from "../../hooks/redux/redux-hooks";
import { modalActions } from "../../store/Slices/ModalSlice";
const SideBar = () => {
  const dispatch = useAppDispatch();
  const openModal = () => {
    dispatch(modalActions.setOpen(true));
  };
  return (
    <div className={classes.sidebar}>
      <button onClick={openModal} className={classes.button}>
        <div className={classes.button__img}>{burgerWhite}</div>
      </button>
      <button className={classes.button__lang}>Eng</button>
    </div>
  );
};

export default SideBar;
