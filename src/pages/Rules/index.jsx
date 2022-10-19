import arrow from "../../assets/img/arrow-back.png";
import { Link } from "react-router-dom";

import i18n from "../../translate/i18n";
import { withNamespaces } from "react-i18next";

const Rules = ({ t }) => {
  return (
    <>
      <div className="bg-rules min-w-[100vw] min-h-[100vh]">
        <div className="bg-rules max-w-[994px] mx-auto text-[#fff] px-[105px] py-[22px]">
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
                {t("rules")}
              </h1>
              <div className="bg-[#fff] w-full h-[1px] mb-[7px]"></div>
              <p className="md:text-[18px] text-[14px]">
                {t("rules_title")}
                <br />
                <br />
                {t("rules_pretitle")}
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center flex-col md:mb-10 mb-5">
                <div className="w-[51px] h-[51px] bg-[#FF1791] flex items-center justify-center rounded-full mb-3">
                  1
                </div>
                <div className="max-w-[784px] text-center  md:evolventa-b evolventa-m md:text-[18px] text-[14px]">
                  {t("rules_1")}
                </div>
              </div>
              <div className="flex justify-center items-center flex-col  md:mb-10 mb-5">
                <div className="w-[51px] h-[51px] bg-[#FF1791] flex items-center justify-center rounded-full mb-3">
                  2
                </div>
                <div className="max-w-[784px] text-center  md:evolventa-b evolventa-m md:text-[18px] text-[14px]">
                  {t("rules_2")}
                </div>
              </div>
              <div className="flex justify-center items-center flex-col  md:mb-10 mb-5">
                <div className="w-[51px] h-[51px] bg-[#FF1791] flex items-center justify-center rounded-full mb-3">
                  3
                </div>
                <div className="max-w-[784px] text-center  md:evolventa-b evolventa-m md:text-[18px] text-[14px]">
                  {t("rules_3")}
                </div>
              </div>
              <div className="flex justify-center items-center flex-col  md:mb-10 mb-5">
                <div className="w-[51px] h-[51px] bg-[#FF1791] flex items-center justify-center rounded-full mb-3">
                  4
                </div>
                <div className="max-w-[784px] text-center mb-[34px]  md:evolventa-b evolventa-m md:text-[18px] text-[14px]">
                  {t("rules_4")}
                </div>
                <div>
                  <div className="flex justify-center items-center mb-3">
                    <div className="w-[6px] h-[6px] bg-[#FF1791] rounded-full mr-[11px]"></div>
                    <div className="md:text-[18px] text-[12px]">
                      {t("rules_guessing")}
                    </div>
                    <div className="md:text-[18px] text-[12px] bg-[transparent] w-6 h-6 border-[2px] border-[#0EB78C] rounded-full flex items-center justify-center mx-1">
                      2
                    </div>
                    <div className="md:text-[18px] text-[12px]">
                      {t("rules_numbers")}
                    </div>
                  </div>
                  <div className="flex justify-center items-center mb-3">
                    <div className="w-[6px] h-[6px] bg-[#FF1791] rounded-full mr-[11px]"></div>
                    <div className="md:text-[18px] text-[12px]">
                      {t("rules_guessing")}
                    </div>
                    <div className="md:text-[18px] text-[12px] bg-[transparent] w-6 h-6 border-[2px] border-[#0EB78C] rounded-full flex items-center justify-center mx-1">
                      3
                    </div>
                    <div className="md:text-[18px] text-[12px]">
                      {t("rules_numbers")}
                    </div>
                  </div>
                  <div className="flex justify-center items-center mb-3">
                    <div className="w-[6px] h-[6px] bg-[#FF1791] rounded-full mr-[11px]"></div>
                    <div className="md:text-[18px] text-[12px]">
                      {t("rules_guessing")}
                    </div>
                    <div className="md:text-[18px] text-[12px] bg-[transparent] w-6 h-6 border-[2px] border-[#0EB78C] rounded-full flex items-center justify-center mx-1">
                      4
                    </div>
                    <div className="md:text-[18px] text-[12px]">
                      {t("rules_numbers")}
                    </div>
                  </div>
                  <div className="flex justify-center items-center mb-3">
                    <div className="w-[6px] h-[6px] bg-[#FF1791] rounded-full mr-[11px]"></div>
                    <div className="md:text-[18px] text-[12px]">
                      {t("rules_guessing")}
                    </div>
                    <div className="md:text-[18px] text-[12px] bg-[transparent] w-6 h-6 border-[2px] border-[#0EB78C] rounded-full flex items-center justify-center mx-1">
                      5
                    </div>
                    <div className="md:text-[18px] text-[12px]">
                      {t("num")};
                    </div>
                  </div>
                  <div className="flex justify-center items-center mb-3">
                    <div className="w-[6px] h-[6px] bg-[#FF1791] rounded-full mr-[11px]"></div>
                    <div className="md:text-[18px] text-[12px]">
                      {t("guess_all")}
                    </div>
                    <div className="md:text-[18px] text-[12px] bg-[transparent] w-6 h-6 border-[2px] border-[#0EB78C] rounded-full flex items-center justify-center mx-1">
                      6
                    </div>
                    <div className="md:text-[18px] text-[12px]">
                      {" "}
                      {t("num")}.
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center flex-col md:mb-10 mb-5">
                <div className="max-w-[784px] text-center  md:evolventa-b evolventa-m md:text-[18px] text-[14px]">
                  {t("rules_4_title")}
                  <br />
                  <br />
                  {t("rules_4_pretitle")}
                </div>
              </div>
              <div className="flex justify-center items-center flex-col  md:mb-10 mb-5">
                <div className="w-[51px] h-[51px] bg-[#FF1791] flex items-center justify-center rounded-full mb-3">
                  5
                </div>
                <div className="max-w-[784px] text-center  md:evolventa-b evolventa-m md:text-[18px] text-[14px]">
                  {t("rules_5")}
                </div>
              </div>
              <div className="flex justify-center items-center flex-col  md:mb-10 mb-5">
                <div className="w-[51px] h-[51px] bg-[#FF1791] flex items-center justify-center rounded-full mb-3">
                  6
                </div>
                <div className="max-w-[784px] text-center  md:evolventa-b evolventa-m md:text-[18px] text-[14px]">
                  {t("rules_6")}
                </div>
              </div>
              <div className="flex justify-center items-center flex-col  md:mb-10 mb-5">
                <div className="w-[51px] h-[51px] bg-[#FF1791] flex items-center justify-center rounded-full mb-3">
                  7
                </div>
                <div className="max-w-[784px] text-center  md:evolventa-b evolventa-m md:text-[18px] text-[14px]">
                  {t("rules_7")} <br />
                  <br />
                  {t("rules_7_title")}
                  <br />
                  <br />
                  {t("rules_7_pretitle")}
                  <br />
                  <br />
                  {t("rules_7_interested")}
                  <br />
                  <br />
                  {t("rules_7_so1")}
                  <br />
                  <br />
                  {t("rules_7_so2")}
                  <br />
                  {t("rules_7_so3")}
                  <br />
                  {t("rules_7_so4")}
                  <br />
                  {t("rules_7_so5")}
                  <br />
                  {t("rules_7_so6")}
                  <br />
                  <br />
                  {t("rules_7_example")}
                  <br />
                  <br />
                  10:45 – 41221.99
                  <br />
                  11:00 – 41278.78
                  <br />
                  11:15 – 41254.31
                  <br />
                  11:30 – 41162.65
                  <br />
                  11:45 – 41182.71
                  <br />
                  12:00 – 41209.02
                  <br />
                  <br />
                  {t("rules_7_then")}
                  <br />
                  <br />
                  {t("rules_7_final")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withNamespaces()(Rules);
