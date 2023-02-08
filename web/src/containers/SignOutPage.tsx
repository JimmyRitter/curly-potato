import React from "react";
import styled from "styled-components";
import useAuth from "../hooks/useAuth";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const Message = styled.h1`
  font-size: 36px;
  margin-top: 20px;
`;

const SignOutPage: React.FC = () => {
  let auth = useAuth();
  auth.signOut(() => console.log("signed out"));

  return (
    <Container>
      <Message>You have successfully signed out</Message>
    </Container>
  );
};

export default SignOutPage;
