import React from "react";
import classes from "./Main.module.scss";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Button from "../Button/Button";

const Main = () => {
  return (
    <div className={classes.main}>
      <Header />

      <main className={classes.container}>
        <h1 className={classes.title}>Каршеринг</h1>
        <h2 className={classes.subtitle}>Need for drive</h2>
        <p className={classes.descr}>Поминутная аренда авто твоего города</p>

        <Button title={"Забронировать"} className={classes.button} />
      </main>
      <Footer />
    </div>
  );
};

export default Main;
