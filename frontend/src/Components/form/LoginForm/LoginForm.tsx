import React, { useState } from 'react'
import { LoadingOutlined, LockOutlined, UserOutlined } from '@ant-design/icons'
import '@ant-design/compatible/assets/index.css'
import { Spin, Input, Form, Button, message, FormItemProps } from 'antd'
import { Store } from 'rc-field-form/lib/interface'
import { useHistory } from 'react-router-dom'
import AuthService from '../../../Services/auth-service'

type Props = {}

const SpinnerIcon = <LoadingOutlined style={{ fontSize: '24px', color: '#ffffff' }} spin />

const Login: React.FunctionComponent<Props> = () => {
  const [loading, setLoading] = useState(false)
  const [passwordValidateStatus, setPasswordValidateStatus] = useState<FormItemProps['validateStatus']>('')
  const history = useHistory()

  const onPasswordChange = (value: string): void => {
    const feedback = value === 'demo' ? 'success' : 'error'
    setPasswordValidateStatus(feedback)
  }

  const onFinish = (values: Store): void => {
    console.log({ values })
    setLoading(true)
    const { email, password } = values

    // TODO: Login with username, password
    // attempt login with credentials
    console.log({ email, password })
    AuthService()
      .attemptLogin(email, password)
      .then(data => {
        console.log({ data, logged: true })
      })
      .catch(error => console.error(error))

    if (email === 'demo' && password === 'demo') {
      message.success('Logged in successfully.', 0.5)
      // Redirect to login after success:
      history.push('/dashboard')
    } else {
      setLoading(false)
    }
  }

  return (
    <Form onFinish={onFinish} className="login-form" style={{ width: '300px' }}>
      <Form.Item style={{ textAlign: 'center' }}>
        <img src="/img/logo.png" alt="Who owes me" />
      </Form.Item>
      <Form.Item name="email" hasFeedback rules={[{ required: true, message: 'Please enter email' }]}>
        <Input prefix={<UserOutlined />} placeholder="Enter email" />
      </Form.Item>
      <Form.Item
        hasFeedback
        name="password"
        rules={[{ required: true, message: 'Please enter password' }]}
        validateStatus={passwordValidateStatus}
      >
        <Input
          prefix={<LockOutlined />}
          type="password"
          placeholder="Password"
          onChange={(e): void => onPasswordChange(e.currentTarget.value)}
        />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button"
          style={{ width: '100%', height: '50px' }}
        >
          {loading && <Spin indicator={SpinnerIcon} />}
          {!loading && 'Log in'}
        </Button>
      </Form.Item>
      <Form.Item>
        <p>username: demo / password: demo</p>
      </Form.Item>
    </Form>
  )
}

const LoginForm = Login

export default LoginForm
