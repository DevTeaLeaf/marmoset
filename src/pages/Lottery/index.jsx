import { useState, createRef } from "react";

import { Header } from "../../components/Header";
import Footer from "../../components/Footer";
import { Cell } from "../../components/Cell";
import { Table } from "../../components/Table";
import { Input } from "../../components/Input";
import { InputCell } from "../../components/InputCell";

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
import { LOTTERY, TOKEN, GAS, TOKENOWNER } from "../../web3/constants.js";

import { getBtcNumber } from "../../api";

import { ethers } from "ethers";
import { useAccount } from "@web3modal/react";
import { chains, providers } from "@web3modal/ethereum";

const Lottery = ({ t }) => {
  /*setInterval(async () => {
    console.log(await getBtcNumber());
  }, 100000);*/

  const cellArr = [1, 2, 3, 4, 5, 6];

  const input1 = createRef();
  const input2 = createRef();
  const input3 = createRef();
  const input4 = createRef();
  const input5 = createRef();
  const input6 = createRef();

  const [buy, setBuy] = useState(false);

  const inputRefs = [input1, input2, input3, input4, input5, input6];
  const validateInputs = () => {
    let counter = 0;
    setBuy(false);
    inputRefs.forEach((e) => {
      if (e.current.value != "") {
        counter++;
      }
    });
    if (counter == 6) {
      setBuy(true);
    }
  };
  const none = () => {
    return;
  };
  const reset = () => {
    setBuy(false);
    inputRefs.map((e) => {
      return (e.current.value = "");
    });
  };
  const generateRandom = () => {
    setBuy(true);
    inputRefs.map((e) => {
      let rand = 0 + Math.random() * (9 + 1 - 0);
      return (e.current.value = Math.floor(rand));
    });
  };
  ////web3
  const [activeTable, setActiveTable] = useState(false);
  const [played, setPlayed] = useState(false);
  const { address, connectorAccount, isConnected } = useAccount();

  let tokenContract;
  let lotteryContract;

  let lotteryNumber;
  let myChoice;
  let myWon;
  const getLotteryData = async () => {
    lotteryNumber = await lotteryContract.currentLotteryNumberInfo();
    lotteryNumber = parseInt(lotteryNumber._hex, 16);
    myChoice = await lotteryContract.showMyNumber(address, lotteryNumber);
    myChoice = myChoice.map((e) => parseInt(e._hex, 16));

    myWon = await lotteryContract.showMyWon(lotteryNumber);
    myWon = parseInt(myWon._hex, 16);

    let play = await lotteryContract.showPlayed(lotteryNumber);

    /*let getJackpot = await lotteryContract.getJackpot();
    getJackpot = (parseInt(getJackpot._hex, 16) / 10 ** 18).toFixed(2);*/
    setActiveTable([lotteryNumber, myChoice, myWon]);
    setPlayed(play);
  };
  if (isConnected) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    tokenContract = new ethers.Contract(TOKEN, tokenABI, signer);
    lotteryContract = new ethers.Contract(LOTTERY, lotteryABI, signer);

    getLotteryData();
  }
  const buyTicket = async (e) => {
    const data = inputRefs.map((e) => {
      return e.current.value;
    });
    if (buy) {
      try {
        let allowance = await tokenContract.allowance(TOKENOWNER, address);
        allowance = parseInt(allowance._hex, 16);
        if (allowance < ethers.constants.MaxUint256) {
          await tokenContract.approve(LOTTERY, ethers.constants.MaxUint256, {
            gasLimit: GAS,
          });
        }
        await lotteryContract.buyTicket(data, { gasLimit: GAS });
      } catch (error) {
        console.log("Transaction failed with error:", error);
      }
    }
  };
  return (
    <>
      <Header />
      <div className="max-w-[1440px] mx-auto pt-[100px] md:pt-[140px]">
        <div className="xl:px-[120px] lg:px-[30px] flex items-center justify-center flex-col">
          <div className="text-[#fff] bg-rules_banner w-full relative mb-[60px]">
            <div className="flex items-center justify-between py-[14px] px-3 md:px-[30px]">
              <div className="evolventa-b text-[16px] md:text-[40px] leading-[133%]">
                {t("lottery")}
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
                <Cell number={7} />
                <Cell number={2} />
                <Cell number={5} />
                <Cell number={6} />
                <Cell number={8} />
                <Cell />
              </div>
              <div className="flex ites-center max-w-[900px] mx-auto md:ml-auto ml-[15px]">
                <p className="mr-[6px] text-[#fff] evolventa-r text-[12px] md:text-[18px] leading-[133%]">
                  {t("lottery_next_numbers")}
                </p>
                <p className="text-[#0EB78C] evolventa-b text-[14px] md:text-[18px] leading-[133%]">
                  1:43
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
                      return <InputCell number={e.toString()} key={i} />;
                    })
                  : isConnected
                  ? inputRefs.map((e, i) => {
                      return (
                        <Input innerRef={e} key={i} validate={validateInputs} />
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
                      isConnected && played ? none : isConnected ? reset : none
                    }
                    className="bg-[#FF1791] rounded-[8px] block md:hidden"
                  >
                    <p className="poppins font-bold text-[16px] leading-6 py-[8.5px] px-[21.5px] text-[#fff]">
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
            {activeTable ? (
              played ? (
                <Table data={activeTable} />
              ) : (
                <p className="text-[#0EB78C] evolventa-b mx-[auto] text-center text-[20px] md:text-[64px] leading-[133%] px-[19px] md:px-[45px]">
                  Please buy first ticket!
                </p>
              )
            ) : (
              <p className="text-[#0EB78C] evolventa-b mx-[auto] text-center text-[20px] md:text-[64px] leading-[133%] px-[19px] md:px-[45px]">
                Please connect your wallet!
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
      <Footer />
    </>
  );
};

export default withNamespaces()(Lottery);
