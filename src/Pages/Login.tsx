import React from 'react';
import { LoginForm } from 'Components/form';

export const menu = {
  to: '/login',
  label: 'Login',
};

const Login: React.FunctionComponent = () => {
  return <LoginForm />;
};

export default Login;
