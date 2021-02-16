import React from "react";
import Login from "./Login";
import Nav from "./Nav";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Nav />
      <p>Checking friends since back in the day</p>
      <button>Login</button>
      <Login />
    </div>
  );
};

export default Home;
