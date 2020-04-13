import React from "react";
import styled from "styled-components";
import { theme } from "../theme";

const fontSize = (key: string) => {
  return Object.keys(theme.mediaQuery).map(data => {
    return `@media (min-width: ${theme.mediaQuery[data]}px) {
      font-size: ${theme.fontSize[key][data]}
    }`;
  });
};

type TxtComponent = {
  style?: object;
};

const Txt = styled.p`
  font-family: ${theme.font.secondary};
  color: ${props => props.theme.color || "black"};
  ${fontSize("p")};
`;

const Text: React.FC<TxtComponent> = ({ children }) => (
  <Txt>{children}</Txt>
);

export default Text;
