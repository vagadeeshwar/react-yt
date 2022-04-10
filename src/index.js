import React from "react";
import { createRoot } from "react-dom";
import "./index.css";
import App from "./App";

const root = createRoot(document.querySelector("#root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
