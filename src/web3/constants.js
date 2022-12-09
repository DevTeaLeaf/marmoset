import { providers } from "@web3modal/ethereum";
import { binanceSmartChain } from "./connector";

export const LOTTERY = "0x422D9AE3D58AAf94038791f796B5E1096Fd77905";
export const TOKEN = "0x3b5328d38a795514e044081fcaa764013715c666";
export const GAS = 360000;
export const CONFIG = {
  projectId: process.env.PROJECT_ID,
  theme: "dark",
  accentColor: "orange",
  ethereum: {
    appName: "web3Modal",
    chains: [binanceSmartChain],
    providers: [
      providers.walletConnectProvider({
        projectId: process.env.PROJECT_ID,
      }),
    ],
  },
};
