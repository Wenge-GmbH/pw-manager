import React, { useContext } from "react";
import { ThemeContext, ThemeProvider } from "styled-components";
import { Title, Paragraph, Text } from "ui/index";

export default {
  title: "Typography",
  decorators: [(storyFn: Function) => <div>{storyFn()}</div>]
};

export const TitleH1BisH6 = () => (
  <div>
    <Title type="h1" style={{ color: "blue" }}>
      TEST (づ｡◕__◕｡)づ
    </Title>
    <Title type="h2" style={{ color: "blue" }}>
      TEST (づ｡◕__◕｡)づ
    </Title>
    <Title type="h3" style={{ color: "blue" }}>
      TEST (づ｡◕__◕｡)づ
    </Title>
    <Title type="h4" style={{ color: "blue" }}>
      TEST (づ｡◕__◕｡)づ
    </Title>
    <Title type="h5" style={{ color: "blue" }}>
      TEST (づ｡◕__◕｡)づ
    </Title>
    <Title type="h6" style={{ color: "blue" }}>
      TEST (づ｡◕__◕｡)づ
    </Title>
  </div>
);

export const Paragraphhhhh = () => (
  <div>
    <Paragraph type="h1" style={{ color: "blue" }}>
      TEST (づ｡◕__◕｡)づ
    </Paragraph>
  </div>
);

export const NormalText = () => (
  <div>
    <Text type="h1" style={{ color: "blue" }}>
      TEST (づ｡◕__◕｡)づ
    </Text>
  </div>
);