import React from "react";
import classes from "./Modal.module.scss";
import NavBar from "./NavBar/NavBar";
import { navMenuIcons, navMenuItems } from "./NavBar/NavBarItems";
import cn from "classnames";
import closeButton from "./NavBar/CloseButton";
import { useAppDispatch, useAppSelector } from "../../hooks/redux/redux-hooks";
import { modalActions } from "../../store/Slices/ModalSlice";
const Modal = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.modalReducer.isOpen);
  const closeModal = () => {
    dispatch(modalActions.setOpen(false));
  };
  return (
    <section
      className={cn(classes.modal, {
        [classes.modal_active]: isOpen,
      })}
    >
      <div className={classes.wrapper}>
        <button onClick={closeModal} className={classes.closeButton}>
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

export default Modal;
