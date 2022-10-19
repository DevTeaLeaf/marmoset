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

const binanceSmartChain = {
  id: 56,
  name: "Binance Smart Chain",
  network: "binanceSmartChain",
  nativeCurrency: {
    decimals: 18,
    name: "Binance",
    symbol: "BNB",
  },
  rpcUrls: {
    default: "https://bsc-dataseed.binance.org",
  },
  blockExplorers: {
    default: { name: "BSC Scan", url: "https://bscscan.com" },
  },
  testnet: false,
};

const config = {
  projectId: process.env.REACT_APP_PROJECTID,
  theme: "dark",
  accentColor: "orange",
  ethereum: {
    appName: "web3Modal",
    chains: [binanceSmartChain],
    providers: [
      providers.walletConnectProvider({
        projectId: process.env.REACT_APP_PROJECTID,
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
