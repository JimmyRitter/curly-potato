import React from "react";
import { Link, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import {
  Container,
  Main,
  Nav,
  NavLink,
  LinksLeftSection,
  LinksRightSection,
  WelcomeUserText,
} from "./Layout.style";

const SignedInNavItems = ({ username }: { username: string }) => {
  return (
    <>
      <LinksLeftSection>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/account"}>My Account</NavLink>
      </LinksLeftSection>
      <LinksRightSection>
        <WelcomeUserText>Welcome, {username}</WelcomeUserText>
        <NavLink to={"/signout"}>Sign Out</NavLink>
      </LinksRightSection>
    </>
  );
};

const SignedOutNavItems = () => {
  return (
    <>
      <LinksLeftSection>
        <NavLink to={"/"}>Home</NavLink>
      </LinksLeftSection>
      <LinksRightSection>
        <NavLink to={"/login"}>Sign In</NavLink>
        <NavLink to={"/signup"}>Sign Up</NavLink>
      </LinksRightSection>
    </>
  );
};

const Layout = () => {
  let auth = useAuth();
  return (
    <>
      <Container>
        <Nav>
          {auth.user ? (
            <SignedInNavItems username={auth.user} />
          ) : (
            <SignedOutNavItems />
          )}
        </Nav>
        <Main>
          <Outlet />
        </Main>
      </Container>
    </>
  );
};

export default Layout;
