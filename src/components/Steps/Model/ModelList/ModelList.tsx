import React, { FC } from "react";
import classes from "./ModelList.module.scss";
import { IModel } from "../../../../Interfaces/ModelInterface";
import ModelItem from "../ModelItem/ModelItem";
interface IModelListProps {
  models: IModel[];
  selected?: string;
  onSelectModel: (model: IModel) => void;
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
            selected={selected === model.modelName}
            onSelectModel={onSelectModel}
          />
        ))}
      </ul>
    </div>
  );
};

export default ModelList;
