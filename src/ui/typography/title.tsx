import React from 'react';
import styled, { DefaultTheme, ThemedStyledInterface } from 'styled-components';
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

styled.h1``;

const titlesArray = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
const titles: { [key: string]: ThemedStyledInterface<DefaultTheme> } = {};

for (let i = 0; i < titlesArray.length; i++) {
  const title: string = titlesArray[i];

  titles[title] = styled[title]`
    font-size: 8pt;
    color: ${props => props.theme.color || 'black'};
    ${fontSize(title)};
  `;
}

const Title: React.FC<TitleComponent> = ({ type, children }) => {
  const Title = titles[type];
  if (!Title) return null;
  return <Title>{children}</Title>;
};

Title.defaultProps = {
  type: 'h1'
};

export default Title;
