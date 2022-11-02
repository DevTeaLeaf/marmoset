import React from "react";
import copy from "../../assets/img/copy.png";

import i18n from "../../translate/i18n";
import { withNamespaces, WithNamespaces } from "react-i18next";

const Copy = ({ value, idx, t }) => {
  const copyHandler = () => {
    document.getElementById(idx).select();
    document.execCommand("copy");
  };
  return (
    <>
      <div className="flex md:flex-row flex-col items-center">
        <input
          type="text"
          readOnly={true}
          id={idx}
          value={value}
          className="addr-input"
        />
        <button className="addr-button md:mt-0 mt-5" onClick={copyHandler}>
          <img src={copy} alt="copy" /> {t("button_copy")}
        </button>
      </div>
    </>
  );
};

export default withNamespaces()(Copy);
