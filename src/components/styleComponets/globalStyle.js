import { createGlobalStyle } from "styled-components";
import { Colors } from "./styleVariables";
export const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  color: ${Colors.dark};

}
`;
