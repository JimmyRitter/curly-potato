import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import useAuth from "../hooks/useAuth";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Nav = styled.nav`
  background-color: lightgray;
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
`;

const NavLink = styled(Link)`
  margin-right: 20px;
  color: black;
  text-decoration: none;
`;

const Main = styled.main`
  flex: 1;
  background-color: lightgreen;
  padding-top: 50px;
`;

interface Link {
  to: string;
  text: string;
}

const links: Link[] = [
  {
    to: "/",
    text: "Home",
  },
  {
    to: "/login",
    text: "Login",
  },
  {
    to: "/signup",
    text: "Sign Up",
  },
  {
    to: "/account",
    text: "My Account",
  },
];

const Layout = () => {
  let auth = useAuth();
  return (
    <>
      <Container>
        <Nav>
          <NavLink to={"/"}>Home</NavLink>
          {!auth.user ? <NavLink to={"/login"}>Sign In</NavLink> : null}
          {!auth.user ? <NavLink to={"/signup"}>Sign Up</NavLink> : null}
          {auth.user ? <NavLink to={"/account"}>My Account</NavLink> : null}
          {auth.user ? <NavLink to={"/signout"}>Sign Out</NavLink> : null}
        </Nav>
        <Main>
          <Outlet />
        </Main>
      </Container>
    </>
  );
};

export default Layout;
