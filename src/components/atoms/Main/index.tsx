import { ReactNode, FunctionComponent } from "react";
import StyledMain from "./Main.style";

interface MainPropsInterface {
  children: ReactNode;
}

/**
 * @typedef Props
 * @prop {ReactNode} children
 */

/**
 * @param {Props} props
 * @return {FunctionComponent<MainPropsInterface>}
 */
const Main: FunctionComponent<MainPropsInterface> = ({ children }) => {
  return <StyledMain>{children}</StyledMain>;
};

export default Main;
