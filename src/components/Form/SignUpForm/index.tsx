import React, { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom";
import { jwtDecode } from 'jwt-decode';

import { useGetAuthTokenForSignUpMutation } from '../../../store/api/authApi.tsx';
import { AuthContext, CustomJwtPayload } from '../../../AuthContext.tsx';
import '../index.css';

interface FormError{
  username?: string,
  firstname?: string,
  lastname?: string,
  email?: string,
  password?: string
}

const SignUpForm = () => {
  const {t} = useTranslation();
  const navigate = useNavigate();

  const { setTokenState } = useContext(AuthContext);
  const { setUserId } = useContext(AuthContext);

  const [getAuthTokenSignUp] = useGetAuthTokenForSignUpMutation();

  const [formData, setFormData] = useState({
    username: '',
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState<FormError>({});

  const validateForm = (data) => {
    const errors: FormError = {};

    if (!data.username.trim()) {
      errors.username = 'Username is required';
    } else if (data.username.length < 4) {
        errors.username = 'Username must be at least 4 characters long';
    }

    if (!data.firstname.trim()) {
      errors.firstname = 'Firstname is required';
    } else if (data.firstname.length < 2) {
        errors.firstname = 'Firstname must be at least 2 characters long';
    }

    if (!data.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
        errors.email = 'Email is invalid';
    }

    if (!data.lastname.trim()) {
      errors.lastname = 'Lastname is required';
    } else if (data.lastname.length < 2) {
        errors.lastname = 'Lastname must be at least 2 characters long';
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
      const result = await getAuthTokenSignUp({ 
        username: formData.username,
        firstname: formData.firstname,
        lastname: formData.lastname,
        email: formData.email, 
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
    <div className="auth-form register-form">
      <h2>{t('auth_title_up')}</h2>
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
            type="email" 
            name="email" 
            onChange={handleChange}
            value={formData.email}
            placeholder={t('auth_email')} 
          required />
          
          {errors.email && (
            <span className="error-message">
                {errors.email}
            </span>
          )}
        </div>

        <div>
          <input 
            type="text" 
            name="firstname" 
            onChange={handleChange}
            value={formData.firstname}
            placeholder={t('auth_firstname')} 
          required />
          
          {errors.firstname && (
            <span className="error-message">
                {errors.firstname}
            </span>
          )}
        </div>
        
        <div>
          <input 
            type="text" 
            name="lastname" 
            onChange={handleChange}
            value={formData.lastname}
            placeholder={t('auth_lastname')} 
          required />
          
          {errors.lastname && (
            <span className="error-message">
                {errors.lastname}
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
        
        <button type="submit">{t('auth_sign_up')}</button>
      </form>
    </div>
  );
};

export default SignUpForm;