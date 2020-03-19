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
  font-size: 8pt;
  color: ${props => props.theme.color || 'black'};
  ${fontSize('h1')};
`;
const H2 = styled.h2`
  font-size: '12pt';
  color: ${props => props.theme.color || 'black'};
`;
const H3 = styled.h4`
  font-size: '12pt';
  color: ${props => props.theme.color || 'black'};
`;
const H4 = styled.h4`
  font-size: '12pt';
  color: ${props => props.theme.color || 'black'};
`;
const H5 = styled.h5`
  font-size: '12pt';
  color: ${props => props.theme.color || 'black'};
`;
const H6 = styled.h6`
  font-size: '12pt';
  color: ${props => props.theme.color || 'black'};
`;

const Title: React.FC<TitleComponent> = ({ type, children }) => {
  switch (type) {
    case 'h1':
      return <H1>{children}</H1>;
    case 'h2':
      return <H2>{children}</H2>;
    case 'h3':
      return <H3>{children}</H3>;
    case 'h4':
      return <H4>{children}</H4>;
    case 'h5':
      return <H5>{children}</H5>;
    case 'h6':
      return <H6>{children}</H6>;
    default:
      return null;
  }
};

Title.defaultProps = {
  type: 'h1'
};

export default Title;
