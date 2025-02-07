import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App/App";
import React from "react";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
