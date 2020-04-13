import React from 'react';
import { ThemeContext, ThemeProvider } from "styled-components";
import { Button} from "ui/index";

export default {
  title: "Button",
  decorators: [(storyFn: Function) => <div>{storyFn()}</div>],
};

export const ButtonVariants = () => (
  <Button>
    Login
  </Button>
);
