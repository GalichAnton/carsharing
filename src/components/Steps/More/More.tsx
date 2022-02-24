import React from "react";
import classes from "./More.module.scss";
import DateForm from "./dateForm/DateForm";
import RadioGroup from "../../UI/Inputs/RadioGroup/RadioGroup";
import CheckBoxGroup from "../../UI/Inputs/CheckBoxGroup/CheckBoxGroup";
import { radioColor, radioTax } from "./constants/constants";
import { useAppSelector } from "../../../hooks/redux/redux-hooks";
import { useDispatch } from "react-redux";
import { formActions } from "../../../store/Slices/FormSlice";

const More = () => {
  const dispatch = useDispatch();
  const color = useAppSelector((state) => state.form.color);
  const tax = useAppSelector((state) => state.form.tax);
  const checkBoxes = useAppSelector((state) => state.form.moreOptions);
  const handleColorChange = (value: string) => {
    dispatch(formActions.setColor(value));
  };
  const handleTaxChange = (value: string) => {
    dispatch(formActions.setTax(value));
  };
  const handleCheckboxChange = (id: number) => {
    dispatch(formActions.setOptions(id));
  };
  return (
    <section className={classes.more}>
      <h4 className={classes.title}>Цвет</h4>
      <div className={classes.radioContainer}>
        <RadioGroup
          buttons={radioColor}
          selected={color}
          handleChange={handleColorChange}
        />
      </div>

      <DateForm />
      <h4 className={classes.title}>Тариф</h4>
      <div className={classes.radioContainer}>
        <RadioGroup
          direction={"vertical"}
          buttons={radioTax}
          selected={tax}
          handleChange={handleTaxChange}
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
