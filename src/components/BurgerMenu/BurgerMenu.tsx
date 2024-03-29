import React from "react";
import classes from "./BurgerMenu.module.scss";
import NavBar from "./NavBar/NavBar";
import { navMenuIcons, navMenuItems } from "./NavBar/NavBarItems";
import cn from "classnames";
import closeButton from "./NavBar/CloseButton";
import { useAppSelector } from "../../hooks/redux/redux-hooks";
import { useDispatch } from "react-redux";
import { modalActions } from "../../store/Slices/ModalSlice";
const BurgerMenu = () => {
  const dispatch = useDispatch();
  const isOpen = useAppSelector((state) => state.modal.isBurgerOpen);
  return (
    <section
      className={cn(classes.modal, {
        [classes.modal_active]: isOpen,
      })}
    >
      <div className={classes.wrapper}>
        <button
          onClick={() => dispatch(modalActions.setOpenBurger(false))}
          className={classes.closeButton}
        >
          {closeButton}
        </button>
        <div className={classes.container}>
          <NavBar items={navMenuItems} icons={navMenuIcons} />
          <button className={classes.button__lang}>Eng</button>
        </div>
      </div>
    </section>
  );
};

export default BurgerMenu;
