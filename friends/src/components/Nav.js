import React from "react";
import logo from "../assests/Logo.png";
import { Route, Link, Switch } from "react-router-dom";
import Friends from "./Friends";
import PrivateRoute from "./PrivateRoute";
import Login from "./Login";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Nav = () => {
  const logout = () => {
    axiosWithAuth()
      .post("/logout")
      .catch((err) => {
        console.error("unable to logout! Oh Nose!");
      });
    localStorage.removeItem("token");
  };
  return (
    <div>
      <nav>
        <Link to="/Login">Login</Link>
        <Link to="/login" onClick={logout}>
          Logout
        </Link>
        <Link to="/protected">Protected page</Link>
      </nav>
      <Switch>
        <PrivateRoute exact path="/protected" component={Friends} />
        <Route path="/login" component={Login} />
        <Route component={Login} />
      </Switch>
      <h1>Friends</h1>
      <img src={logo} alt="Logo" />
    </div>
  );
};

export default Nav;
