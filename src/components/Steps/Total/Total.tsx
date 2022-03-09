import React from "react";
import classes from "./Total.module.scss";
import { useAppSelector } from "../../../hooks/redux/redux-hooks";
import { dateParser } from "../../../utils/DateParser";

const Total = () => {
  const { model, moreOptions, dateFrom, color } = useAppSelector(
    (state) => state.form
  );

  return (
    <form className={classes.form}>
      <div className={classes.container}>
        <div className={classes.info}>
          <h2 className={classes.title}>{model.name}</h2>
          <div className={classes.number}>{model.number}</div>
          <p className={classes.textBold}>{color}</p>
          {moreOptions[0].isChecked && (
            <p className={classes.textBold}>
              Топливо <span className={classes.text}>100%</span>
            </p>
          )}
          {moreOptions[1].isChecked && (
            <p className={classes.textBold}>
              Детское кресло <span className={classes.text}>Да</span>
            </p>
          )}
          {moreOptions[2].isChecked && (
            <p className={classes.textBold}>
              Правый руль <span className={classes.text}>Да</span>
            </p>
          )}
          <p className={classes.textBold}>
            Доступен с{" "}
            <span className={classes.text}>{dateParser(dateFrom)}</span>
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
