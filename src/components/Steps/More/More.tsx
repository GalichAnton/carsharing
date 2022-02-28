import React, { useEffect } from "react";
import classes from "./More.module.scss";
import DateForm from "./dateForm/DateForm";
import RadioGroup from "../../UI/Inputs/RadioGroup/RadioGroup";
import CheckBoxGroup from "../../UI/Inputs/CheckBoxGroup/CheckBoxGroup";
import { useAppSelector } from "../../../hooks/redux/redux-hooks";
import { useDispatch } from "react-redux";
import { formActions } from "../../../store/Slices/FormSlice";
import { IRate } from "../../../Interfaces/RateInterface";
import { getRates } from "../../../store/Slices/RateSlice";

const More = () => {
  const dispatch = useDispatch();
  const colors = useAppSelector((state) => state.form.model.colors);
  const color = useAppSelector((state) => state.form.color);
  const rate = useAppSelector((state) => state.form.rate);
  const checkBoxes = useAppSelector((state) => state.form.moreOptions);
  const rates = useAppSelector((state) => state.rate.rates);
  useEffect(() => {
    dispatch(getRates());
  }, []);
  const handleColorChange = (value: string) => {
    dispatch(formActions.setColor(value));
  };
  const handleRateChange = (value: IRate) => {
    dispatch(formActions.setRate(value));
  };
  const handleCheckboxChange = (id: number) => {
    dispatch(formActions.setOptions(id));
  };
  return (
    <section className={classes.more}>
      <h4 className={classes.title}>Цвет</h4>
      <div className={classes.radioContainer}>
        <RadioGroup
          name={"color"}
          buttons={colors}
          selected={color}
          handleChange={handleColorChange}
        />
      </div>

      <DateForm />
      <h4 className={classes.title}>Тариф</h4>
      <div className={classes.radioContainer}>
        <RadioGroup
          name={"rate"}
          direction={"vertical"}
          buttons={rates.data}
          selected={rate}
          handleChange={handleRateChange}
        />
      </div>
      <h4 className={classes.title}>Доп услуги</h4>
      <CheckBoxGroup
        checkboxes={checkBoxes}
        handleChange={handleCheckboxChange}
      />
    </section>
  );
};

export default More;
