import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import useAuth from "../hooks/useAuth";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border: 1px solid lightgray;
  border-radius: 4px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid lightgray;
  border-radius: 4px;
  font-size: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: lightblue;
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    background-color: blue;
  }
`;

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();
  let location = useLocation();
  let auth = useAuth();

  let from = location.state?.from?.pathname || "/";

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    auth.signIn(username, () => {
      // Send them back to the page they tried to visit when they were
      // redirected to the login page. Use { replace: true } so we don't create
      // another entry in the history stack for the login page.  This means that
      // when they get to the protected page and click the back button, they
      // won't end up back on the login page, which is also really nice for the
      // user experience.
      navigate(from, { replace: true });
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={username}
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        type="password"
        value={password}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="submit">Login</Button>
    </Form>
  );
};

export default LoginPage;
