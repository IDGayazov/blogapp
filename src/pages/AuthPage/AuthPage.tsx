import React from 'react';

import SignInForm from '../../components/Form/SignInForm/index.tsx';
import SignUpForm from '../../components/Form/SignUpForm/index.tsx';
import './AuthPage.css';

const AuthPage = () => {
  return (
    <div className="auth-container">
      <SignInForm/>
      <SignUpForm/>
    </div>
  );
};

export default AuthPage;