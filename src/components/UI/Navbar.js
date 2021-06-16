import React from "react";
import classes from "../UI/nav.module.css";

const Nav = () => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.icon}>
        <li className={classes.iconlist}>SHOPPY CART</li>
      </div>
      <div className={classes.link}>
        <ul className={classes.navlink}>
          <li className={classes.list}>login</li>
          <li className={classes.list}>cart</li>
          <li className={classes.list}>about us</li>
        </ul>
      </div>
    </nav>
  );
};
export default Nav;
