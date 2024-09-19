import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { createRouter } from "./utils/router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App>
      <RouterProvider router={createRouter()} />
    </App>
  </StrictMode>
);
