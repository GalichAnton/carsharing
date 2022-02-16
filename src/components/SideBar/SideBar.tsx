import React from "react";
import classes from "./SideBar.module.scss";
import burgerWhite from "./svg/burgerWhite";
import { burgerActions } from "../../store/Slices/ModalSlice";
import { useDispatch } from "react-redux";
const SideBar = () => {
  const dispatch = useDispatch();

  return (
    <div className={classes.sidebar}>
      <button
        onClick={() => dispatch(burgerActions.setOpen(true))}
        className={classes.button}
      >
        <div className={classes.button__img}>{burgerWhite}</div>
      </button>
      <button className={classes.button__lang}>Eng</button>
    </div>
  );
};

export default SideBar;
