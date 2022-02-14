import classes from "./Header.module.scss";
import burgerBlack from "./svg/burgerBlack";
import pointImg from "./svg/pointImg";
import { useAppDispatch } from "../../hooks/redux/redux-hooks";
import { modalActions } from "../../store/Slices/ModalSlice";

const Header = () => {
  const dispatch = useAppDispatch();
  const openModal = () => {
    dispatch(modalActions.setOpen(true));
  };
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <h2 className={classes.title}>Need for drive</h2>
        <div className={classes.place__container}>
          <button onClick={openModal} className={classes.button}>
            {burgerBlack}
          </button>
          <div className={classes.place__img}>{pointImg}</div>
          <p className={classes.place__name}>Ульяновск</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
