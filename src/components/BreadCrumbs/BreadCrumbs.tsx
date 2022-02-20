import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import classes from "./BreadCrumbs.module.scss";
import arrow from "./arrow";
import { ICrumbItems } from "./constants";
import cn from "classnames";
interface IBreadCrumbsProps {
  items: ICrumbItems[];
}
const BreadCrumbs: FC<IBreadCrumbsProps> = ({ items }) => {
  return (
    <nav className={classes.breadCrumbs}>
      <div className={classes.container}>
        {items.map((item, i) => (
          <div key={i} className={classes.link__wrapper}>
            <NavLink
              to={{ pathname: item.link }}
              className={({ isActive }) =>
                isActive ? classes.link_active : classes.link
              }
            >
              {item.name}
            </NavLink>
            <div
              className={cn(classes.arrow, {
                [classes.arrow__last]: i === items.length - 1,
              })}
            >
              {arrow}
            </div>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default BreadCrumbs;
