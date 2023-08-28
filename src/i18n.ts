import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

import { RU_I18N } from './i18n-translates/ru.i18n';

const resources = {
  ru: RU_I18N,
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'ru',
  fallbackLng: 'ru',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
