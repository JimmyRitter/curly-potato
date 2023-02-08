import React from "react";
import { Route, Routes as ReactRoutes, Router } from "react-router-dom";
import Layout from "../components/Layout";
import RequireAuth from "../components/RequireAuth";
import Home from "../containers/Home";
import LoginPage from "../containers/LoginPage";
import MyAccount from "../containers/MyAccoutnPage";
import SignOutPage from "../containers/SignOutPage";
import SignUpPage from "../containers/SignUpPage";

const Routes = () => {
  return (
    <ReactRoutes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signout" element={<SignOutPage />} />
        <Route
          path="/account"
          element={
            <RequireAuth>
              <MyAccount />
            </RequireAuth>
          }
        />
      </Route>
    </ReactRoutes>
  );
};

export default Routes;
