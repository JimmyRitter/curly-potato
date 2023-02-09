import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: lightsteelblue;
`;

export const Main = styled.main`
  flex: 1;
  background-color: lightsteelblue;
  padding-top: 50px;
  width: 80%;
  margin: 0 auto;
`;

export const Nav = styled.nav`
  align-items: center;
  justify-content: space-between;
  background-color: lightgray;
  height: 50px;
  width: 100%;
  display: flex;
  position: fixed;
  top: 0;
`;

export const NavLink = styled(Link)`
  margin-right: 20px;
  color: black;
  text-decoration: none;
`;

export const LinksLeftSection = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

export const LinksRightSection = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  justify-content: flex-end;
`;

export const WelcomeUserText = styled.span`
  color: grey;
  margin-right: 20px;
`;
