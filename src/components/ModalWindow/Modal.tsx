import React, { FC, useEffect } from "react";
import Button from "../UI/Button/Button";
import cn from "classnames";
import classes from "./Modal.module.scss";
import { useAppSelector } from "../../hooks/redux/redux-hooks";
import { useDispatch } from "react-redux";
import { modalActions } from "../../store/Slices/ModalSlice";
import { useNavigate } from "react-router-dom";
interface IModalProps {
  handleSubmit: () => void;
}
const Modal: FC<IModalProps> = ({ handleSubmit }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isOpen = useAppSelector((state) => state.modal.isModalOpen);
  const { status, data } = useAppSelector((state) => state.order.order);
  const className = cn({
    [classes.popupMenu]: true,
    [classes.active]: isOpen,
  });

  const handleClose = () => {
    dispatch(modalActions.setOpenModal(false));
  };

  const handleClick = () => {
    handleSubmit();
  };

  useEffect(() => {
    if (status === "success") {
      navigate(`/order/${data.id}`);
      dispatch(modalActions.setOpenModal(false));
    }
  }, [status]);
  return (
    <section className={className}>
      <div className={classes.container}>
        <h2 className={classes.title}>Подтвердить заказ</h2>
        <div className={classes.buttonContainer}>
          <Button
            background={"linear-gradient(90deg, #0ec261 2.61%, #039f67 112.6%)"}
            className={classes.button}
            title="Подтвердить"
            onClick={handleClick}
          />
          <Button
            background={"linear-gradient(90deg, #493013 0%, #7b0c3b 100%)"}
            className={classes.button__close}
            title="Вернуться"
            onClick={handleClose}
          />
        </div>
      </div>
    </section>
  );
};

export default Modal;
