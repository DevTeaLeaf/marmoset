import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { ethers } from "ethers";
import { useAccount, useSigner } from "@web3modal/react";
import { WinnerCol } from "../../components/WinnerCol";

import lotteryABI from "../../web3/abi/lottery.json";
import { LOTTERY } from "../../web3/constants.js";

import arrow from "../../assets/img/arrow-back.png";
export const Winners = () => {
  const [addr, setAddr] = useState([]);
  const [sum, setSum] = useState([]);

  const bubbleSort = (prices, names) => {
    let temp = {};
    for (var i = 0; i < names.length; i++) {
      temp[names[i]] = prices[i];
    }
    names.sort((a, b) => temp[b] - temp[a]);
    prices.sort((a, b) => b - a);

    let array = [];
    prices.forEach(async (e) => {
      const data = await lotteryContract.getPriceInUSD(BigInt(e));
      array.push(parseInt(data._hex, 16) / 10 ** 18);
    });
    setTimeout(() => {
      setSum(array);
      setAddr(names);
    }, 1000);
  };

  const { isConnected } = useAccount();
  const { data } = useSigner();

  let lotteryContract;
  let top20;
  let sums;
  let addresses;

  const initProvider = async (e) => {
    const signer = data;
    lotteryContract = new ethers.Contract(LOTTERY, lotteryABI, signer);

    top20 = await lotteryContract.getTop20();
    addresses = top20[0].slice();
    sums = top20[1].map((e) => parseInt(e._hex, 16));
    bubbleSort(sums.slice(0, 20), addresses.slice(0, 20));
  };
  useEffect(() => {
    if (isConnected) {
      initProvider();
    }
  }, [isConnected, data, addr, sum]);
  return (
    <>
      <div className="bg-winners min-w-[100vw] min-h-[100vh]">
        <div className="bg-winners max-w-[994px] mx-auto text-[#fff] px-[105px] py-[22px]">
          <div className="flex jsutify-center items-center flex-col">
            <div className="flex jsutify-center items-center flex-col mb-[50px]">
              <Link
                className="flex items-center cursor-pointer absolute left-0 top-0"
                to="/lottery"
              >
                <img src={arrow} alt="backpage" className="mr-[-10px]" />
                <p className="evolventa-b">Lottery</p>
              </Link>
              <h1 className="md:evolventa-b evolventa-m md:text-[40px] text-[16px] mb-[22px]">
                Top 20 Winners
              </h1>
              <div className="bg-[#fff] w-full h-[1px] mb-[7px]"></div>
            </div>
          </div>
          <div className="flex justify-center items-center flex-col shrink">
            {sum &&
              sum.map((e, i) => {
                return <WinnerCol address={addr[i]} win={e} key={i} />;
              })}
          </div>
        </div>
      </div>
    </>
  );
};
