import classes from "./Header.module.scss";
import burgerBlack from "./svg/burgerBlack";
import pointImg from "./svg/pointImg";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { formActions } from "../../store/Slices/FormSlice";
import { validActions } from "../../store/Slices/ValidSlice";
import { modalActions } from "../../store/Slices/ModalSlice";

const Header = () => {
  const dispatch = useDispatch();
  const openModal = () => {
    dispatch(modalActions.setOpenBurger(true));
  };
  const handleReset = () => {
    dispatch(formActions.resetForm());
    dispatch(validActions.resetValid());
  };
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <Link onClick={handleReset} to={"/"} className={classes.title}>
          Need for drive
        </Link>
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
