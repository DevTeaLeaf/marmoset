import { Header } from "../../components/Header";
import Footer from "../../components/Footer";
import Accordion from "../../components/Accordion/Accordion";
import Copy from "../../components/Copy";
import { Link } from "react-router-dom";

import telegram2 from "../../assets/img/telegram2.png";
import twitter from "../../assets/img/twitter.png";
import discord from "../../assets/img/discord.png";
import reddit from "../../assets/img/reddit.png";
import instagram from "../../assets/img/instagram.png";
import tiktok from "../../assets/img/tiktok.png";
import youtube from "../../assets/img/youtube.png";

import marmoset from "../../assets/img/marmoset.png";
import scratches from "../../assets/img/scratches.png";
import bscratches from "../../assets/img/b-scratches.png";
import bscscan from "../../assets/img/bscscan.png";
import pancake from "../../assets/img/pancakeswap.png";
import coingecko from "../../assets/img/coingecko.png";
import coinmarketcap from "../../assets/img/coinmarketcap.png";
import ambirewallet from "../../assets/img/ambire-wallet.png";
import ambiread from "../../assets/img/ambire-ad.png";
import logo from "../../assets/img/logo.png";
import pancakeswap from "../../assets/img/pancake.png";
import minScratches from "../../assets/img/min-scratches.png";
import aax from "../../assets/img/aax.png";

import crypto1 from "../../assets/img/crypto1.png";
import crypto2 from "../../assets/img/crypto2.png";
import crypto3 from "../../assets/img/crypto3.png";
import crypto4 from "../../assets/img/crypto4.png";
import crypto5 from "../../assets/img/crypto5.png";

import icon1 from "../../assets/img/icon1.png";
import icon2 from "../../assets/img/icon2.png";
import icon3 from "../../assets/img/icon3.png";
import icon4 from "../../assets/img/icon4.png";
import tokenomic from "../../assets/img/tokenomics.svg";
import paw from "../../assets/img/paw.png";

import Slider from "../../components/Slider";

import check from "../../assets/img/check.png";

import i18n from "../../translate/i18n";
import { withNamespaces } from "react-i18next";

const Home = ({ t }) => {
  return (
    <>
      <Header />
      <div className="max-w-[1440px] mx-auto">
        <div className="xl:px-[120px] lg:px-[30px] px-[15px] lg:flex-row flex-col flex items-center relative pt-[65px] md:pt-[118px]">
          <div className="flex flex-col lg:items-start items-center mr-[10px]">
            <div className="evolventa-b text-[20px] md:text-[31px] text-[#0CB98B] mb-3 text-center lg:text-left md:mt-0 mt-[30px]">
              {t("home_title")}
            </div>
            <div className="poppints font-[300] text-[#fff] text-[18px] text-center lg:text-left hidden md:block">
              <p className="mb-3">{t("home_pretitle")}</p>
              <p>
                {t("home_pretitle_shiba")}
                <br />
                {t("home_pretitle_allgood")}
                <br />
                {t("home_pretitle_chance")}
              </p>
            </div>
            <div className="mt-10 md:flex items-center justify-center hidden">
              <a href="https://t.me/marmosettokenGlobal" className="mr-[15px]">
                <img src={telegram2} alt="telegram" />
                <p className="poppints font-[300] text-[#fff] text-[16px] mt-2 text-center">
                  Telegram
                </p>
              </a>
              <a
                href="https://pancakeswap.finance/swap?outputCurrency=0x3B5328D38a795514E044081fcaa764013715C666"
                className="ml-[15px]"
              >
                <img src={pancakeswap} alt="pancake" />
                <p className="poppints font-[300] text-[#fff] text-[16px] mt-2 text-center">
                  PancakeSwap
                </p>
              </a>
            </div>
          </div>
          <img src={marmoset} alt="marmoset" className="ml-[10px]" />
          <img
            src={scratches}
            alt="scratches"
            className="absolute bottom-0 right-0 z-[-1] hidden md:block"
          />
          <img
            src={minScratches}
            alt="scratches"
            className="absolute bottom-[50%] right-[-15px] z-[-1] md:hidden"
          />
          <img
            src={minScratches}
            alt="scratches"
            className="absolute bottom-[50%] left-[-30px] z-[-1] md:hidden rotate-[250deg]"
          />
          <div className="poppints font-[300] text-[#fff] text-[16px] text-center lg:text-left md:hidden">
            <p className="mb-3">{t("home_pretitle")}</p>
            <div className="w-[117px] h-[1px] bg-[#0EB78C] my-[18px] mx-auto"></div>
            <p>
              {t("home_pretitle_shiba")}
              <br />
              {t("home_pretitle_allgood")}
              <br />
              {t("home_pretitle_chance")}
            </p>
          </div>
          <div className="mt-10 flex items-center justify-center md:hidden">
            <a href="https://t.me/marmosettokenGlobal" className="mr-[15px]">
              <img src={telegram2} alt="telegram" />
              <p className="poppints font-[300] text-[#fff] text-[16px] mt-2 text-center">
                Telegram
              </p>
            </a>
            <a
              href="https://pancakeswap.finance/swap?outputCurrency=0x3B5328D38a795514E044081fcaa764013715C666"
              className="ml-[15px]"
            >
              <img src={pancakeswap} alt="pancake" />
              <p className="poppints font-[300] text-[#fff] text-[16px] mt-2 text-center">
                PancakeSwap
              </p>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-sponsors h-[110px] md:h-[165px] my-10">
        <div className="max-w-[1440px] mx-auto xl:px-[120px] lg:px-[30px] flex items-center justify-between pt-[30px] md:pt-[60px] flex-wrap">
          <img
            src={bscscan}
            alt="bscscan"
            className="max-w-[96px] md:max-w-full"
          />
          <img
            src={pancake}
            alt="pancake "
            className="max-w-[112px] md:max-w-full"
          />
          <img
            src={coingecko}
            alt="coingecko"
            className="max-w-[87px] md:max-w-full"
          />

          <img
            src={coinmarketcap}
            alt="coinmarketcap"
            className="max-w-[118px] md:max-w-full"
          />
          <img
            src={ambirewallet}
            alt="ambirewallet"
            className="max-w-[55px] md:max-w-full mb-2"
          />
          <img
            src={ambiread}
            alt="ambiread"
            className="max-w-[77px] md:max-w-full md:h-auto h-[25px]"
          />
          <img
            src={aax}
            alt="aax"
            className="max-w-[75px] md:max-w-full rotate-[3deg] ml-[-15px] md:h-auto h-[25px]"
          />
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto ">
        <div className="xl:px-[120px] lg:px-[30px] flex items-center justify-center flex-col">
          <div className="flex flex-col items-center mb-[26px] md:mb-[65px]">
            <img src={logo} alt="logo" className="hidden md:block" />
            <h1 className="mt-[13px] evolventa-b text-[#0EB88B] text-[24px] md:text-[40px]">
              {t("home_about")}
            </h1>
          </div>
          <div className="relative text-[#fff] mb-10 px-[15px] md:px-auto">
            <div className="bg-marmoset px-[14px] md:px-6 py-[17px] md:py-[50px] pb-[50px] md:pb-auto poppins text-[14px] md:text-[18px] font-normal">
              <p>{t("home_about_p1")}</p>
              <p className="my-[18px]">{t("home_about_p2")}</p>
              <p>{t("home_about_p3")}</p>
            </div>
            <img
              src={crypto1}
              alt="crypto"
              className="absolute md:top-[-135px] top-[-75px] left-[-20px] md:left-[-100px] z-[1] md:z-[-1] md:h-auto md:w-auto h-[98px] w-[88px]"
            />
            <img
              src={crypto2}
              alt="crypto"
              className="absolute top-[-50px] md:top-[-125px] md:w-auto md:h-auto w-[129px] h-[74px] right-[-30px] md:right-[0px] z-[-1]"
            />
            <img
              src={crypto3}
              alt="crypto"
              className="absolute w-[143px] h-[96px] bottom-[-40px]  right-[-30px] md:w-auto md:h-auto md:bottom-auto md:top-[20px] md:right-[-190px] z-[1] md:z-[-1]"
            />
            <img
              src={crypto4}
              alt="crypto"
              className="absolute  bottom-[-130px] left-[-180px] hidden md:block"
            />
            <img
              src={crypto5}
              alt="crypto"
              className=" md:z-[1] z-[-1] absolute left-[-40px] bottom-[-50px] md:left-auto  md:bottom-[-70px] md:right-[-50px] md:w-auto md:h-auto w-[121px] h-[109px]"
            />
          </div>
          <div className="mb-[42px] md:mb-[150px]">
            <p className="evolveta-r text-[14px] md:text-[20px] text-[#fff] mb-10 text-center md:px-auto px-[9px]">
              {t("home_allofyou")}
              <Link to="/shop">
                <span className="text-[#0EB88B] ml-[5px]">
                  {t("home_totem")}
                </span>
              </Link>{" "}
              <br />
              {t("home_marmoset_continue")}
            </p>
            <div className="text-[#fff] flex justify-center md:justify-between relative flex-wrap items-stretch">
              <img
                src={scratches}
                alt="scratches"
                className="rotate-[180deg] absolute bottom-[20px] left-[-200px]"
              />
              <div className="bg-icons md:mr-[25px] lg:mb-0 mb-5 md:mx-auto mx-[15px]">
                <div className="flex items-center justify-center md:justify-between flex-col py-[14px] px-[30px] md:w-[220px] w-[155px]">
                  <img
                    src={icon1}
                    alt="icon"
                    className="mb-5 md:w-auto md:h-auto w-[60px] h-[60px]"
                  />
                  <p className="poppins text-center md:text-[18px] text-[13px] md:w-auto w-[140px]">
                    {t("home_col1")}
                  </p>
                </div>
              </div>
              <div className="bg-icons md:mx-[25px] lg:mb-0 mb-5 mx-[15px]">
                <div className="flex items-center justify-center flex-col py-[14px] px-[30px] md:w-[220px] w-[155px]">
                  <img
                    src={icon2}
                    alt="icon"
                    className="mb-5 md:w-auto md:h-auto w-[60px] h-[60px]"
                  />
                  <p className="poppins text-center md:text-[18px] text-[13px] md:w-auto w-[140px]">
                    {t("home_col2")}
                  </p>
                </div>
              </div>
              <div className="bg-icons  md:mx-[25px] lg:mb-0 mb-5 mx-[15px]">
                <div className="flex items-center justify-center flex-col py-[14px] px-[30px] md:w-[220px] w-[155px]">
                  <img
                    src={icon3}
                    alt="icon"
                    className="mb-5 md:w-auto md:h-auto w-[60px] h-[60px]"
                  />
                  <p className="poppins text-center md:text-[18px] text-[13px] md:w-auto w-[140px]">
                    {t("home_col3")}
                  </p>
                </div>
              </div>
              <div className="bg-icons md:ml-[25px] lg:mb-0 mb-5 md:px-auto md:mx-auto mx-[15px]">
                <div className="flex items-center justify-center flex-col py-[14px] px-[30px] md:w-[220px] w-[155px]">
                  <img
                    src={icon4}
                    alt="icon"
                    className="mb-5 md:w-auto md:h-auto w-[60px] h-[60px]"
                  />
                  <p className="poppins text-center md:text-[18px] text-[13px] md:w-auto w-[140px]">
                    {t("home_col4")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto ">
        {" "}
        <div className="xl:px-[120px] lg:px-[30px]">
          <h1 className="md:mb-[70px] evolventa-b text-[24px]  md:text-[40px] text-[#0EB78C] md:text-left text-center">
            {t("home_tokenomic")}
          </h1>
        </div>
      </div>
      <div className="bg-[#151515] relative mb-[35px]">
        <img
          src={scratches}
          alt="scratches"
          className="absolute bottom-[-30px] left-0 rotate-[-180deg] hidden md:block"
        />
        <img
          src={scratches}
          alt="scratches"
          className="absolute top-[-100px] right-[-70px] rotate-[-90deg] hidden md:block"
        />
        <div className="max-w-[1440px] mx-auto ">
          <div className="xl:px-[120px] lg:px-[30px] flex items-center justify-center">
            <img
              src={tokenomic}
              alt="tokenomics"
              className="max-w-[350px] md:max-w-full md:w-auto w-[300px]"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#151515] relative mb-[92px]">
        <div className="max-w-[1440px] mx-auto ">
          <div className="xl:px-[120px] lg:px-[30px] flex items-center justify-center md:flex-row flex-col">
            <div className="w-full md:w-[50%] md:mr-[50px]">
              <h1 className="text-[#0EB78C] text-[24px] md:text-[35px] evolventa-b mb-6 md:text-left text-center">
                {t("home_sertification")}
              </h1>
              <p className="text-[14px] md:text-[18px] text-[#fff] evolventa-m md:text-left text-center whitespace-inherit md:mx-auto mx-[26px]">
                {t("home_project")}
                <br className="md:hidden" />
                <a href="https://defimoon.org/" className="ml-1 text-[#0EB78C]">
                  https://defimoon.org/.
                </a>
              </p>
            </div>
            <div className="text-[18px] text-[#fff] evolventa-m">
              <div className="flex items-center md:flex-row flex-col">
                <img src={check} alt="check" className="md:mr-10" />
                <p>{t("home_benefits1")}</p>
              </div>
              <div className="flex items-center md:flex-row flex-col">
                <img src={check} alt="check" className="md:mr-10" />
                <p>{t("home_benefits2")}</p>
              </div>
              <div className="flex items-center md:flex-row flex-col">
                <img src={check} alt="check" className="md:mr-10" />
                <p>{t("home_benefits3")}</p>
              </div>
              <div className="flex items-center md:flex-row flex-col pb-[50px] md:pb-0">
                <img src={check} alt="check" className="md:mr-10" />
                <p>{t("home_benefits4")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slider relative mb-[42px] md:mb-[111px]">
        <div className="max-w-[1440px] mx-auto relative">
          <div className="xl:px-[120px] lg:px-[30px] flex items-center justify-center flex-col">
            <h1 className="text-[24px] md:text-[40px] text-[#0EB78C] evolventa-b mt-10 mb-[10px] md:text-left text-center">
              {t("home_creation")}
            </h1>
            <p className="evolventa-r text-[#fff] text-[14px] md:text-[18px] text-center max-w-[845px] mx-[15px] md:mx-auto">
              {t("home_creation_title")}
            </p>
          </div>
          <Slider />
          <div className="xl:px-[120px] lg:px-[30px] flex items-center justify-center flex-col">
            <p className="evolventa-r text-[#fff] md:text-[18px] text-center max-w-[845px] mt-5 text-[14px] mx-[15px] md:mx-auto">
              {t("home_creation_pretitle")}
            </p>
          </div>
          <img
            src={scratches}
            alt="scratches"
            className="absolute bottom-[35px] right-[-50px] z-[-1] hidden md:block"
          />
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto ">
        {" "}
        <h1 className="mb-[26px] evolventa-b text-[24px] md:text-[40px] text-[#0EB78C] text-center">
          {t("home_community")}
        </h1>
      </div>
      <div className="bg-community relative mb-[60px] md:mb-[150px]">
        <div className="max-w-[1440px] mx-auto py-[30px] md:py-[60px]">
          <div className="xl:px-[120px] lg:px-[30px] flex items-center justify-center flex-col">
            <p className="evolventa-r text-[#fff] text-[14px] md:text-[18px] text-center max-w-[845px] mb-[28px]">
              {t("home_community_title")}
            </p>
            <div className="flex items-center md:flex-row flex-col">
              <Copy
                value="0x966d8986050ffc1d7eEd9cBB44320E587C8b3d7C"
                idx="inp2"
              />
            </div>
            <div className="flex items-center mt-[41px]">
              <p className="md:text-[18px] text-[14px] evolventa-b text-[#fff] leading-[144%] uppercase">
                {t("home_community_pretitle")}
              </p>
              <img src={paw} alt="paw" className="w-[63px] ml-[-14px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1440px] relative mx-auto mb-[80px] md:mb-[120px]">
        <div className="xl:px-[120px] lg:px-[30px] flex items-center justify-center flex-col">
          <h1 className="mb-[20px] md:mb-[60px] text-[#0EB78C] text-[24px] md:text-[40px] evolventa-b">
            FAQ
          </h1>
          <Accordion />
          <img
            src={scratches}
            alt="scratches"
            className="absolute rotate-[-210deg] bottom-[-50px] right-[0] z-[-1]"
          />
        </div>
      </div>
      <div className="relative mb-10">
        <div className="lg:h-[93px] md:h-[70px] h-[50px] bg-add2 absolute w-full"></div>
        <div className="lg:h-[93px] md:h-[70px] h-[50px] bg-add rotate-[-8.86deg]  md:rotate-[-2.34deg] flex items-center justify-center">
          <h1 className="evolventa-b text-[18px] md:text-[30px] lg:text-[40px] md:leading-[133%] leading-[80%] text-center">
            {t("home_join")}
          </h1>
        </div>
      </div>
      <div className="max-w-[1440px] relative mx-auto md:mb-[120px]">
        <div className="xl:px-[120px] lg:px-[30px] flex items-center justify-center flex-col">
          <div className="text-[#fff] max-w-[940px] mb-[50px]">
            <p className="mb-3 text-center evolventa-r text-[20px] leading-[133%]">
              {t("home_join_title")}
            </p>
            <p className="text-center evolventa-r text-[20px] leading-[133%]">
              {t("home_join_pretitle")}
            </p>
          </div>
          <div className="flex items-center flex-wrap justify-center">
            <a
              href="https://t.me/marmosettokenGlobal"
              className="flex flex-col items-center mx-5"
            >
              <img src={telegram2} alt="telegram" />
              <p className="mt-2 evolventa-r text-[16px] text-[#fff]">
                Telegram
              </p>
            </a>
            <a
              href="https://twitter.com/marmosettoken/"
              className="flex flex-col items-center mx-5"
            >
              <img src={twitter} alt="twitter" />
              <p className="mt-2 evolventa-r text-[16px] text-[#fff]">
                Twitter
              </p>
            </a>
            <a
              href="https://discord.gg/cbzJVhbYDV"
              className="flex flex-col items-center mx-5"
            >
              <img src={discord} alt="discord" />
              <p className="mt-2 evolventa-r text-[16px] text-[#fff]">
                Discord
              </p>
            </a>
            <a
              href="https://www.reddit.com/r/marmosettoken_MMT/"
              className="flex flex-col items-center mx-5"
            >
              <img src={reddit} alt="reddit" />
              <p className="mt-2 evolventa-r text-[16px] text-[#fff]">Reddit</p>
            </a>
            <a
              href="https://instagram.com/marmosettoken?igshid=YmMyMTA2M2Y="
              className="flex flex-col items-center mx-5"
            >
              <img src={instagram} alt="instagram" />
              <p className="mt-2 evolventa-r text-[16px] text-[#fff]">
                Instagram
              </p>
            </a>
            <a
              href="https://www.tiktok.com/@marmosettoken?_t=8VBGdCz8Ln0&_r=1"
              className="flex flex-col items-center mx-5"
            >
              <img src={tiktok} alt="tiktok" />
              <p className="mt-2 evolventa-r text-[16px] text-[#fff]">TikTok</p>
            </a>
            <a
              href="https://youtube.com/channel/UC0v-DgyatplMegkJ9zR3PpA"
              className="flex flex-col items-center mx-5"
            >
              <img src={youtube} alt="youtube" />
              <p className="mt-2 evolventa-r text-[16px] text-[#fff]">
                YouTube
              </p>
            </a>
          </div>
          <img
            src={bscratches}
            alt="scratches"
            className="absolute hidden md:block left-[-20px] top-0 z-[-1]"
          />
          <img
            src={bscratches}
            alt="scratches"
            className="absolute hidden md:block right-[-20px] top-0 z-[-1] rotate-[240deg]"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default withNamespaces()(Home);
