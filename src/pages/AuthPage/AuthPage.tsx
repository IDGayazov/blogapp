import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { useGetAuthTokenForSignInMutation } from '../../store/api/authApi.tsx';

import './AuthPage.css';
import { AuthContext } from '../../AuthContext.tsx';

const AuthPage = () => {
  const {t} = useTranslation();
  const [getAuthToken] = useGetAuthTokenForSignInMutation();
  const {token, setToken} = useContext(AuthContext);

  const handleLoginSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get('name') as string;
    const password = formData.get('password') as string;

    try {
      const result = await getAuthToken({ username: name, password: password }).unwrap();
      console.log('Auth Token:', result);
      
      localStorage.setItem('token', result.token);
      setToken(result.token);
    } catch (err) {
      console.error('Failed to sign in:', err);
    }
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
          <input type="name" name="name" placeholder={t('auth_name')} required />
          <input type="password" name="password" placeholder={t('auth_password')}  required />
          <button type="submit">{t('auth_sign_in')}</button>
        </form>
      </div>

      <div className="auth-form register-form">
        <h2>{t('auth_title_up')}</h2>
        <form onSubmit={handleRegisterSubmit}>
          <input type="name" name="name" placeholder={t('auth_name')} required />
          <input type="email" name="email" placeholder={t('auth_email')} required />
          <input type="password" name="password" placeholder={t('auth_password')} required />
          <button type="submit">{t('auth_sign_up')}</button>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;