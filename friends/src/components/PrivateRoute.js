import React from "react";
import { Route, Redirect } from "react-router-dom";
import { LOGIN_PATH } from "../paths";

const PrivateRoute = ({ component: Component, ...restProps }) => {
  return (
    <>
      <Route
        {...restProps}
        render={(props) => {
          //you could get a token from storage and check it here
          //If it exists return the component with restprops...
          //The other way, is have redux define the token.
          if (localStorage.getItem("token")) {
            return <Component {...props} />;
          } else {
            return <Redirect to={LOGIN_PATH} />;
          }
        }}
      />
    </>
  );
};

export default PrivateRoute;
