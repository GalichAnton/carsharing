import React, { FC } from "react";
import classes from "./Slide.module.scss";
import { ISlide } from "../content/SlideInterfaces";
import Button from "../../Button/Button";
interface ISlideProps {
  slide: ISlide;
}
const Slide: FC<ISlideProps> = ({ slide }) => {
  const { title, text, buttonColor, buttonName, background } = slide;
  return (
    <div
      className={classes.slide}
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <article className={classes.article}>
        <h2 className={classes.article__title}>{title}</h2>

        <p className={classes.article__descr}>{text}</p>

        <Button
          title={buttonName}
          className={classes.button}
          background={buttonColor}
        />
      </article>
    </div>
  );
};

export default Slide;
