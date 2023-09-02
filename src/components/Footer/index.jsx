import { withNamespaces } from "react-i18next";

import Copy from "../Copy";

const Footer = ({ t }) => {
  return (
    <>
      <div className="flex justify-between items-center flex-col mx-auto xl:px-[120px] lg:px-[30px] h-[80px] lg:h-[118px]">
        <div className="flex items-center max-w-[1440px] relative mx-auto mb-[30px] md:flex-row flex-col">
          <p className="evolventa-b text-[18px] text-[#fff] leading-[144%] mr-0 md:mr-5 md:mb-0 mb-5">
            BSC contract address:
          </p>
          <Copy value="0x3B5328D38a795514E044081fcaa764013715C666" idx="inp" />
        </div>
        <div className="flex items-center max-w-[1440px] relative mx-auto w-full text-center">
          <p className="text-[#C8C8C8] evolveta-r text-[10px] md:text-[16px] leading-[133%] py-[30px] border border-t-[#0EB78C] border-x-0 border-b-0 w-full">
            {t("footer")}
          </p>
        </div>
      </div>
    </>
  );
};
export default withNamespaces()(Footer);
