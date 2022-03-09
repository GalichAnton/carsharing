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
import { orderActions } from "../../../store/Slices/OrderSlice";
import { RootState } from "../../../store/store";
const mapState = (state: RootState) => ({
  colors: state.form.model.colors,
  color: state.form.color,
  rate: state.form.rate,
  options: state.form.moreOptions,
  rates: state.rate.rates,
});
const titles = ["Полный бак", "Детское кресло", "Правый руль"];
const More = () => {
  const dispatch = useDispatch();
  const { colors, color, rate, options, rates } = useAppSelector(mapState);
  useEffect(() => {
    dispatch(getRates());
    dispatch(
      orderActions.setOrderItem({ title: "Тариф", info: rate.rateTypeId.name })
    );
    dispatch(formActions.setColor(colors[0]));
    dispatch(orderActions.setOrderItem({ title: "Цвет", info: colors[0] }));
  }, []);
  const handleColorChange = (value: string) => {
    dispatch(formActions.setColor(value));
    dispatch(orderActions.setOrderItem({ title: "Цвет", info: value }));
  };
  const handleRateChange = (value: IRate) => {
    dispatch(formActions.setRate(value));
    dispatch(
      orderActions.setOrderItem({ title: "Тариф", info: value.rateTypeId.name })
    );
  };
  const handleCheckboxChange = (id: number) => {
    dispatch(formActions.setOptions(id));
    dispatch(
      orderActions.setOrderItem({
        title: titles[id],
        info: !options[id].isChecked ? "Да" : "",
      })
    );
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
      <CheckBoxGroup checkboxes={options} handleChange={handleCheckboxChange} />
    </section>
  );
};

export default More;
