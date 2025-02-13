import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { HashRouter } from "react-router-dom";
import TicketContextProvider from "./Context/TicketContext.jsx";

createRoot(document.getElementById("root")).render(
  <HashRouter>
    <TicketContextProvider
    <StrictMode>
      <App />
    </StrictMode>
  </HashRouter>
);
