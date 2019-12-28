import React from 'react'
import {LoginForm} from 'Components/form'
import LoginPageLayout from 'Layout/LoginPageLayout'

const Login: React.FunctionComponent = () => {
  return (
    <LoginPageLayout>
      <LoginForm />
    </LoginPageLayout>
  )
}

export default Login
