import React from "react";

import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LOGIN_PATH, FRIENDS_PATH } from "./paths";
import Login from "./components/Login";
import Friends from "./components/Friends";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <>
      <Router>
        <Home />
        <Switch>
          <Route path={LOGIN_PATH} component={Login}></Route>
          <PrivateRoute path={FRIENDS_PATH} component={Friends} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
