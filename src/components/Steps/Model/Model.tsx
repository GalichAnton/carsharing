import React, { useEffect } from "react";
import ModelList from "./ModelList/ModelList";
import { models } from "./content/Models";
import { IModel } from "../../../Interfaces/ModelInterface";
import classes from "./Model.module.scss";
import RadioGroup from "../../UI/Inputs/RadioGroup/RadioGroup";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../hooks/redux/redux-hooks";
import { validActions } from "../../../store/Slices/ValidSlice";
import { formActions } from "../../../store/Slices/FormSlice";
const radioGroup = ["Все модели", "Эконом", "Премиум"];
const Model = () => {
  const dispatch = useDispatch();
  const model = useAppSelector((state) => state.form.model);
  const category = useAppSelector((state) => state.form.category);

  useEffect(() => {
    dispatch(validActions.setModelStep(Boolean(model)));
    dispatch(validActions.setMoreStep(Boolean(model)));
  }, [model]);
  const handleSelect = (model: IModel) => {
    dispatch(formActions.setModel(model.modelName));
  };
  const handleButtonChange = (value: string) => {
    dispatch(formActions.setCategory(value));
  };
  return (
    <section className={classes.model}>
      <div className={classes.model__radio}>
        <RadioGroup
          buttons={radioGroup}
          selected={category}
          handleChange={handleButtonChange}
        />
      </div>
      <ModelList
        models={models}
        selected={model}
        onSelectModel={handleSelect}
      />
    </section>
  );
};

export default Model;
