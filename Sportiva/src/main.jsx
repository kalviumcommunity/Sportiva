import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Auth0Provider from "./auth0/auth0-provider-with-history.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider>
    <App />
  </Auth0Provider>
);
