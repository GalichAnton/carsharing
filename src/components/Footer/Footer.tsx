import React from "react";
import classes from "./Footer.module.scss";
const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <p className={classes.name}>© 2016-2019 «Need for drive»</p>
        <a href="tel:+8495234-22-44" className={classes.tel}>
          8 (495) 234-22-44
        </a>
      </div>
    </footer>
  );
};

export default Footer;
