import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Auth0Provider from "./auth/auth0-provider-with-history";

const domain = import.meta.env.SPORTIVA_AUTH0_DOMAIN;
const clientId = import.meta.env.SPORTIVA_AUTH0_CLIENT_ID;

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <App />
  </Auth0Provider>
);
