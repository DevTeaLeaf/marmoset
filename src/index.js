import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import Web3 from "web3";
import { Web3Modal } from "@web3modal/react";
import { Web3ReactProvider } from "@web3-react/core";

import App from "./App";

import { CONFIG } from "./web3/constants.js";

import "./index.css";
import "./translate/i18n";

const getLibrary = (provider) => {
  return new Web3(provider);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Web3ReactProvider getLibrary={getLibrary}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
        <Web3Modal config={CONFIG} />
      </BrowserRouter>
    </React.StrictMode>
  </Web3ReactProvider>
);
