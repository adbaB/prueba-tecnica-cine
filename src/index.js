import React from "react";
import ReactDOM from "react-dom/client";
import { FilterProvider } from "./Context/CineContext";
import "./index.css";
import App from "./Components/App/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FilterProvider>
      <App />
    </FilterProvider>
  </React.StrictMode>
);
