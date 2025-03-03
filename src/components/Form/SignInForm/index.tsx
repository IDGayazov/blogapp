import React, { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom";
import { jwtDecode } from 'jwt-decode';

import { useGetAuthTokenForSignInMutation } from '../../../store/api/authApi.tsx';
import { AuthContext, CustomJwtPayload } from '../../../AuthContext.tsx';
import '../index.css';

interface FormError{
  username?: string,
  password?: string
}

const SignInForm = () => {
  const {t} = useTranslation();
  const navigate = useNavigate();

  const { setTokenState } = useContext(AuthContext);
  const { setUserId } = useContext(AuthContext);

  const [getAuthTokenSignIn] = useGetAuthTokenForSignInMutation();

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const [errors, setErrors] = useState<FormError>({});

  const validateForm = (data) => {
    const errors: FormError = {};

    if (!data.username.trim()) {
      errors.username = 'Username is required';
    } else if (data.username.length < 4) {
        errors.username = 'Username must be at least 4 characters long';
    }

    if (!data.password) {
        errors.password = 'Password is required';
    } else if (data.password.length < 6) {
        errors.password = 'Password must be at least 6 characters long';
    }

    return errors;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value,
    });
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newErrors = validateForm(formData);
    setErrors(newErrors);

    try {
      const result = await getAuthTokenSignIn({ 
        username: formData.username, 
        password: formData.password
      }).unwrap();
      
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
        <form onSubmit={handleSubmit}>
            <div>
              <input 
                type="text" 
                name="username" 
                onChange={handleChange}
                value={formData.username}
                placeholder={t('auth_name')} 
              required />
              
              {errors.username && (
                <span className="error-message">
                    {errors.username}
                </span>
              )}
            </div>

            <div>
              <input 
                type="password" 
                name="password" 
                onChange={handleChange}
                value={formData.password}
                placeholder={t('auth_password')}  
              required />

              {errors.password && (
                <span className="error-message">
                    {errors.password}
                </span>
              )}
            </div>

            <button type="submit">{t('auth_sign_in')}</button>
        </form>
    </div>
  );
};

export default SignInForm;