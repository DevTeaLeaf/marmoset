import React from "react";
import { useState } from "react";

import logo from "../../assets/img/logo.png";
import arrowDown from "../../assets/img/arrow-down.png";
import wallet from "../../assets/img/wallet.png";

import "./header.css";

import { Link } from "react-router-dom";

import LanguagesModal from "../LanguagesModal";
import i18n from "../../translate/i18n";

import { useAccount, useConnectModal } from "@web3modal/react";
import { ScrollToTop } from "../ScrollToTop";

export const Header = (props) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [modalActive, setModalActive] = useState(false);

  const { isOpen, open, close } = useConnectModal();
  const { address, connectorAccount, isConnected } = useAccount();
  async function connect() {
    try {
      open();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <header>
      <nav className="fixed z-[1000000] w-full bg-black text-[#fff]">
        <div className="container flex justify-between items-center mx-auto xl:px-[120px] lg:px-[30px] h-[80px] lg:h-[118px] relative">
          <Link onClick={ScrollToTop} to="/">
            <div className="flex items-center lg:pl-0 md:pl-[26px] pl-[16px]">
              <img
                className="w-[36px] h-[36px] md:w-full md:h-full"
                src={logo}
                alt="Fundue logo"
              />
              <div className="pl-3 md:pl-5">
                <p className="md:univermag univermag-mini">MARMOSET</p>
                <p className="md:univermag univermag-mini">TOKEN</p>
              </div>
            </div>
          </Link>
          <div className="hidden lg:flex justify-between items-center DESKTOP-MENU space-x-8">
            <div className="flex justify-between items-center poppins">
              <Link
                className="font-light px-[18px] hover:text-[#0EB78C]"
                to="/"
              >
                Home
              </Link>
              <Link
                className="font-light px-[18px] hover:text-[#0EB78C]"
                to="/lottery"
              >
                Lottery
              </Link>
              <Link
                className="font-light px-[18px] hover:text-[#0EB78C]"
                to="/shop"
              >
                Shop MMT
              </Link>
              <Link
                className="font-light px-[18px] hover:text-[#0EB78C]"
                to="/whitepaper"
              >
                White Paper
              </Link>
            </div>
          </div>
          <div className="flex">
            <button
              className="bg-[#FF1791] rounded-[87px] max-w-[131px] mr-[50px] md:mr-[17px]"
              onClick={connect}
            >
              <div className="flex items-center px-4 py-1">
                <img src={wallet} alt="wallet" className="h-[13px] w-3" />
                <p className="ml-2 poppins text-[10px] font-semibold leading-6">
                  {address
                    ? address.slice(0, 5) + "..." + address.slice(-3)
                    : "Connect Wallet"}
                </p>
              </div>
            </button>
            <div className="hidden lg:flex justify-between items-center DESKTOP-MENU space-x-8">
              <div
                onClick={
                  modalActive
                    ? () => setModalActive(false)
                    : () => setModalActive(true)
                }
                className="flex cursor-pointer items-center poppins"
              >
                <div className="uppercase">{i18n.language}</div>
                <img
                  src={arrowDown}
                  alt="arrow"
                  className={
                    modalActive
                      ? "rotate-[180deg] transition-[0.5s]"
                      : "transition-[0.5s]"
                  }
                />
              </div>
              <LanguagesModal active={modalActive} setActive={setModalActive} />
            </div>
          </div>
          <section className="MOBILE-MENU flex lg:hidden absolute right-[16px] md:right-[26px]">
            <div
              className="HAMBURGER-ICON space-y-2 cursor-pointer"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <span className="block h-0.5 w-[12px] animate-pulse bg-[#0EB78C]"></span>
              <span className="block h-0.5 w-[21px] animate-pulse bg-[#0EB78C]"></span>
              <span className="block h-0.5 w-[12px] animate-pulse bg-[#0EB78C] ml-[10px]"></span>
            </div>

            <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
              <div
                className="flex items-center absolute top-0 left-0 px-8 py-8 cursor-pointer"
                onClick={
                  modalActive
                    ? () => setModalActive(false)
                    : () => setModalActive(true)
                }
              >
                <div className="uppercase">{i18n.language}</div>
                <img
                  src={arrowDown}
                  alt="arrow"
                  className={
                    modalActive
                      ? "rotate-[180deg] transition-[0.5s]"
                      : "transition-[0.5s]"
                  }
                />
              </div>
              <LanguagesModal active={modalActive} setActive={setModalActive} />
              <div
                className="absolute top-0 right-0 px-8 py-8 cursor-pointer"
                onClick={() => setIsNavOpen(false)}
              >
                <svg
                  className="h-8 w-8 text-[#0EB78C]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <div className="flex justify-center items-center flex-col w-full">
                <div className="text-[#fff] px-5 w-full">
                  <div className="flex justify-between items-center flex-col DESKTOP-MENU  poppins">
                    <Link className="font-light px-[18px]" to="/">
                      Home
                    </Link>
                    <Link
                      className="font-light px-[18px] py-[20px]"
                      to="/lottery"
                    >
                      Lottery
                    </Link>
                    <Link className="font-light px-[18px]" to="/shop">
                      Shop MMT
                    </Link>
                    <Link
                      className="font-light px-[18px] pt-[20px]"
                      to="/whitepaper"
                    >
                      White Paper
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </nav>
    </header>
  );
};
