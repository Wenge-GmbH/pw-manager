import React, { useContext } from "react";
import { ThemeContext, ThemeProvider } from "styled-components";
import { Title } from "ui/index";

export default {
  title: "Typography",
  decorators: [(storyFn: Function) => <div>{storyFn()}</div>]
};

export const TitleH1BisH6 = () => (
  <div>
    <Title type="h1" style={{ color: "blue" }}>
      TEST (づ｡◕__◕｡)づ
    </Title>
  </div>
);

