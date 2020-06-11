import React from "react";
import ReactDOM from "react-dom";
import Routes from "./pages/Routes";
import registerServiceWorker from "./registerServiceWorker";
import "./theme/globals";
import GlobalStyle from "./theme/globals";
import { theme } from "./theme/theme";
import { ThemeProvider } from "styled-components";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    {/* TODO: should be filled dinamically based on browser language */}
      <Routes />
      <GlobalStyle />
  </ThemeProvider>,
  document.getElementById("root") as HTMLElement
);

registerServiceWorker();
