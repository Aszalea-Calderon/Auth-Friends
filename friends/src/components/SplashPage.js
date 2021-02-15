import React from "react";
import { Link } from "react-router-dom";

const SplashPage = () => {
  return (
    <div>
      <p>
        Friends mean something to us.
        <br />
        They mean love, joy, happiness. <br /> Are you one?
      </p>
      <Link to="/Login">
        <button>Sign in</button>
      </Link>
    </div>
  );
};

export default SplashPage;
