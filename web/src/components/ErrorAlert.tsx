import React, { FC } from "react";
import styled from "styled-components";

interface ErrorBoxProps {
  errors: string[];
  title: string;
  onClose: () => void;
}

const StyledErrorBox = styled.div`
  background-color: #ffcccc;
  border: 2px solid #ff0000;
  border-radius: 5px;
  padding: 10px;
  position: relative;
`;

const Title = styled.h2`
  color: #ff0000;
  font-size: 24px;
  margin-bottom: 10px;
`;

const ErrorList = styled.ul`
  list-style: disc;
`;

const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  color: #ff0000;
  cursor: pointer;
  font-size: 24px;
  position: absolute;
  right: 0px;
  top: 0px;
`;

const ErrorAlertBox: FC<ErrorBoxProps> = ({ errors, title, onClose }) => {
  return (
    <StyledErrorBox>
      <CloseButton onClick={onClose}>×</CloseButton>
      <Title>{title}</Title>
      <ErrorList>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ErrorList>
    </StyledErrorBox>
  );
};

export default ErrorAlertBox;
