import React, { useEffect } from "react";
import ModelList from "./ModelList/ModelList";
import classes from "./Model.module.scss";
import RadioGroup from "../../UI/Inputs/RadioGroup/RadioGroup";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../hooks/redux/redux-hooks";
import { validActions } from "../../../store/Slices/ValidSlice";
import { formActions } from "../../../store/Slices/FormSlice";
import {
  getCarByCategory,
  getCars,
  getCategories,
} from "../../../store/Slices/CarSlice";
import { ICar } from "../../../Interfaces/CarInterface";
import Preloader from "../../UI/Preloader/Preloader";
import { ICategory } from "../../../Interfaces/CategoryInterface";
import { orderActions } from "../../../store/Slices/OrderSlice";
const Model = () => {
  const dispatch = useDispatch();
  const { model, category } = useAppSelector((state) => state.form);
  const { cars, categories } = useAppSelector((state) => state.cars);
  useEffect(() => {
    dispatch(getCars());
    dispatch(getCategories());
  }, []);
  useEffect(() => {
    dispatch(validActions.setModelStep(Boolean(model.name)));
    dispatch(validActions.setMoreStep(Boolean(model.name)));
  }, [model]);

  const handleSelect = (model: ICar) => {
    dispatch(formActions.setModel(model));
    dispatch(orderActions.resetModelOrder());
    dispatch(formActions.setPrice(0));
    dispatch(formActions.setDateFrom(""));
    dispatch(formActions.setDateTo(""));
    dispatch(orderActions.setOrderItem({ title: "Модель", info: model.name }));
  };
  const handleButtonChange = (category: ICategory) => {
    dispatch(formActions.setCategory(category));
    dispatch(getCarByCategory(category.id));
  };

  return (
    <section className={classes.model}>
      <div className={classes.model__radio}>
        <RadioGroup
          name={"category"}
          buttons={categories.data}
          selected={category}
          handleChange={handleButtonChange}
        />
      </div>
      {cars.status !== "success" ? (
        <Preloader customText={"Подождите..."} />
      ) : (
        <ModelList
          models={cars.data}
          selected={model}
          onSelectModel={handleSelect}
        />
      )}
    </section>
  );
};

export default Model;
