import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "./translate/i18n";
import App from "./App";
import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";
import { Web3Modal } from "@web3modal/react";
import { chains, providers } from "@web3modal/ethereum";
import { binanceSmartChain } from "./web3/connector";

const config = {
  projectId: "7296e0dacbac58b95a24313f1e929093",
  theme: "dark",
  accentColor: "orange",
  ethereum: {
    appName: "web3Modal",
    chains: [binanceSmartChain],
    providers: [
      providers.walletConnectProvider({
        projectId: "7296e0dacbac58b95a24313f1e929093",
      }),
    ],
  },
};

const getLibrary = (provider) => {
  return new Web3(provider);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Web3ReactProvider getLibrary={getLibrary}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
        <Web3Modal config={config} />
      </BrowserRouter>
    </React.StrictMode>
  </Web3ReactProvider>
);
