import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/index";
import { theme, ThemeProvider } from "src/client/theme/index";
import registerServiceWorker from "./registerServiceWorker";
import "./theme/styles";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    {/* TODO: should be filled dinamically based on browser language */}
      <App />
  </ThemeProvider>,
  document.getElementById("root") as HTMLElement
);

registerServiceWorker();
