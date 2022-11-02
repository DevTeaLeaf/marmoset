import React, { useRef } from "react";
import { useState, useEffect } from "react";
import { Header } from "../../components/Header";
import Footer from "../../components/Footer";

import gif from "../../assets/video/gif1.mp4";
import management from "../../assets/img/management.png";
import info from "../../assets/img/information.png";
import minus from "../../assets/img/minus.png";
import plus from "../../assets/img/plus.png";
import { Link } from "react-router-dom";

import i18n from "../../translate/i18n";
import { withNamespaces } from "react-i18next";

import { ethers } from "ethers";
import { useAccount } from "@web3modal/react";
import lotteryABI from "../../web3/abi/lottery.json";
import tokenABI from "../../web3/abi/token.json";
import { LOTTERY, TOKEN } from "../../web3/constants.js";

import emailjs from "@emailjs/browser";

const Shop = ({ t }) => {
  const [price, setPrice] = useState(1);
  const form = useRef();
  //normal
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [index, setIndex] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [faddress, setAddress] = useState("");
  //dirty
  const [nameDirty, setNameDirty] = useState(false);
  const [surnameDirty, setSurnameDirty] = useState(false);
  const [phoneDirty, setPhoneDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [indexDirty, setIndexDirty] = useState(false);
  const [countryDirty, setCountryDirty] = useState(false);
  const [cityDirty, setCityDirty] = useState(false);
  const [addressDirty, setAddressDirty] = useState(false);
  //error
  const supplyForm = t("supply_form");
  const supplyPhone = t("supply_phone");
  const supplyEmail = t("supply_email");

  const [nameError, setNameError] = useState(supplyForm);
  const [surnameError, setSurnameError] = useState(supplyForm);
  const [phoneError, setPhoneError] = useState(supplyForm);
  const [emailError, setEmailError] = useState(supplyForm);
  const [indexError, setIndexError] = useState(supplyForm);
  const [countryError, setCountryError] = useState(supplyForm);
  const [cityError, setCityError] = useState(supplyForm);
  const [addressError, setAddressError] = useState(supplyForm);

  const [formValid, setFormValid] = useState(false);

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "name":
        setNameDirty(true);
        break;
      case "surname":
        setSurnameDirty(true);
        break;
      case "phone":
        setPhoneDirty(true);
        break;
      case "email":
        setEmailDirty(true);
        break;
      case "index":
        setIndexDirty(true);
        break;
      case "country":
        setCountryDirty(true);
        break;
      case "city":
        setCityDirty(true);
        break;
      case "faddress":
        setAddressDirty(true);
        break;
    }
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      //let buyToy = await lotteryContract.buyToy(price);
      //console.log(buyToy);
      emailjs
        .sendForm(
          "service_y9l9u6i",
          "template_ncadvhn",
          form.current,
          "OI8ROhTcVEziLZ1-6"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    } catch (error) {
      console.log(error);
    }
  };

  const nameHandler = (e) => {
    setName(e.target.value);
    if (e.target.value != "") {
      setNameError("");
    } else {
      setNameError(supplyForm);
    }
  };
  const surnameHandler = (e) => {
    setSurname(e.target.value);
    if (e.target.value != "") {
      setSurnameError("");
    } else {
      setSurnameError(supplyForm);
    }
  };
  const phoneHandler = (e) => {
    setPhone(e.target.value);
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if (re.test(e.target.value)) {
      setPhoneError("");
    } else {
      setPhoneError(supplyPhone);
    }
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (re.test(e.target.value)) {
      setEmailError("");
    } else {
      setEmailError(supplyEmail);
    }
  };
  const indexHandler = (e) => {
    setIndex(e.target.value);
    if (e.target.value != "") {
      setIndexError("");
    } else {
      setIndexError(supplyForm);
    }
  };
  const countryHandler = (e) => {
    setCountry(e.target.value);
    if (e.target.value != "") {
      setCountryError("");
    } else {
      setCountryError(supplyForm);
    }
  };
  const cityHandler = (e) => {
    setCity(e.target.value);
    if (e.target.value != "") {
      setCityError("");
    } else {
      setCityError(supplyForm);
    }
  };
  const addressHandler = (e) => {
    if (e.target.value != "") {
      setAddressError("");
    } else {
      setAddressError(supplyForm);
    }
    setAddress(e.target.value);
  };

  useEffect(() => {
    if (
      nameError ||
      surnameError ||
      phoneError ||
      emailError ||
      indexError ||
      countryError ||
      cityError ||
      addressError
    ) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [
    nameError,
    surnameError,
    phoneError,
    emailError,
    indexError,
    countryError,
    cityError,
    addressError,
  ]);
  ////web3
  const { address, connectorAccount, isConnected } = useAccount();

  let tokenContract;
  let lotteryContract;
  const [marmosetPrice, setMarmosetPrice] = useState("");
  const [marmosetUnits, setMarmosetUnits] = useState("");
  const getPrice = async () => {
    let price = await lotteryContract.getPrice(ethers.utils.parseEther("99"));
    price = parseInt(price._hex, 16);
    console.log(price);
    if (price / 10 ** 30 > 0) {
      setMarmosetPrice((price / 10 ** 30).toFixed(1));
      setMarmosetUnits("trillion");
    } else {
      setMarmosetPrice((price / 10 ** 27).toFixed(1));
      setMarmosetUnits("milliard");
    }
  };
  if (isConnected) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    tokenContract = new ethers.Contract(TOKEN, tokenABI, signer);
    lotteryContract = new ethers.Contract(LOTTERY, lotteryABI, signer);
    getPrice();
  }
  return (
    <>
      <Header />
      <video
        autoPlay
        loop
        muted
        className="m-auto mb-[25px] h-[285px] md:h-full max-w-[350px] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1100px] xl:max-w-[1440px] pt-[80px] md:pt-[118px]"
      >
        <source src={gif} type="video/mp4" />
      </video>
      <div className="max-w-[1440px] m-auto mb-[30px] md:mb-[175px]">
        <div className="xl:px-[120px] lg:px-[30px] flex items-center justify-center flex-col">
          <div className="text-[#fff] evolventa-r mx-[15px] md:mx-auto text-[14px] md:text-[21px] max-w-[1200px] mb-3">
            <p className="mb-[30px] text-center md:text-start">
              {t("shop_title0")}
            </p>
            <p className="mb-[30px] text-center md:text-start">
              {t("shop_title1")}
            </p>
            <p className="mb-[20px] text-center md:text-start">
              {t("shop_title2")}
            </p>
            <p className="text-center md:text-start">{t("shop_title3")}</p>
          </div>
        </div>
        <div className="xl:px-[120px] lg:px-[30px]">
          <div className="flex items-center justify-between mb-[30px] md:flex-row flex-col-reverse">
            <h1 className="text-[#0EB88B] evolventa-b text-[20px] md:text-[40px] leading-[133%] text-center md:text-start">
              {t("shop_data")}
            </h1>
            <div className="flex items-center flex-col md:flex-row">
              <Link to="/management">
                <button className="button-modal-design md:mr-[13px] flex items-center md:mb-auto mb-6">
                  <img src={management} alt="management" className="" />
                  <p>{t("management")}</p>
                </button>
              </Link>
              <Link to="/info">
                <button className="button-modal-design md:ml-[13px] flex items-center md:mb-auto mb-[38px]">
                  <img src={info} alt="info" />
                  <p>{t("information")}</p>
                </button>
              </Link>
            </div>
          </div>
          <div className="text-[#FFFFFF] evolventa-b text-[18px] flex items-center xl:items-start xl:flex-row flex-col">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex xl:flex-row flex-col items-center xl:items-start"
            >
              <div className="flex md:flex-row flex-col items-center">
                <div className="md:mr-[15px]">
                  <div>
                    <div className="mb-[30px]">
                      <div className="flex mb-3">
                        <p>{t("shop_family")}</p>
                        <p className="text-[#FF1791]">*</p>
                      </div>
                      <input
                        onBlur={(e) => blurHandler(e)}
                        onChange={(e) => surnameHandler(e)}
                        name="surname"
                        defaultValue={surname}
                        type="text"
                        className={
                          surnameDirty && surnameError
                            ? "outline-0 bg-[#3B3C4E] px-5 py-2 max-w-[309px] rounded-[10px] focus:border focus:border-[#0EB78C] border border-[#B62424]"
                            : "outline-0 bg-[#3B3C4E] px-5 py-2 max-w-[309px] rounded-[10px] focus:border focus:border-[#0EB78C]"
                        }
                      />
                      {surnameDirty && surnameError && (
                        <div className="text-[#B62424] text-[13px] evolventa-r ml-3 mt-1">
                          {surnameError}
                        </div>
                      )}
                    </div>
                    <div className="mb-[30px]">
                      <div className="flex mb-3">
                        <p>{t("shop_name")}</p>
                        <p className="text-[#FF1791]">*</p>
                      </div>
                      <input
                        onBlur={(e) => blurHandler(e)}
                        onChange={(e) => nameHandler(e)}
                        name="name"
                        defaultValue={name}
                        type="text"
                        className={
                          nameDirty && nameError
                            ? "outline-0 bg-[#3B3C4E] px-5 py-2 max-w-[309px] rounded-[10px] focus:border focus:border-[#0EB78C] border border-[#B62424]"
                            : "outline-0 bg-[#3B3C4E] px-5 py-2 max-w-[309px] rounded-[10px] focus:border focus:border-[#0EB78C]"
                        }
                      />
                      {nameDirty && nameError && (
                        <div className="text-[#B62424] text-[13px] evolventa-r ml-3 mt-1">
                          {nameError}
                        </div>
                      )}
                    </div>
                    <div className="mb-[30px]">
                      <div className="flex mb-3">
                        <p>{t("shop_country")}</p>
                        <p className="text-[#FF1791]">*</p>
                      </div>
                      <input
                        onBlur={(e) => blurHandler(e)}
                        onChange={(e) => countryHandler(e)}
                        name="country"
                        defaultValue={country}
                        type="text"
                        className={
                          countryDirty && countryError
                            ? "outline-0 bg-[#3B3C4E] px-5 py-2 max-w-[309px] rounded-[10px] focus:border focus:border-[#0EB78C] border border-[#B62424]"
                            : "outline-0 bg-[#3B3C4E] px-5 py-2 max-w-[309px] rounded-[10px] focus:border focus:border-[#0EB78C]"
                        }
                      />
                      {countryDirty && countryError && (
                        <div className="text-[#B62424] text-[13px] evolventa-r ml-3 mt-1">
                          {countryError}
                        </div>
                      )}
                    </div>
                    <div className="mb-[30px]">
                      <div className="flex mb-3">
                        <p>{t("shop_city")}</p>
                        <p className="text-[#FF1791]">*</p>
                      </div>
                      <input
                        onBlur={(e) => blurHandler(e)}
                        onChange={(e) => cityHandler(e)}
                        name="city"
                        defaultValue={city}
                        type="text"
                        className={
                          cityDirty && cityError
                            ? "outline-0 bg-[#3B3C4E] px-5 py-2 max-w-[309px] rounded-[10px] focus:border focus:border-[#0EB78C] border border-[#B62424]"
                            : "outline-0 bg-[#3B3C4E] px-5 py-2 max-w-[309px] rounded-[10px] focus:border focus:border-[#0EB78C]"
                        }
                      />
                      {cityDirty && cityError && (
                        <div className="text-[#B62424] text-[13px] evolventa-r ml-3 mt-1">
                          {cityError}
                        </div>
                      )}
                    </div>
                    <div className="mb-[40px]">
                      <div className="flex mb-3">
                        <p>{t("shop_address")}</p>
                        <p className="text-[#FF1791]">*</p>
                      </div>
                      <input
                        onBlur={(e) => blurHandler(e)}
                        onChange={(e) => addressHandler(e)}
                        name="faddress"
                        defaultValue={faddress}
                        type="text"
                        className={
                          addressDirty && addressError
                            ? "outline-0 bg-[#3B3C4E] px-5 py-2 max-w-[309px] rounded-[10px] focus:border focus:border-[#0EB78C] border border-[#B62424]"
                            : "outline-0 bg-[#3B3C4E] px-5 py-2 max-w-[309px] rounded-[10px] focus:border focus:border-[#0EB78C]"
                        }
                      />
                      {addressDirty && addressError && (
                        <div className="text-[#B62424] text-[13px] evolventa-r ml-3 mt-1">
                          {addressError}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="md:ml-[15px] flex flex-col items-center md:block">
                  <div className="mb-[30px]">
                    <div className="mb-[30px]">
                      <div className="flex mb-3">
                        <p>{t("shop_number")}</p>
                        <p className="text-[#FF1791]">*</p>
                      </div>
                      <input
                        onBlur={(e) => blurHandler(e)}
                        onChange={(e) => phoneHandler(e)}
                        defaultValue={phone}
                        name="phone"
                        type="text"
                        className={
                          phoneDirty && phoneError
                            ? "outline-0 bg-[#3B3C4E] px-5 py-2 max-w-[309px] rounded-[10px] focus:border focus:border-[#0EB78C] border border-[#B62424]"
                            : "outline-0 bg-[#3B3C4E] px-5 py-2 max-w-[309px] rounded-[10px] focus:border focus:border-[#0EB78C]"
                        }
                      />
                      {phoneDirty && phoneError && (
                        <div className="text-[#B62424] text-[13px] evolventa-r ml-3 mt-1">
                          {phoneError}
                        </div>
                      )}
                    </div>
                    <div className="mb-[30px]">
                      <div className="flex mb-3">
                        <p>E-Mail</p>
                        <p className="text-[#FF1791]">*</p>
                      </div>
                      <input
                        onBlur={(e) => blurHandler(e)}
                        onChange={(e) => emailHandler(e)}
                        defaultValue={email}
                        name="email"
                        type="text"
                        className={
                          emailDirty && emailError
                            ? "outline-0 bg-[#3B3C4E] px-5 py-2 max-w-[309px] rounded-[10px] focus:border focus:border-[#0EB78C] border border-[#B62424]"
                            : "outline-0 bg-[#3B3C4E] px-5 py-2 max-w-[309px] rounded-[10px] focus:border focus:border-[#0EB78C]"
                        }
                      />
                      {emailDirty && emailError && (
                        <div className="text-[#B62424] text-[13px] evolventa-r ml-3 mt-1">
                          {emailError}
                        </div>
                      )}
                    </div>
                    <div className="flex mb-3">
                      <p>{t("shop_index")}</p>
                      <p className="text-[#FF1791]">*</p>
                    </div>
                    <input
                      onBlur={(e) => blurHandler(e)}
                      onChange={(e) => indexHandler(e)}
                      name="index"
                      defaultValue={index}
                      type="text"
                      className={
                        indexDirty && indexError
                          ? "outline-0 bg-[#3B3C4E] px-5 py-2 max-w-[309px] rounded-[10px] focus:border focus:border-[#0EB78C] border border-[#B62424]"
                          : "outline-0 bg-[#3B3C4E] px-5 py-2 max-w-[309px] rounded-[10px] focus:border focus:border-[#0EB78C]"
                      }
                    />
                    {indexDirty && indexError && (
                      <div className="text-[#B62424] text-[13px] evolventa-r ml-3 mt-1">
                        {indexError}
                      </div>
                    )}
                  </div>
                  <div className="mb-[30px]">
                    <div className="flex mb-3">
                      <p>{t("shop_comment")}</p>
                    </div>
                    <textarea
                      name="comment"
                      type="text"
                      className="outline-0 bg-[#3B3C4E] px-5 py-2 h-[160px] w-[309px] md:w-[346px] rounded-[10px] focus:border focus:border-[#0EB78C]"
                    />
                  </div>
                </div>
              </div>
              <div className="xl:ml-[100px] flex items-center justify-center flex-col border border-[#0EB78C] md:mt-10 rounded-[10px] bg-[#3B3C4E]">
                <div className="md:pt-[76px] pt-[38px] px-[15px] md:px-[30px] pb-[30px] flex flex-col items-center">
                  <div className="flex items-center">
                    <p className="evolventa-b text-[14px] md:text-[18px] leading-[133%] md:mr-0 mr-[18px]">
                      {t("counter_amount")}
                    </p>
                    <p className="opacity-30 px-1 hidden md:block">
                      ...................
                    </p>
                    <div className="flex items-center">
                      <img
                        src={minus}
                        alt="minus"
                        className="cursor-pointer"
                        onClick={() => {
                          price != 1 ? setPrice(price - 1) : setPrice(price);
                        }}
                      />
                      <p className="px-2">{price}</p>
                      <img
                        src={plus}
                        alt="plus"
                        className="cursor-pointer"
                        onClick={() => setPrice(price + 1)}
                      />
                    </div>
                  </div>
                  <div className="flex my-[25px]">
                    <p className="evolventa-b text-[14px] md:text-[18px] leading-[133%]">
                      {t("counter_price")}
                    </p>
                    <p className="opacity-30 px-1 hidden md:block">
                      ..............................................
                    </p>
                    <p className="opacity-30 px-1 block md:hidden">
                      ..................
                    </p>
                    <p className="evolventa-b text-[16px] md:text-[20px] leading-[133%]">
                      ${price * 99}
                    </p>
                  </div>
                  <div className="flex">
                    <p className="evolventa-b text-[14px] md:text-[18px] leading-[133%]">
                      {t("counter_priceMMT")}
                    </p>
                    <p className="opacity-30 px-1 hidden md:block">
                      ...............................
                    </p>
                    <p className="opacity-30 px-1 block md:hidden">
                      ...................
                    </p>
                    <p className="evolventa-b text-[16px] leading-[133%] text-[#0EB78C] md:text-[20px]">
                      {price * marmosetPrice + " " + marmosetUnits}
                    </p>
                  </div>
                  <button
                    disabled={!formValid}
                    type="submit"
                    className="mt-[15px] md:mt-[50px] flex items-center justify-center px-[87.5px] py-[13.5px] bg-[#FF1791] disabled:opacity-50 rounded-[55px] max-w-[229px]"
                  >
                    {t("counter_buy")}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default withNamespaces()(Shop);
