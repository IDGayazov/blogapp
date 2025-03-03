import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom";
import { jwtDecode } from 'jwt-decode';

import { useGetAuthTokenForSignInMutation } from '../../../store/api/authApi.tsx';
import { AuthContext, CustomJwtPayload } from '../../../AuthContext.tsx';
import '../index.css';

const SignInForm = () => {
  const {t} = useTranslation();
  const navigate = useNavigate();

  const { setTokenState } = useContext(AuthContext);
  const { setUserId } = useContext(AuthContext);

  const [getAuthTokenSignIn] = useGetAuthTokenForSignInMutation();

  const handleLoginSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get('name') as string;
    const password = formData.get('password') as string;

    try {
      const result = await getAuthTokenSignIn({ username: name, password: password }).unwrap();
      console.log('Auth Token:', result);
      
      localStorage.setItem('token', result.token);
      setTokenState(result.token);

      const decodeToken = jwtDecode<CustomJwtPayload>(result.token);
      localStorage.setItem('userId', decodeToken.id);
      setUserId(decodeToken.id);

      navigate('/');
    } catch (err) {
      console.error('Failed to sign in:', err);
    }
  };

  return (
    <div className="auth-form login-form">
        <h2>{t('auth_title_in')}</h2>
        <form onSubmit={handleLoginSubmit}>
            <input type="name" name="name" placeholder={t('auth_name')} required />
            <input type="password" name="password" placeholder={t('auth_password')}  required />
            <button type="submit">{t('auth_sign_in')}</button>
        </form>
    </div>
  );
};

export default SignInForm;