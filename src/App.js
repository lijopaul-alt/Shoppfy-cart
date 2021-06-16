import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SingupSuccess from "./components/signupsuccess";
import fire from "./config/fire";
import Main from "./components/Main";
import Nav from "./components/UI/Navbar";
import Login from "./components/Login";

function App() {
  const [user, setUser] = useState("");

  const authListner = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        return;
      }
    });
  };
  useEffect(() => {
    authListner();

    console.log("lijo");
  }, []);

  return (
    <>
      <Nav />
      <BrowserRouter>
        <Switch>
          <Route path="/main" component={Main} />
          <Route path="/success" exact component={SingupSuccess} />
          <Route
            pathe="/"
            render={(props) => <Login {...props} setUser={setUser} />}
          />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
