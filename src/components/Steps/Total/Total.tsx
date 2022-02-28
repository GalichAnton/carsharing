import React from "react";
import classes from "./Total.module.scss";
import { useAppSelector } from "../../../hooks/redux/redux-hooks";
const Total = () => {
  const model = useAppSelector((state) => state.form.model);
  return (
    <form className={classes.form}>
      <div className={classes.container}>
        <div className={classes.info}>
          <h2 className={classes.title}>Hyndai, i30 N</h2>
          <div className={classes.number}>K 761 HA 73</div>
          <p className={classes.textBold}>
            Топливо <span className={classes.text}>100%</span>
          </p>
          <p className={classes.textBold}>
            Доступна с <span className={classes.text}>12.06.2019 12:00</span>
          </p>
        </div>
        <div className={classes.imageWrapper}>
          <img className={classes.image} src={model.thumbnail.path} />
        </div>
      </div>
    </form>
  );
};

export default Total;
