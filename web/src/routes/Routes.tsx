import React from "react";
import { Route, Routes as ReactRoutes, Router } from "react-router-dom";
import Layout from "../components/Layout";
import RequireAuth from "../components/RequireAuth";
import {
  Home,
  MyAccount,
  PageNotFound,
  SignInPage,
  SignOutPage,
  SignUpPage,
} from "../containers";

const Routes = () => {
  return (
    <ReactRoutes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignInPage />} />
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
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </ReactRoutes>
  );
};

export default Routes;
