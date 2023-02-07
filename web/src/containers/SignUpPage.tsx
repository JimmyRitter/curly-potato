import React, { useState } from "react";
import styled from "styled-components";

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

const Button = styled.button``;

const SignUpPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // perform authentication
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
      <Input
        type="password"
        value={confirm}
        placeholder="Confirm Password"
        onChange={(e) => setConfirm(e.target.value)}
      />
      <Button
        type="submit"
        disabled={password == "" || confirm == "" || password !== confirm}
      >
        Sign Up
      </Button>
    </Form>
  );
};

export default SignUpPage;
