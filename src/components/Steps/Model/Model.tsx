import React, { useState } from "react";
import ModelList from "./ModelList/ModelList";
import { models } from "./content/Models";
import { IModel } from "../../../Interfaces/ModelInterface";
import classes from "./Model.module.scss";
import RadioGroup from "../../UI/RadioGroup/RadioGroup";

const Model = () => {
  const [selectedButton, setSelectedButton] = useState<string>("Все модели");
  const [selectedModel, setSelectedModel] = useState<IModel>();
  const radioGroup = ["Все модели", "Эконом", "Премиум"];
  const handleSelect = (model: IModel) => {
    setSelectedModel(model);
  };
  const handleButtonChange = (value: string) => {
    setSelectedButton(value);
  };
  return (
    <section className={classes.model}>
      <div className={classes.model__radio}>
        <RadioGroup
          buttons={radioGroup}
          selected={selectedButton}
          handleChange={handleButtonChange}
        />
      </div>
      <ModelList
        models={models}
        selected={selectedModel}
        onSelectModel={handleSelect}
      />
    </section>
  );
};

export default Model;
