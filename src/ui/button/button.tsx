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
  font-family: ${theme.font.secondary};
  padding: 11px 35px 11px 35px;
  ${padding()};
  font-weight: 700;
  background: ${theme.color.purple};
  border: ${theme.button.border};
  border-radius: ${theme.button.borderRadius};
  color: ${(props) => props.theme.color || "#EDF1F7"};
  ${fontSize("button")};
`;

const Button: React.FC<ButtonComponent> = ({ children }) => (
  <Btn>{children}</Btn>
);

export default Button;
