import React, { useState, useRef } from "react";
import fire from "../config/fire";
import { useHistory } from "react-router";
import "./ui.css";

const Login = (props) => {
  const [signUp, setSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [passError, setPassError] = useState("");
  const [emailError, setEmailError] = useState("");
  const history = useHistory();

  const clearInput = () => {
    setEmail("");
    setPassword("");
  };
  const signupSubmit = (e) => {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, Password)
      .then((user) => {
        history.push("/success");
      })
      .catch((err) => {
        console.log(err);
        switch (err.code) {
          case "auth/weak-password":
            return setPassError(err.message);
          case "auth/invalid-email":
            return setEmailError("invalid email adress");
          default:
            return;
        }
      });
  };

  const loginSubmit = (e) => {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(email, Password)
      .then((user) => clearInput())
      .catch((err) => {
        console.log(err);
        switch (err.code) {
          case "auth/invalid-email":
            return setEmailError("Email adress not found");
          case "auth/wrong-password":
            return setPassError("invalid password");
          default:
            return;
        }
      });
  };

  return (
    <div className="form">
      <form>
        {!signUp ? (
          <h1 className="header">LOGIN</h1>
        ) : (
          <h1 className="header">SIGN UP</h1>
        )}

        <div>
          <label>Email</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          ></input>
          <span className="error">{emailError}</span>
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={Password}
          ></input>
          <span className="error">{passError}</span>
        </div>
        <div className="button">
          {!signUp ? (
            <button onClick={loginSubmit}>Log In</button>
          ) : (
            <button onClick={signupSubmit}>Sign up</button>
          )}
        </div>
        <div className="footer">
          {!signUp ? (
            <span>
              create new account{" "}
              <h6 onClick={() => setSignUp((prevState) => !prevState)}>
                Sign Up
              </h6>
            </span>
          ) : (
            <span>
              having an account{" "}
              <h6 onClick={() => setSignUp((prevState) => !prevState)}>
                Sign in
              </h6>
            </span>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
