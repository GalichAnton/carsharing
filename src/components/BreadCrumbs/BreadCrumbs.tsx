import React, { FC } from "react";
import classes from "./BreadCrumbs.module.scss";
import arrow from "./arrow";
import { ICrumbItems } from "./constants";
import cn from "classnames";
import CustomLink from "./CustomLink/CustomLink";
import { useParams } from "react-router-dom";
interface IBreadCrumbsProps {
  items: ICrumbItems[];
}
const BreadCrumbs: FC<IBreadCrumbsProps> = ({ items }) => {
  const { orderId } = useParams();

  return (
    <nav className={classes.breadCrumbs}>
      <div className={classes.container}>
        {orderId ? (
          <span className={classes.link_filled}>Заказ номер {orderId}</span>
        ) : (
          items.map((item, i) => (
            <div key={i} className={classes.link__wrapper}>
              <CustomLink step={item.step} link={item.link} title={item.name} />
              <div
                className={cn(classes.arrow, {
                  [classes.arrow__last]: i === items.length - 1,
                })}
              >
                {arrow}
              </div>
            </div>
          ))
        )}
      </div>
    </nav>
  );
};

export default BreadCrumbs;
