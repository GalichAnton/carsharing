import React, { FC } from "react";
import classes from "./ModelList.module.scss";
import { ICar } from "../../../../Interfaces/CarInterface";
import ModelItem from "../ModelItem/ModelItem";
interface IModelListProps {
  models: ICar[];
  selected: ICar;
  onSelectModel: (model: ICar) => void;
}
const ModelList: FC<IModelListProps> = ({
  models,
  selected,
  onSelectModel,
}) => {
  return (
    <div className={classes.wrapper}>
      <ul className={classes.modelList}>
        {models.map((model, i) => (
          <ModelItem
            key={i}
            model={model}
            selected={selected.name === model.name}
            onSelectModel={onSelectModel}
          />
        ))}
      </ul>
    </div>
  );
};

export default ModelList;
