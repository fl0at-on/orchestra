import React from "react";
import ReactDOM from "react-dom";

import Routing from "/router.js";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  rootElement
);
