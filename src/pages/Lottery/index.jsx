import React from "react";
import { useState, createRef, useEffect } from "react";

import { Header } from "../../components/Header";
import Footer from "../../components/Footer";
import { Cell } from "../../components/Cell";
import { Table } from "../../components/Table";
import { Input } from "../../components/Input";
import { InputCell } from "../../components/InputCell";
import axios from "axios";

import rules from "../../assets/img/rules.png";
import marmoset1 from "../../assets/img/marmoset1.png";
import marmoset2 from "../../assets/img/marmoset2.png";
import marmoset3 from "../../assets/img/marmoset3.png";
import management from "../../assets/img/management.png";
import share from "../../assets/img/share.png";

import scratches from "../../assets/img/scratches.png";

import { Link } from "react-router-dom";

import i18n from "../../translate/i18n";
import { withNamespaces } from "react-i18next";

import lotteryABI from "../../web3/abi/lottery.json";
import tokenABI from "../../web3/abi/token.json";
import { LOTTERY, TOKEN, GAS } from "../../web3/constants.js";

import { ethers } from "ethers";
import { useAccount, useSigner } from "@web3modal/react";
const Lottery = ({ t }) => {
  const input1 = createRef();
  const input2 = createRef();
  const input3 = createRef();
  const input4 = createRef();
  const input5 = createRef();
  const input6 = createRef();

  const cellArr = [1, 2, 3, 4, 5, 6];

  const [buy, setBuy] = useState(false);
  const [time, setTime] = useState(false);
  const [now, setNow] = useState(false);
  const [firstDate, setFirstDate] = useState(false);
  const [inDayTime, setInDayTime] = useState(false);

  const inputRefs = [input1, input2, input3, input4, input5, input6];
  const validateInputs = () => {
    let counter = 0;
    setBuy(false);
    inputRefs.forEach((e) => {
      if (e.current.value != "") {
        counter++;
      }
    });
    if (counter == 6 && now < firstDate) {
      setBuy(true);
    }
  };
  const none = () => {
    return;
  };
  const reset = () => {
    inputRefs.map((e) => {
      return (e.current.value = "");
    });
    setBuy(false);
  };

  const generateRandom = () => {
    if (now < firstDate) {
      setBuy(true);
    }
    inputRefs.map((e) => {
      let rand = 0 + Math.random() * (9 + 1 - 0);
      return (e.current.value = Math.floor(rand));
    });
  };
  const timeDiff = (oldDate, newDate) => {
    let diff = Math.floor((new Date(oldDate) - new Date(newDate)) / 1000);
    const days = Math.floor(diff / 86400);
    diff -= days * 86400;
    const hours = Math.floor(diff / 3600) % 24;
    diff -= hours * 3600;
    const minutes = Math.floor(diff / 60) % 60;

    return [days, hours, minutes];
  };
  const inDayTimeDiff = (oldDate, newDate) => {
    const diff = Math.floor((new Date(oldDate) - new Date(newDate)) / 1000);
    const hours = (diff / 3600) ^ 0;
    const minutes = ((diff - hours * 3600) / 60) ^ 0;
    const seconds = diff - hours * 3600 - minutes * 60;
    return [minutes, seconds];
  };
  ////web3
  const [activeTable, setActiveTable] = useState(false);
  const [played, setPlayed] = useState(false);
  const { address, connectorAccount, isConnected } = useAccount();
  const { data, error, isLoading, refetch } = useSigner();
  let [tokenContract, setTokenContract] = useState(false);
  const [lotteryInfo, setLotteryInfo] = useState([
    "asdas",
    "ghfgh",
    "dghdf",
    "fgh",
    "qwed",
    "hegwe",
  ]);
  const [jackpot, setJackpot] = useState("");
  const [lotteryContract, setLotteryContract] = useState(false);
  const [number, setNumber] = useState(false);

  let lotteryNumber;
  let myChoice;
  let myWon;

  const getLotteryData = async () => {
    lotteryNumber = await lotteryContract.currentLotteryNumberInfo();
    lotteryNumber = parseInt(lotteryNumber._hex, 16);
    setNumber(lotteryNumber);

    myChoice = await lotteryContract.showMyNumber(address, lotteryNumber);
    myChoice = myChoice.map((e) => parseInt(e._hex, 16));

    myWon = await lotteryContract.showMyWon(lotteryNumber);
    myWon = parseInt(myWon._hex, 16);

    let play = await lotteryContract.showPlayed(lotteryNumber);

    let getJackpot = await lotteryContract.getJackpot();
    getJackpot = (parseInt(getJackpot._hex, 16) / 10 ** 18).toFixed(2);

    //let lotteryDate = await lotteryContract.showLotteryDate(lotteryNumber);
    //lotteryDate = parseInt((lotteryDate._hex, 16) * 1000);
    //let lotteryDate = 1667426400000;
    //lotteryDate = String(new Date(lotteryDate)).split(" ");
    //console.log(lotteryDate);

    let nextNumber = await lotteryContract.getNextNumberTimer();
    nextNumber = nextNumber.map((e) => parseInt(e._hex, 16) * 1000);

    setFirstDate(nextNumber[0]);
    setNow(Date.now());

    if (now < nextNumber[0]) {
      setTime(timeDiff(nextNumber[0], now));
    } else {
      setBuy(false);
      if (now > nextNumber[0] && now < nextNumber[1]) {
        setInterval(() => {
          setInDayTime(inDayTimeDiff(nextNumber[1], now));
        }, 1000);
      } else if (now > nextNumber[1] && now < nextNumber[2]) {
        setInterval(() => {
          setInDayTime(inDayTimeDiff(nextNumber[2], now));
        }, 1000);
      } else if (now > nextNumber[2] && now < nextNumber[3]) {
        setInterval(() => {
          setInDayTime(inDayTimeDiff(nextNumber[3], now));
        }, 1000);
      } else if (now > nextNumber[3] && now < nextNumber[4]) {
        setInterval(() => {
          setInDayTime(inDayTimeDiff(nextNumber[4], now));
        }, 1000);
      } else if (now > nextNumber[4] && now < nextNumber[5]) {
        setInterval(() => {
          setInDayTime(inDayTimeDiff(nextNumber[5], now));
        }, 1000);
        setLotteryContract;
      }
    }

    setJackpot(getJackpot);
    setActiveTable([lotteryNumber, myChoice, myWon]);
    setPlayed(play);
  };
  const initProvider = async (e) => {
    const signer = data;
    setLotteryContract(new ethers.Contract(LOTTERY, lotteryABI, signer));
    setTokenContract(new ethers.Contract(TOKEN, tokenABI, signer));

    getLotteryData();
  };
  const buyTicket = async (e) => {
    const inputData = inputRefs.map((e) => {
      return e.current.value;
    });
    if (buy) {
      try {
        const needToPay = await lotteryContract.getPrice(11000000000000000000n);

        let allowance = await tokenContract.allowance(address, LOTTERY);
        allowance = parseInt(allowance._hex, 16);

        if (allowance < needToPay) {
          await tokenContract.approve(LOTTERY, ethers.constants.MaxUint256, {
            gasLimit: GAS,
          });
        }

        await lotteryContract.buyTicket(inputData, { gasLimit: GAS });
      } catch (error) {
        console.log("Transaction failed with error:", error);
      }
    }
  };

  useEffect(() => {
    axios
      .get("https://marmosettoken.com:9080/lottery-engine/last-draw")
      .then((data) => {
        setLotteryInfo(data.data);
        if (data.data.receivedNums < 6) {
          let keysArr = ["a", "b", "c", "d", "e", "f"];
          keysArr.forEach((e) => {
            if (data.data.nums.length < 6) {
              data.data.nums.push(e);
            }
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
    if (isConnected) {
      initProvider();
    }
  }, [isConnected, address, data, buy, lotteryContract]);
  return (
    <>
      <Header />
      {isConnected ? (
        <div className="max-w-[1440px] mx-auto pt-[100px] md:pt-[140px]">
          <div className="xl:px-[120px] lg:px-[30px] flex items-center justify-center flex-col">
            <div className="text-[#fff] bg-rules_banner w-full relative mb-[60px]">
              <div className="flex items-center justify-between py-[14px] px-3 md:px-[30px]">
                <div className="evolventa-b text-[16px] md:text-[40px] leading-[133%]">
                  {`${t("lottery")} $${jackpot}(MMT) `}
                </div>
                <Link to="/rules">
                  <div className=" rounded-xl bg-[#3B3C4E]">
                    <div className="flex py-[5px] px-[12px] md:py-[16.5px] md:px-[30px] items-center">
                      <img src={rules} alt="rules" />
                      <p className="ml-[5px] md:text-[16px] text-[14px]">
                        {t("rules_link")}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
              <img
                src={marmoset1}
                alt="marmoset"
                className="absolute left-[40%] top-[-50px]  md:block hidden"
              />
              <img
                src={marmoset2}
                alt="marmoset"
                className="absolute left-[60%] top-[-50px]  md:block hidden"
              />
              <img
                src={marmoset3}
                alt="marmoset"
                className="absolute left-[65%] top-0 md:block hidden"
              />
              <img
                src={marmoset1}
                alt="marmoset"
                className="absolute block md:hidden w-[85.9px] h-[57.98px] bottom-[-30px] left-[25%]"
              />
              <img
                src={marmoset2}
                alt="marmoset"
                className="absolute md:hidden block w-[49.73px] h-[44.8px] top-[-30px] left-[50%]"
              />
              <img
                src={marmoset3}
                alt="marmoset"
                className="absolute md:hidden block w-[94px] h-[50px] bottom-[-22px] right-[10%]"
              />
            </div>
            <div className="w-full mb-[44px] md:mb-[87px]">
              <div className="mx-auto">
                <div className="flex items-center justify-between mb-6 max-w-[900px] md:mx-auto mx-[15px]">
                  <p className="text-[#fff] md:text-[24px] text-[16px] leading-[133%] evolventa-b">
                    {t("lottery_drawn_numbers")}
                  </p>
                  <a
                    href="https://www.binance.com/en/trade/BTC_USDT"
                    className="text-[#0EB78C] evolventa-r md:text-[22px] text-[14px] leading-[133%]"
                  >
                    www.binance.com
                  </a>
                </div>
                <div className="flex items-center justify-between max-w-[900px] mx-[15px] md:mx-auto mb-[10px]">
                  {lotteryInfo.nums
                    ? lotteryInfo.nums.map((e, i) => {
                        return <Cell number={e} key={i} />;
                      })
                    : lotteryInfo.map((e) => {
                        return <Cell key={e} />;
                      })}
                </div>
                <div className="flex ites-center max-w-[900px] mx-auto md:ml-auto ml-[15px]">
                  <p className="mr-[6px] text-[#fff] evolventa-r text-[12px] md:text-[18px] leading-[133%]">
                    {t("lottery_next_numbers")}
                  </p>
                  <p className="text-[#0EB78C] evolventa-b text-[14px] md:text-[18px] leading-[133%]">
                    {time
                      ? `${time[0]} days ${time[1]} hours ${time[2]} minutes`
                      : inDayTime
                      ? `${inDayTime[0]}:${inDayTime[1]}`
                      : ""}
                  </p>
                </div>
              </div>
              <div className="mx-auto max-w-[900px] mt-[54px]">
                <p className="eveoventa-b text-[#fff] text-[16px] md:text-[24px] leading-[133%] mb-[25px] ml-[15px] md:ml-auto ">
                  {t("lottery_selected_numbers")}
                </p>
                <div className="flex items-center justify-between max-w-[900px] mx-[15px] mb-[45px] md:mx-auto">
                  {isConnected && played
                    ? activeTable[1].map((e, i) => {
                        return (
                          <InputCell
                            info={lotteryInfo.nums}
                            turn={i}
                            number={e.toString()}
                            key={i}
                          />
                        );
                      })
                    : isConnected
                    ? inputRefs.map((e, i) => {
                        return (
                          <Input
                            innerRef={e}
                            key={i}
                            validate={validateInputs}
                          />
                        );
                      })
                    : cellArr.map((e) => {
                        return <Cell key={e} />;
                      })}
                </div>
                <div className="flex items-center justify-center md:justify-between flex-wrap md:flex-nowrap">
                  <div className="flex items-center md:mb-auto mb-[37px]">
                    <button
                      onClick={
                        isConnected && played
                          ? none
                          : isConnected
                          ? buyTicket
                          : none
                      }
                      className={`${
                        buy ? "button-design-buy" : "button-design-null"
                      } md:mr-auto mr-[9px]`}
                    >
                      <p>{t("lottery_buy")}</p>
                    </button>
                    <button
                      onClick={
                        isConnected && played
                          ? none
                          : isConnected
                          ? reset
                          : none
                      }
                      className="bg-[#FF1791] rounded-[8px] block md:hidden"
                    >
                      <p className="poppins font-bold text-[generateRandom16px] leading-6 py-[8.5px] px-[21.5px] text-[#fff]">
                        {t("lettery_reset")}
                      </p>
                    </button>
                  </div>
                  <button
                    onClick={
                      isConnected && played
                        ? none
                        : isConnected
                        ? generateRandom
                        : none
                    }
                    className="button-design"
                  >
                    <p>{t("lottery_generate")}</p>
                  </button>
                  <button
                    onClick={
                      isConnected && played ? none : isConnected ? reset : none
                    }
                    className="bg-[#FF1791] rounded-[8px] hidden md:block"
                  >
                    <p className="poppins font-bold text-[16px] leading-6 py-[8.5px] px-[21.5px] text-[#fff]">
                      {t("lettery_reset")}
                    </p>
                  </button>
                </div>
              </div>
            </div>
            <div className="mb-[242px] w-full relative">
              <div className="flex items-center justify-between mb-[25px] flex-col md:flex-row">
                <h1 className="evolventa-b text-[#fff] text-[16px] md:text-[24px] mb-[17px] md:mb-auto text-center md:text-left mx-auto md:mx-0">
                  {t("lottery_archive")}
                </h1>
                <div className="flex items-center md:flex-row flex-col justify-center md:justify-between">
                  <Link to="/management_lottery">
                    <button className="button-modal-design md:mr-[13px] flex items-center">
                      <img src={management} alt="management" className="" />
                      <p>{t("management")}</p>
                    </button>
                  </Link>
                  <Link to="/share">
                    <button className="button-modal-design md:ml-[13px] flex items-center mt-[17px] md:mt-auto">
                      <img src={share} alt="share" />
                      <p>{t("share")}</p>
                    </button>
                  </Link>
                </div>
              </div>
              {played && number != 1 ? (
                <Table data={activeTable} numbers={lotteryInfo.nums} />
              ) : played ? (
                <p className="text-[#0EB78C] evolventa-b mx-[auto] text-center text-[20px] md:text-[64px] leading-[133%] px-[19px] md:px-[45px]"></p>
              ) : (
                <p className="text-[#0EB78C] evolventa-b mx-[auto] text-center text-[20px] md:text-[64px] leading-[133%] px-[19px] md:px-[45px]">
                  Please buy first ticket!
                </p>
              )}
              <img
                src={scratches}
                alt="scratches"
                className="absolute left-0 bottom-[-200px] rotate-[-180deg]"
              />
              <img
                src={scratches}
                alt="scratches"
                className="absolute right-0 bottom-[-200px] rotate-[-80deg]"
              />
            </div>
          </div>
        </div>
      ) : (
        <p className="text-[#0EB78C] evolventa-b mx-[auto] my-[auto] text-center text-[50px] md:text-[84px] leading-[133%] py-[340px]">
          Please connect your wallet!
        </p>
      )}
      <Footer />
    </>
  );
};

export default withNamespaces()(Lottery);
