import classes from "./Header.module.scss";
import burgerBlack from "./svg/burgerBlack";
import pointImg from "./svg/pointImg";
import { burgerActions } from "../../store/Slices/ModalSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const openModal = () => {
    dispatch(burgerActions.setOpen(true));
  };
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <Link to={"/"} className={classes.title}>
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
