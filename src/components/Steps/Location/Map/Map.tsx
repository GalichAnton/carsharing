import React from "react";
import classes from "./Map.module.scss";
const Map = () => {
  return (
    <div className={classes.container}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121783.16983423554!2d48.26245874879136!3d54.282640372969894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x415d365f8f42b3f5%3A0x2152ff0847091be4!2z0KPQu9GM0Y_QvdC-0LLRgdC6LCDQo9C70YzRj9C90L7QstGB0LrQsNGPINC-0LHQuy4!5e0!3m2!1sru!2sru!4v1645002948811!5m2!1sru!2sru"
        width="100%"
        height="100%"
        style={{ border: "0" }}
        allowFullScreen={false}
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Map;
