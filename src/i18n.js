import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend) // для загрузки переводов из файлов
  .use(LanguageDetector) // для автоматического определения языка
  .use(initReactI18next) // инициализация react-i18next
  .init({
    fallbackLng: 'en', // язык по умолчанию
    supportedLngs: ['en', 'ru'],
    debug: true, // режим отладки (только для разработки)
    interpolation: {
      escapeValue: false, // экранирование не требуется для React
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // путь к файлам переводов
    },
  });

export default i18n;