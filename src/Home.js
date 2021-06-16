import React from "react";
import fire from "./config/fire";

const Home = () => {
  const logout = () => {
    fire.auth().signOut();
  };
  return (
    <div>
      <h1>va da mapla</h1>
      <button onClick={logout}>log out</button>
    </div>
  );
};

export default Home;
