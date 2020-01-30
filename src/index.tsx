import React from "react";
import ReactDOM from "react-dom";
import { Root } from "./Root";
import { App } from "./App";

ReactDOM.render(
  <Root>
    <App />
  </Root>,
  document.getElementById("root"),
);

// @ts-ignore
if (module.hot) {
  // @ts-ignore
  module.hot.accept();
}
