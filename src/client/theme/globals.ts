import { createGlobalStyle } from "styled-components"
import styledNormalize from "styled-normalize"

// tslint:disable-next-line no-unused-expression
const GlobalStyle = createGlobalStyle`
  ${
    // @ts-ignore
    styledNormalize
  }

  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    font-family: Arial;
  }

  textarea, select, input, button {
    outline: none;
  }
`;

export default GlobalStyle