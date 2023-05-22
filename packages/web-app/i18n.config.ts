import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import commonEn from './src/locales/en/common.json';
import commonZh from './src/locales/zh-CN/common.json';

export const resources = {
  en: {
    translation: commonEn,
  },
  zh: {
    translation: commonZh,
  },
} as const;

i18n.use(initReactI18next).init({
  lng: 'en',
  resources,
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
  supportedLngs: ['en', 'pt', 'es', 'zh'],
  fallbackLng: 'en',
});

export {i18n};
