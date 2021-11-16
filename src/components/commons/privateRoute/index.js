import React from "react";
import { Route, Redirect } from "react-router-dom";
// import { getUser } from "../../../utils/User";
import Layout from "../../../components/layout";

const PrivateRoute = ({ component: Component, roles, ...rest }) => (
  <Route
    {...rest}
    element={(props) => {
      return (
        <Layout>
          <Component {...props} />
        </Layout>
      );
    }}
  />
);

export default PrivateRoute;
