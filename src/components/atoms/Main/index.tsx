import { ReactNode, FunctionComponent } from "react";
import StyledMain from "./Main.style";

interface MainProps {
  children: ReactNode;
}

/**
 * @typedef Props
 * @prop {ReactNode} children
 */

/**
 * @param {Props} props
 * @return {FunctionComponent<MainProps>}
 */
const Main: FunctionComponent<MainProps> = ({ children }) => {
  return <StyledMain>{children}</StyledMain>;
};

export default Main;
