import React, { FC } from "react";
import classes from "./Slide.module.scss";
import { ISlide } from "../content/content";
interface IProps {
  slide: ISlide;
}
const Slide: FC<IProps> = ({ slide }) => {
  return (
    <div
      className={classes.slide}
      style={{
        backgroundImage: `url(${slide.background})`,
      }}
    >
      <article className={classes.article}>
        <h2 className={classes.article__title}>{slide.title}</h2>

        <p className={classes.article__descr}>{slide.text}</p>

        <button
          className={classes.button}
          style={{ background: `${slide.buttonColor}` }}
        >
          {slide.buttonName}
        </button>
      </article>
    </div>
  );
};

export default Slide;
