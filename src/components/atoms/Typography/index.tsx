import { ReactNode, FunctionComponent } from "react";

import {
  StyledH1,
  StyledH2,
  StyledH3,
  StyledH4,
  StyledSubTitle,
  StyledBody1,
  StyledBody2,
} from "./Typography.style";

interface TypoPropsInterface {
  variant?: string;
  children: ReactNode;
}

/**
 * @typedef Props
 * @prop {string} variant
 * @prop {ReactNode} children
 */

/**
 * @param {Props} props
 * @return {FunctionComponent<TypoPropsInterface>}
 */
const Typography: FunctionComponent<TypoPropsInterface> = ({
  variant,
  children,
}) => {
  switch (variant) {
    case "h1":
      return <StyledH1>{children}</StyledH1>;

    case "h2":
      return <StyledH2>{children}</StyledH2>;

    case "h3":
      return <StyledH3>{children}</StyledH3>;

    case "h4":
      return <StyledH4>{children}</StyledH4>;

    case "h5":
      return <StyledSubTitle>{children}</StyledSubTitle>;

    case "body2":
      return <StyledBody2>{children}</StyledBody2>;

    default:
      return <StyledBody1>{children}</StyledBody1>;
  }
};

export default Typography;
