import React from 'react';
import './AuthPage.css';
import { useTranslation } from 'react-i18next';

const AuthPage = () => {
  const {t} = useTranslation();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Форма авторизации отправлена');
    // Здесь можно добавить логику авторизации
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    console.log('Форма регистрации отправлена');
    // Здесь можно добавить логику регистрации
  };

  return (
    <div className="auth-container">
      <div className="auth-form login-form">
        <h2>{t('auth_title_in')}</h2>
        <form onSubmit={handleLoginSubmit}>
          <input type="email" placeholder={t('auth_email')} required />
          <input type="password" placeholder={t('auth_password')}  required />
          <button type="submit">{t('auth_sign_in')}</button>
        </form>
      </div>

      <div className="auth-form register-form">
        <h2>{t('auth_title_up')}</h2>
        <form onSubmit={handleRegisterSubmit}>
          <input type="text" placeholder={t('auth_name')} required />
          <input type="email" placeholder={t('auth_email')} required />
          <input type="password" placeholder={t('auth_password')} required />
          <button type="submit">{t('auth_sign_up')}</button>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;