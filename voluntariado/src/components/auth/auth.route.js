import React from "react";
import { Route, Redirect } from "react-router-dom";

const AuthRoute = ({
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props => {}}
    />
  );
};

export default AuthRoute;