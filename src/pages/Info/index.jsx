import React from "react";
import closeModal from "../../assets/img/close_modal.png";
import { Link } from "react-router-dom";

import i18n from "../../translate/i18n";
import { withNamespaces } from "react-i18next";

const Info = ({ t }) => {
  return (
    <>
      <div className="management-modal min-w-[100vw] min-h-[100vh]">
        <div className="management-modal">
          <Link to="/shop">
            <img
              src={closeModal}
              alt="close"
              className="absolute cursor-pointer top-[25px] right-[22px]"
            />
          </Link>
          <div className="px-[80px] py-[50px]">
            <div className="mb-[80px]">
              <h1 className="evolventa-b text-[24px] leading-[133.5%] text-center text-[#fff] mb-[22px]">
                {t("information")}
              </h1>
              <div className="bg-[#fff] h-[1px] w-full"></div>
            </div>
            <div>
              <div className="mb-5 evolventa-b md:text-[20px] text-[16px] text-[#fff] flex items-center flex-col">
                <p className="mb-[21px] text-center">{t("info_text1")}</p>
                <div className="border border-[#fff] w-[64px]"></div>
              </div>
              <div className="mb-5 evolventa-b md:text-[20px] text-[16px] text-[#fff] flex items-center flex-col">
                <p className="mb-[21px] text-center">{t("info_text2")}</p>
                <div className="border border-[#fff] w-[64px]"></div>
              </div>
              <div className="mb-5 evolventa-b md:text-[20px] text-[16px] text-[#fff] flex items-center flex-col">
                <p className="mb-[21px] text-center">{t("info_text3")}</p>
                <div className="border border-[#fff] w-[64px]"></div>
              </div>
              <div className="mb-5 evolventa-b md:text-[20px] text-[16px] text-[#fff] flex items-center flex-col">
                <p className="mb-[21px] text-center">{t("info_text4")}</p>
                <div className="border border-[#fff] w-[64px]"></div>
              </div>
              <div className="mb-5 evolventa-b md:text-[20px] text-[16px] text-[#fff] flex items-center flex-col">
                <p className="mb-[21px] text-center">{t("info_text5")}</p>
                <div className="border border-[#fff] w-[64px]"></div>
              </div>
              <div className="mb-5 evolventa-b md:text-[20px] text-[16px] text-[#fff] flex items-center flex-col">
                <p className="mb-[21px] text-center">{t("info_text6")}</p>
                <div className="border border-[#fff] w-[64px]"></div>
              </div>
              <div className="mt-5 evolventa-b md:text-[20px] text-[16px] text-[#fff] flex items-center flex-col">
                <div className="mb-[7px] flex md:flex-row flex-col items-center">
                  <h3 className="mr-[20px]">{t("info_footer1h")}</h3>
                  <p className="evolventa-r">{t("info_footer1p")}</p>
                </div>
                <div className="mb-[7px] flex md:flex-row flex-col items-center">
                  <h3 className="mr-[20px]">{t("info_footer2h")}</h3>
                  <p className="evolventa-r">{t("info_footer2p")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withNamespaces()(Info);
