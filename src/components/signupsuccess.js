import React from "react";
import classes from "./signupsuccess.module.css";

const SignupSuccess = () => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.content}>
          <i class="fa fa-check fa-3x" aria-hidden="true">
            {" "}
            <span> You have successfully signed up</span>
          </i>
          <button className={classes.button}>Click To Enter Main Page</button>
        </div>
      </div>
    </>
  );
};

export default SignupSuccess;
