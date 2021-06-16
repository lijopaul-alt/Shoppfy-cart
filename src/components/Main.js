import React from "react";
import shopping from "../assests/shopping.svg";

import classes from "./main.module.css";
const Main = () => {
  return (
    <div className={classes.main}>
      <div className={classes["main__container"]}>
        <div className={classes["main__image"]}>
          <img src={shopping} alt="shopping" />
        </div>
        <div className={classes["main__content"]}>
          <h1>SHOPPY CART</h1>
        </div>
      </div>
    </div>
  );
};
export default Main;
