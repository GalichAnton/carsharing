import React, { useEffect } from "react";
import { Input } from "../../../UI/Inputs/Input";
import classes from "./DateForm.module.scss";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../../hooks/redux/redux-hooks";
import { validActions } from "../../../../store/Slices/ValidSlice";
import { formActions } from "../../../../store/Slices/FormSlice";
const DateForm = () => {
  const dispatch = useDispatch();
  const dateFrom = useAppSelector((state) => state.form.dateFrom);
  const dateTo = useAppSelector((state) => state.form.dateTo);
  useEffect(() => {
    if (dateFrom && dateTo) {
      dispatch(validActions.setMoreStep(true));
      dispatch(validActions.setTotalStep(true));
    } else {
      dispatch(validActions.setMoreStep(false));
      dispatch(validActions.setTotalStep(false));
    }
  }, [dateTo, dateFrom]);
  const handleChangeDateFrom = (dateFrom: string) => {
    dispatch(formActions.setDateFrom(dateFrom));
  };
  const handleChangeDateTo = (dateTo: string) => {
    dispatch(formActions.setDateTo(dateTo));
  };
  return (
    <form className={classes.container}>
      <h3 className={classes.title}>Даты аренды</h3>
      <div className={classes.inputWrapper}>
        <label className={classes.label} htmlFor="from">
          С
        </label>

        <Input
          value={dateFrom}
          onChange={handleChangeDateFrom}
          date={true}
          name="from"
          placeholder="Введите дату и время"
        />
      </div>

      <div className={classes.inputWrapper}>
        <label className={classes.label} htmlFor="to">
          По
        </label>

        <Input
          value={dateTo}
          onChange={handleChangeDateTo}
          date={true}
          name="to"
          placeholder="Введите дату и время"
        />
      </div>
    </form>
  );
};

export default DateForm;
