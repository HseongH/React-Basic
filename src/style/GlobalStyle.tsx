import React from "react";
import { ThemeProvider, Global } from "@emotion/react";
import emotionReset from "emotion-reset";
import theme from "./theme";

interface GlobalStyleProps {
  children: React.ReactNode;
}

/**
 * @typedef Props
 * @prop {React.ReactNode} children
 */

/**
 * @param {Props} props
 * @return {React.FC<GlobalStyleProps>}
 */
const GlobalStyle: React.FunctionComponent<GlobalStyleProps> = ({
  children,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={{
          emotionReset,

          ":root": {
            backgroundColor: theme.palette.common.main,
            color: theme.palette.common.text,
            fontSize: theme.typography.fontSize,
            fontWeight: theme.typography.fontWeight,
            fontFamily: theme.typography.fontFamily,
            lineHeight: theme.typography.lineHeight,
          },

          "*, *::after, *::before": {
            boxSizing: "border-box",
            fontSmoothing: "antialiased",
            "-moz-osx-font-smoothing": "grayscale",
            "-webkit-font-smoothing": "antialiased",
          },
        }}
      />
      {children}
    </ThemeProvider>
  );
};

export default GlobalStyle;
