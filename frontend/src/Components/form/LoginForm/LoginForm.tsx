import React, { useState } from 'react'
import { LoadingOutlined, LockOutlined, UserOutlined } from '@ant-design/icons'
import { Spin, Input, Form, Button, message, Alert } from 'antd'
import { Store } from 'rc-field-form/lib/interface'
import { useHistory } from 'react-router-dom'
import AuthService from '../../../Services/auth-service'
import { AxiosResponse } from 'axios'
import { extractErrorMessage } from '../../../helper'

type Props = {}

const SpinnerIcon = <LoadingOutlined style={{ fontSize: '24px', color: '#ffffff' }} spin />
interface APILoginResponse {
  access_token: string
}

type LoginState = 'INIT' | 'INPROGRESS'

const Login: React.FunctionComponent<Props> = () => {
  const [loading, setLoading] = useState<LoginState>('INIT')
  const [errorMessage, setErrorMessage] = useState<undefined | string>(undefined)
  const history = useHistory()

  const onFinish = async (values: Store): Promise<void> => {
    setLoading('INPROGRESS')
    setErrorMessage(undefined)
    const { email, password } = values
    let result: AxiosResponse<APILoginResponse>

    try {
      result = await AuthService().attemptLogin<APILoginResponse>(email, password)
      if (result && result.data) {
        const accessToken = result.data.access_token
        localStorage.setItem('access_token', accessToken)
        message.success('Logged in successfully.', 2)
        setLoading('INIT')
        history.push('/dashboard')
      }
    } catch (error) {
      setLoading('INIT')
      const err = extractErrorMessage(error)
      if (err === 'Unauthorized') {
        setErrorMessage('Invalid username/password')
      } else {
        setErrorMessage(err)
      }
    }
  }

  return (
    <Form
      onFinish={onFinish}
      className="login-form"
      style={{ width: '300px' }}
      initialValues={{
        email: '',
        password: '',
      }}
    >
      <Form.Item style={{ textAlign: 'center' }}>
        <img src="/img/logo.png" alt="Who owes me" />
      </Form.Item>
      <Form.Item name="email" hasFeedback rules={[{ required: true, message: 'Please enter email' }]}>
        <Input prefix={<UserOutlined />} placeholder="Enter email" />
      </Form.Item>
      <Form.Item hasFeedback name="password" rules={[{ required: true, message: 'Please enter password' }]}>
        <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button"
          style={{ width: '100%', height: '50px' }}
        >
          {loading === 'INPROGRESS' ? <Spin indicator={SpinnerIcon} /> : null}
          Log in
        </Button>
      </Form.Item>
      <Form.Item>{errorMessage ? <Alert message={errorMessage} type="error" /> : null}</Form.Item>
    </Form>
  )
}

const LoginForm = Login

export default LoginForm
