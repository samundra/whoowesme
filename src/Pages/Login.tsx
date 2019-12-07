import React from 'react';
import { LoginForm } from 'Components/form';
import LoginPageLayout from 'Layout/LoginPageLayout';

export const menu: MenuLink = {
  to: '/login',
  label: 'Login',
};

const Login: React.FunctionComponent = () => {
  return (
    <LoginPageLayout>
      <LoginForm />
    </LoginPageLayout>
  );
};

export default Login;
