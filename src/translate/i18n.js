import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";

import languageEN from "../assets/languages/en/language.json";
import languageDE from "../assets/languages/de/language.json";
import languageES from "../assets/languages/es/language.json";
import languageHE from "../assets/languages/he/language.json";
import languageIT from "../assets/languages/it/language.json";
import languageRO from "../assets/languages/ro/language.json";
import languageRU from "../assets/languages/ru/language.json";
import languageVI from "../assets/languages/vi/language.json";
import languageZH from "../assets/languages/zh/language.json";

const resources = {
  en: {
    translation: languageEN,
  },
  de: {
    translation: languageDE,
  },
  es: {
    translation: languageES,
  },
  he: {
    translation: languageHE,
  },
  it: {
    translation: languageIT,
  },
  ro: {
    translation: languageRO,
  },
  ru: {
    translation: languageRU,
  },
  vi: {
    translation: languageVI,
  },
  zh: {
    translation: languageZH,
  },
};

i18n.use(reactI18nextModule).init({
  resources,
  lng: "en",

  keySeparator: false,

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
