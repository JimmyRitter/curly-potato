import React, { useState } from "react";
import styled from "styled-components";
import ErrorAlertBox from "../components/ErrorAlert";
import { AuthService } from "../services";

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
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  outline: none;

  &:disabled {
    background-color: gray;
    cursor: not-allowed;
  }
`;
const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    try {
      const result = await AuthService.signUp(email, password);
      if (result.error) {
        setError(result.error);
        return;
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleCloseErrorBox = () => setError("");

  return (
    <>
      {!!error ? (
        <ErrorAlertBox
          errors={[error]}
          title={"Error!"}
          onClose={handleCloseErrorBox}
        />
      ) : null}
      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
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
    </>
  );
};

export default SignUpPage;
