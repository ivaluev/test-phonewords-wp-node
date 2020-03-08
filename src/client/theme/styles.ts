import { injectGlobal } from "./index";
import styledNormalize from "styled-normalize";

// tslint:disable-next-line no-unused-expression
injectGlobal`
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
