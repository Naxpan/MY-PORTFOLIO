import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "../src/assets/data/languages/lang-en.json";
import vi from "../src/assets/data/languages/lang-vi.json";

i18n
  .use(LanguageDetector) // tự detect ngôn ngữ
  .use(initReactI18next)
  .init({
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
    resources: {
      en: { translation: en },
      vi: { translation: vi },
    },
    load: "languageOnly",
    supportedLngs: ["vi", "en"],
    fallbackLng: "vi",
    initImmediate: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
