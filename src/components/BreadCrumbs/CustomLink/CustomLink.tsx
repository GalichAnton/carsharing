import React, { FC } from "react";
import { NavLink, useLocation } from "react-router-dom";
import classes from "./CustomLink.module.scss";
import cn from "classnames";
import { useAppSelector } from "../../../hooks/redux/redux-hooks";
interface ICustomLinkProps {
  link: string;
  title: string;
  step: string;
}
const CustomLink: FC<ICustomLinkProps> = (props) => {
  const validState = useAppSelector((state) => state.valid);
  const location = useLocation();
  const { link, title, step } = props;
  const linkClassName = cn({
    [classes.link_active]: location.pathname === link,
    [classes.link_disabled]:
      location.pathname !== link && validState[step] === false,
    [classes.link]: location.pathname !== link && validState[step] === true,
  });
  return (
    <NavLink to={{ pathname: link }} className={linkClassName}>
      {title}
    </NavLink>
  );
};

export default CustomLink;
