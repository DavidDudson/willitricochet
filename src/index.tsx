import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import App from "./containers/App";

const rootEl = document.getElementById("root");
ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  rootEl
);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept("./containers/App", () => {
    const NextApp = require<RequireImport>("./containers/App").default;
    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      rootEl
    );
  });
}
