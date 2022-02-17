import React, { FC } from "react";
import classes from "./ModelList.module.scss";
import { IModel } from "../content/ModelInterface";
import ModelItem from "../ModelItem/ModelItem";
interface IModelListProps {
  models: IModel[];
  selected?: IModel;
  onSelectModel: (model: IModel) => void;
}
const ModelList: FC<IModelListProps> = ({
  models,
  selected,
  onSelectModel,
}) => {
  return (
    <ul className={classes.modelList}>
      {models.map((model, i) => (
        <ModelItem
          key={i}
          model={model}
          selected={selected === model}
          onSelectModel={onSelectModel}
        />
      ))}
    </ul>
  );
};

export default ModelList;
