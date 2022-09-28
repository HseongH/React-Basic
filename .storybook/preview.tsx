import React from "react";
import GlobalStyle from "../src/style/GlobalStyle";

export const decorators = [
  (Story) => (
    <GlobalStyle>
      <Story />
    </GlobalStyle>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: "fullscreen",
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
