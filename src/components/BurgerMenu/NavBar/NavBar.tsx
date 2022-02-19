import React, { FC } from "react";
import { Link } from "react-router-dom";
import classes from "./NavBar.module.scss";
import { INavMenuIcon, INavMenuItem } from "./NavBarInterfaces";

interface INavBarProps {
  icons: INavMenuIcon[];
  items: INavMenuItem[];
}

const NavBar: FC<INavBarProps> = ({ icons, items }) => {
  return (
    <>
      <nav className={classes.navbar__items}>
        {items.map((item) => (
          <Link key={item.name} className={classes.navbar__item} to="/">
            {item.name}
          </Link>
        ))}
      </nav>
      <nav className={classes.navbar__icons}>
        {icons.map((link) => (
          <a
            key={link.title}
            className={classes.navbar__icon}
            href={link.url}
            target="_blank"
            rel="noreferrer"
          >
            <div className={classes.navbar__icon_img}>{link.image}</div>
          </a>
        ))}
      </nav>
    </>
  );
};

export default NavBar;
