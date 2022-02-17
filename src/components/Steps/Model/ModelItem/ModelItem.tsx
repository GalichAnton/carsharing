import React, { FC } from "react";
import classes from "./ModelItem.module.scss";
import { IModel } from "../content/ModelInterface";
import cn from "classnames";
interface IModelItemProps {
  model: IModel;
  selected?: boolean;
  onSelectModel: (model: IModel) => void;
}
const ModelItem: FC<IModelItemProps> = ({ model, selected, onSelectModel }) => {
  return (
    <div
      onClick={() => onSelectModel(model)}
      className={cn(classes.modelItem, {
        [classes.modelItem__selected]: selected,
      })}
    >
      <div className={classes.header}>
        <h4 className={classes.title}>{model.modelName}</h4>

        <div className={classes.modelPrice}>
          <span>{model.startPrice}</span>

          <span className={classes.modelPrice__divider}>-</span>

          <span>{model.endPrice}</span>
        </div>
      </div>

      <div className={classes.imgWrapper}>
        <img className={classes.img} src={model.image} alt={model.modelName} />
      </div>
    </div>
  );
};

export default ModelItem;
