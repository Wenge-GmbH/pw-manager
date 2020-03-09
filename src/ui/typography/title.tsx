import React from "react";
import styled from "styled-components";

type TitleComponent = {
  type: string;
  color?: string;
  style?: object;
}

const H1 = styled.h1`
  font-size: "12pt";
  color: ${props => props.color || "black"};
`;
const H2 = styled.h2`
  font-size: "12pt";
  color: ${props => props.color || "black"};
`;
const H3 = styled.h4`
  font-size: "12pt";
  color: ${props => props.color || "black"};
`;
const H4 = styled.h4`
  font-size: "12pt";
  color: ${props => props.color || "black"};
`;
const H5 = styled.h5`
  font-size: "12pt";
  color: ${props => props.color || "black"};
`;
const H6 = styled.h6`
  font-size: "12pt";
  color: ${props => props.color || "black"};
`;

const Title: React.FC<TitleComponent> = ({ type, children }) => {
  switch (type) {
    case "h1":
      return <H1>{children}</H1>;
    default:
      return <div></div>;
  }
};

export default Title;
