import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEn from './en/index';
import translationKo from './ko/index';
import translationNe from './ne/index';

export const defaultNS = 'common';

const resources = {
  en: translationEn,
  ko: translationKo,
  ne: translationNe,
} as const;

const userLanguage = window.navigator.language;

i18n.use(initReactI18next).init({
  resources,
  defaultNS,
  ns: Object.keys(translationEn),
  lng: userLanguage || 'en',
  fallbackLng: 'en',
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
