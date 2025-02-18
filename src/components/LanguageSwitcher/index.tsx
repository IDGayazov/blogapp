import React from 'react';
import { useTranslation } from 'react-i18next';

import './index.css';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-switcher">
      <button
        className={`language-button language-button-left ${i18n.language === 'en' ? 'active' : ''}`}
        onClick={() => changeLanguage('en')}
      >
        en
      </button>
      <button
        className={`language-button language-button-right ${i18n.language === 'ru' ? 'active' : ''}`}
        onClick={() => changeLanguage('ru')}
      >
        ru
      </button>
    </div>
  );
}

export default LanguageSwitcher;