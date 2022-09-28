import "@emotion/react";

// Palette Type
interface ElemColorInterface {
  main: string;
  light: string;
  dark: string;
  text: string;
}

interface TextColorInterface {
  primary: string;
  secondary: string;
  disabled: string;
}

interface PaletteInterface {
  mode: string;
  common: ElemColorInterface;
  primary: ElemColorInterface;
  secondary: ElemColorInterface;
  error: ElemColorInterface;
  warning: ElemColorInterface;
  info: ElemColorInterface;
  success: ElemColorInterface;
  text: TextColorInterface;
  divider: string;
  disabledOpacity: number;
}

// Typography Type
interface FontInterface {
  fontSize: string;
  fontWeight: number;
  lineHeight: number;
}

interface TypographyInterface {
  fontSize: string;
  fontWeight: number;
  fontFamily: string;
  lineHeight: number;
  h1: FontInterface;
  h2: FontInterface;
  h3: FontInterface;
  h4: FontInterface;
  subTitle: FontInterface;
  body1: FontInterface;
  body2: FontInterface;
}

declare module "@emotion/react" {
  export interface Theme {
    palette: PaletteInterface;
    typography: TypographyInterface;
    spacing: Array<string>;
    pageWidth: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
    };
  }
}
