import React from "react";
import styled from "styled-components";
import useAuth from "../hooks/useAuth";

const Message = styled.h1`
  font-size: 36px;
  margin-top: 20px;
`;

const SignOutPage = () => {
  let auth = useAuth();
  auth.signOut(() => {
    return;
  });

  return <Message>You have successfully signed out</Message>;
};

export default SignOutPage;
