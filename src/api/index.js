import axios from "axios";

export const getBtcNumber = async () => {
  const api = "https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT";
  let data = await axios.get(api);
  data = String(Math.trunc(data.data.price)).split("");
  data = data[data.length - 1];
  return Number(data);
};
