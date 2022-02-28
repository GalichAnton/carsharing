import React, { FC } from "react";
import classes from "./ModelItem.module.scss";
import { ICar } from "../../../../Interfaces/CarInterface";
import cn from "classnames";
interface IModelItemProps {
  model: ICar;
  selected?: boolean;
  onSelectModel: (model: ICar) => void;
}
const ModelItem: FC<IModelItemProps> = (props) => {
  const { model, selected, onSelectModel } = props;
  return (
    <div
      onClick={() => onSelectModel(model)}
      className={cn(classes.modelItem, {
        [classes.modelItem__selected]: selected,
      })}
    >
      <div className={classes.header}>
        <h4 className={classes.title}>{model.name}</h4>

        <div className={classes.modelPrice}>
          <span>{model.priceMin}</span>

          <span className={classes.modelPrice__divider}>-</span>

          <span>{model.priceMax}</span>
        </div>
      </div>

      <div className={classes.imgWrapper}>
        <img
          className={classes.img}
          src={model.thumbnail.path}
          alt={model.name}
        />
      </div>
    </div>
  );
};

export default ModelItem;
