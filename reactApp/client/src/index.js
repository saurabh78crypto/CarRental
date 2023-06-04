import React from 'react';
// import ReactDOM from 'react-dom/client';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import { Auth0Provider } from '@auth0/auth0-react';

const root = document.getElementById('root');
// const root = ReactDOM.createRoot(document.getElementById('root'));
render(
  // <React.StrictMode> <React.StrictMode/>
    <Auth0Provider
    domain="dev-ua5neyyihaixejwe.us.auth0.com"
    clientId="5b27k6VDM6C115dKOTdTzZm3aZj1i3ow"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Auth0Provider>
  ,
  root
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
