import "./index.css";
import "react-tooltip/dist/react-tooltip.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Tooltip } from "react-tooltip";
import App from "./App.jsx";

createRoot(document.getElementsByTagName("body")[0]).render(
  <StrictMode>
    <Tooltip id="tooltip" />
    <App />
  </StrictMode>
);
