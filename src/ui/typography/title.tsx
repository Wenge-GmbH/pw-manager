import React from 'react';
import styled from 'styled-components';
import { theme } from '../theme';

const fontSize = (key: string) => {
  return Object.keys(theme.mediaQuery).map(data => {
    return `@media (min-width: ${theme.mediaQuery[data]}px) {
      font-size: ${theme.fontSize[key][data]}
    }`;
  });
};

type TitleComponent = {
  type: string;
  style?: object;
};

const H1 = styled.h1`
  margin: 0;
  font-size: 16pt;
  font-family: ${theme.font.primary};
  color: ${props => props.theme.color || 'black'};
  ${fontSize('h1')};
`;
const H2 = styled.h2`
  margin: 0;
  font-size: 15pt;
  font-family: ${theme.font.primary};
  color: ${props => props.theme.color || "black"};
  ${fontSize("h2")};
`;
const H3 = styled.h3`
  margin: 0;
  font-size: 14pt;
  font-family: ${theme.font.primary};
  color: ${props => props.theme.color || "black"};
  ${fontSize("h3")};
`;
const H4 = styled.h4`
  margin: 0;
  font-size: 13pt;
  font-family: ${theme.font.primary};
  color: ${props => props.theme.color || "black"};
  ${fontSize("h4")};
`;
const H5 = styled.h5`
  margin: 0;
  font-size: 12pt;
  font-family: ${theme.font.primary};
  color: ${props => props.theme.color || "black"};
  ${fontSize("h5")};
`;
const H6 = styled.h6`
  margin: 0;
  font-size: 11pt;
  font-family: ${theme.font.primary};
  color: ${props => props.theme.color || "black"};
  ${fontSize("h6")};
`;

const Title: React.FC<TitleComponent> = ({children, type, ...props}) => {
  switch (type) {
    case 'h1':
      return <H1 {...props} >{children}</H1>;
    case 'h2':
      return <H2 {...props} >{children}</H2>;
    case 'h3':
      return <H3 {...props} >{children}</H3>;
    case 'h4':
      return <H4 {...props} >{children}</H4>;
    case 'h5':
      return <H5 {...props} >{children}</H5>;
    case 'h6':
      return <H6 {...props} >{children}</H6>;
    default:
      return null;
  }
};

Title.defaultProps = {
  type: 'h1'
};

export default Title;
