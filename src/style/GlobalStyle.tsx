import { ReactNode, FunctionComponent } from "react";
import { ThemeProvider, Global } from "@emotion/react";
import emotionReset from "emotion-reset";
import theme from "./theme";

interface GlobalStyleProps {
  children: ReactNode;
}

/**
 * @typedef Props
 * @prop {ReactNode} children
 */

/**
 * @param {Props} props
 * @return {FunctionComponent<GlobalStyleProps>}
 */
const GlobalStyle: FunctionComponent<GlobalStyleProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={{
          emotionReset,

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
