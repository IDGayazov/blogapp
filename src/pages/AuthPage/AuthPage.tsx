import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom";

import { 
  useGetAuthTokenForSignInMutation, 
  useGetAuthTokenForSignUpMutation 
} from '../../store/api/authApi.tsx';
import './AuthPage.css';
import { AuthContext } from '../../AuthContext.tsx';

const AuthPage = () => {
  const {t} = useTranslation();
  const navigate = useNavigate();
  const { setToken } = useContext(AuthContext);

  const [getAuthTokenSignIn] = useGetAuthTokenForSignInMutation();
  const [getAuthTokenSignUp] = useGetAuthTokenForSignUpMutation();

  const handleLoginSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get('name') as string;
    const password = formData.get('password') as string;

    try {
      const result = await getAuthTokenSignIn({ username: name, password: password }).unwrap();
      console.log('Auth Token:', result);
      
      localStorage.setItem('token', result.token);
      setToken(result.token);
      navigate('/');
    } catch (err) {
      console.error('Failed to sign in:', err);
    }
  };

  const handleRegisterSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = formData.get('name') as string;
    const firstname = formData.get('firstname') as string;
    const lastname = formData.get('lastname') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    try {
      const result = await getAuthTokenSignUp({ 
        username: name, 
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password 
      }).unwrap();
   
        console.log('Auth Token:', result);
      
      localStorage.setItem('token', result.token);
      setToken(result.token);
      navigate('/');
    } catch (err) {
      console.error('Failed to sign up:', err);
    }
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
          <input type="firstname" name="firstname" placeholder={t('auth_firstname')} required />
          <input type="lastname" name="lastname" placeholder={t('auth_lastname')} required />
          <input type="password" name="password" placeholder={t('auth_password')} required />
          <button type="submit">{t('auth_sign_up')}</button>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;