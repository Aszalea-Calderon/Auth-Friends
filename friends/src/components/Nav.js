import React from "react";
import { Link } from "react-router-dom";
import { FRIENDS_PATH, LOGIN_PATH } from "../paths";

const Nav = () => {
  return (
    <div>
      <Link to={LOGIN_PATH}>Login</Link>
      <Link to={LOGIN_PATH}>Logout</Link>
      <Link to={FRIENDS_PATH}>f</Link>
    </div>
  );
};

export default Nav;
