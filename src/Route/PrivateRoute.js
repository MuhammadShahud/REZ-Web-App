import React from "react";
import { Redirect } from "react-router-dom";
import { Route } from "react-router-dom";

const AuthRoute = ({ component: Component, ...rest }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <>
      <Route
        {...rest}
        render={(props) => {
          return user && user[0]?.user ? (
            <Redirect to={{ path: "/", state: { from: props.location } }} />
          ) : (
            <Component {...props} />
          );
        }}
      />
    </>
  );
};

const PlayerRoute = ({ component: Component, ...rest }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <>
      <Route
        {...rest}
        render={(props) => {
          return user && user[0]?.user && user && user[0]?.role === "player" ? (
            <Component {...props} />
          ) : (
            <>
              <Redirect to={"/"} />
            </>
          );
        }}
      />
    </>
  );
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <>
      <Route
        {...rest}
        render={(props) => {
          return user && user[0]?.user ? (
            <Component {...props} />
          ) : (
            <>
              <Redirect to={"/"} />
            </>
          );
        }}
      />
    </>
  );
};

export { AuthRoute, PlayerRoute, PrivateRoute };
