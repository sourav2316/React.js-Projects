import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { StyleSheetManager } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StyleSheetManager
      shouldForwardProp={isPropValid}
      disableVendorPrefixes={false}
    >
      <App />
    </StyleSheetManager>
  </React.StrictMode>
);
