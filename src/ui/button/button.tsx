import React from "react";
import styled from "styled-components";
import { theme } from "../theme";

// someone make the colors pls i dont want to

const fontSize = (key: string) => {
  return Object.keys(theme.mediaQuery).map((data) => {
    return `@media (min-width: ${theme.mediaQuery[data]}px) {
      font-size: ${theme.fontSize[key][data]}
    }`;
  });
};

const padding = () => {
  return Object.keys(theme.mediaQuery).map((data) => {
    return `@media (min-width: ${theme.mediaQuery[data]}px) {
      padding: ${theme.button.padding[data]}
    }`;
  });
};

type ButtonComponent = {
  style?: object;
};

const Btn = styled.button`
  cursor: pointer;
  transition: 200ms;
  font-family: ${theme.font.secondary};
  font-weight: 700;
  background: ${theme.color.purple};
  border: ${theme.button.border};
  border-radius: ${theme.button.borderRadius};
  color: ${(props) => props.theme.color || "#EDF1F7"};
  box-shadow: 0px 1px 2px rgba(0,0,0,0.1); 
  padding: 11px 35px 11px 35px;
  ${padding()};
  ${fontSize("button")};

  &:hover {
    transition: 200ms;
    background: ${theme.color.purpleAccent};
  }
`;

const Button: React.FC<ButtonComponent> = ({ children }) => (
  <Btn>{children}</Btn>
);

export default Button;
