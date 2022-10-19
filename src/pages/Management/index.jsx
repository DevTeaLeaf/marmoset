import closeModal from "../../assets/img/close_modal.png";
import { useNavigate } from "react-router-dom";

import i18n from "../../translate/i18n";
import { withNamespaces } from "react-i18next";

const Management = ({ t }) => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <>
      <div className="bg-rules min-w-[100vw] min-h-[100vh]">
        <div className="bg-rules max-w-[994px] mx-auto text-[#fff] px-[105px] py-[22px]">
          <img
            src={closeModal}
            alt="close"
            className="absolute cursor-pointer top-[25px] right-[22px]"
            onClick={goBack}
          />
          <div className="flex jsutify-center items-center flex-col">
            <div className="flex jsutify-center items-center flex-col mb-[20px]">
              <h1 className="md:evolventa-b evolventa-m md:text-[40px] text-[16px] mb-[22px] text-center">
                {t("management")}
              </h1>
              <div className="bg-[#fff] w-full h-[1px] mb-[7px]"></div>
            </div>
            <div>
              <div className="flex justify-center items-center flex-col md:mb-10 mb-5">
                <div className="w-[51px] h-[51px] bg-[#FF1791] flex items-center justify-center rounded-full mb-3">
                  1
                </div>
                <div className="max-w-[784px] text-center  md:evolventa-b evolventa-m md:text-[18px] text-[14px]">
                  <h1 className="mb-[22px] evolventa-b text-[14px] md:text-[21px] leading-[133.5%] text-[#fff]">
                    {t("management_text1")}
                  </h1>
                  <p className="evolventa-r text-[14px] md:text-[21px] leading-[133%] text-[#fff] ">
                    {t("management_pretext1")}
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center flex-col  md:mb-10 mb-5">
                <div className="w-[51px] h-[51px] bg-[#FF1791] flex items-center justify-center rounded-full mb-3">
                  2
                </div>
                <div className="max-w-[784px] text-center  md:evolventa-b evolventa-m md:text-[18px] text-[14px]">
                  <h1 className="mb-[22px] evolventa-b text-[14px] md:text-[21px] leading-[133.5%] text-[#fff]">
                    {t("management_text2")}
                  </h1>
                  <p className="evolventa-r text-[14px] md:text-[21px] leading-[133%] text-[#fff] ">
                    {t("management_pretext2")}
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center flex-col  md:mb-10 mb-5">
                <div className="w-[51px] h-[51px] bg-[#FF1791] flex items-center justify-center rounded-full mb-3">
                  3
                </div>
                <div className="max-w-[784px] text-center  md:evolventa-b evolventa-m md:text-[18px] text-[14px]">
                  <h1 className="mb-[22px] evolventa-b text-[14px] md:text-[21px] leading-[133.5%] text-[#fff]">
                    {t("management_text3")}
                  </h1>
                  <p className=" evolventa-r text-[14px] md:text-[21px] leading-[133%] text-[#fff] ">
                    {t("management_pretext3y")}
                    <a
                      className="mx-[5px] underline"
                      href="https://pancakeswap.finance/swap?outputCurrency=0x3B5328D38a795514E044081fcaa764013715C666"
                    >
                      PancakeSwap
                    </a>
                    {t("management_pretext3")}
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center flex-col  md:mb-10 mb-5">
                <div className="w-[51px] h-[51px] bg-[#FF1791] flex items-center justify-center rounded-full mb-3">
                  4
                </div>
                <div className="max-w-[784px] text-center  md:evolventa-b evolventa-m md:text-[18px] text-[14px]">
                  <h1 className="mb-[22px] evolventa-b text-[14px] md:text-[21px] leading-[133.5%] text-[#fff]">
                    {t("management_text4")}
                  </h1>
                  <p className=" evolventa-r text-[14px] md:text-[21px] leading-[133%] text-[#fff] ">
                    {t("management_pretext4y")}
                    <a className="ml-[5px] underline" href="Marmosettoken.com">
                      Marmosettoken.com
                    </a>{" "}
                    {t("management_pretext4")}
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center flex-col  md:mb-10 mb-5">
                <div className="w-[51px] h-[51px] bg-[#FF1791] flex items-center justify-center rounded-full mb-3">
                  5
                </div>
                <div className="max-w-[784px] text-center  md:evolventa-b evolventa-m md:text-[18px] text-[14px]">
                  <h1 className="mb-[22px] evolventa-b text-[14px] md:text-[21px] leading-[133.5%] text-[#fff]">
                    {t("management_text5")}
                  </h1>
                  <p className="pb-[80px] evolventa-r text-[14px] md:text-[21px] leading-[133%] text-[#fff] ">
                    {t("management_pretext5")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withNamespaces()(Management);
