import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import SignUpForm from "./BusinessRegistration";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <SignUpForm />
  </React.StrictMode>,
  rootElement
);
