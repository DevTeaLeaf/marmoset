import { withNamespaces } from "react-i18next";
import i18n from "../../translate/i18n";

import { en, es, de, it, he, ru, ro, vi, zh } from "../../assets/img";

const LanguagesModal = ({ active, setActive }) => {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setActive(false);
  };

  return (
    <>
      <div
        className={
          active
            ? "bg-[#3B3C4E] rounded-md fixed top-[90px] right-[120px] transition-[0.5s]"
            : "hidden transition-[0.5s]"
        }
      >
        <div className="px-[27px] py-[13.5px] w-[184px]">
          <div
            onClick={() => changeLanguage("en")}
            className="flex items-center mb-[10px] cursor-pointer"
          >
            <img src={en} alt="en" className="rounded-[35px]" />
            <p className="ml-[17px] font-bold text-[16px] leading-6">English</p>
          </div>
          <div
            onClick={() => changeLanguage("es")}
            className="flex items-center mb-[10px] cursor-pointer"
          >
            <img src={es} alt="es" className="rounded-[35px]" />
            <p className="ml-[17px] font-bold text-[16px] leading-6">Español</p>
          </div>
          <div
            onClick={() => changeLanguage("de")}
            className="flex items-center mb-[10px] cursor-pointer"
          >
            <img src={de} alt="de" className="rounded-[35px]" />
            <p className="ml-[17px] font-bold text-[16px] leading-6">Deutsch</p>
          </div>
          <div
            onClick={() => changeLanguage("it")}
            className="flex items-center mb-[10px] cursor-pointer"
          >
            <img src={it} alt="it" className="rounded-[35px]" />
            <p className="ml-[17px] font-bold text-[16px] leading-6">
              Italiano
            </p>
          </div>
          <div
            onClick={() => changeLanguage("he")}
            className="flex items-center mb-[10px] cursor-pointer"
          >
            <img src={he} alt="he" className="rounded-[35px]" />
            <p className="ml-[17px] font-bold text-[16px] leading-6">עִברִית</p>
          </div>
          <div
            onClick={() => changeLanguage("ru")}
            className="flex items-center mb-[10px] cursor-pointer"
          >
            <img src={ru} alt="ru" className="rounded-[35px]" />
            <p className="ml-[17px] font-bold text-[16px] leading-6">Русский</p>
          </div>
          <div
            onClick={() => changeLanguage("ro")}
            className="flex items-center mb-[10px] cursor-pointer"
          >
            <img src={ro} alt="ro" className="rounded-[35px]" />
            <p className="ml-[17px] font-bold text-[16px] leading-6">Română</p>
          </div>
          <div
            onClick={() => changeLanguage("vi")}
            className="flex items-center mb-[10px] cursor-pointer"
          >
            <img src={vi} alt="vi" className="rounded-[35px]" />
            <p className="ml-[17px] font-bold text-[16px] leading-6">
              Tiếng Việt
            </p>
          </div>
          <div
            onClick={() => changeLanguage("zh")}
            className="flex items-center cursor-pointer"
          >
            <img src={zh} alt="zh" className="rounded-[35px]" />
            <p className="ml-[17px] font-bold text-[16px] leading-6">中国人</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default withNamespaces()(LanguagesModal);
