import React, { useState } from 'react'
import { LoadingOutlined, LockOutlined, UserOutlined } from '@ant-design/icons'
import '@ant-design/compatible/assets/index.css'
import { Spin, Input, Form, Button, message } from 'antd'
import { FormItemProps } from 'antd/lib/form'
import { Store } from 'rc-field-form/lib/interface'
import { useHistory } from 'react-router-dom'

type Props = {}

const SpinnerIcon = <LoadingOutlined style={{ fontSize: '24px', color: '#ffffff' }} spin />

const Login: React.FunctionComponent<Props> = () => {
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  const [usernameValidateStatus, setUsernameValidateStatus] = useState<FormItemProps['validateStatus']>('')
  const [passwordValidateStatus, setPasswordValidateStatus] = useState<FormItemProps['validateStatus']>('')

  const onUsernameChange = (value: string): void => {
    const feedback = value === 'demo' ? 'success' : 'error'
    setUsernameValidateStatus(feedback)
  }

  const onPasswordChange = (value: string): void => {
    const feedback = value === 'demo' ? 'success' : 'error'
    setPasswordValidateStatus(feedback)
  }

  const onFinish = (values: Store): void => {
    console.log({ values })
    setLoading(true)
    const { username, password } = values

    // TODO: Login with username, password
    // attempt login with credentials
    console.log({ username, password })
    if (username === 'demo' && password === 'demo') {
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
      <Form.Item
        name="username"
        hasFeedback
        validateStatus={usernameValidateStatus}
        rules={[{ required: true, message: 'Please enter username' }]}
      >
        <Input
          prefix={<UserOutlined />}
          placeholder="Username"
          onChange={(e): void => onUsernameChange(e.currentTarget.value)}
        />
      </Form.Item>
      <Form.Item
        hasFeedback
        name="password"
        validateStatus={passwordValidateStatus}
        rules={[{ required: true, message: 'Please enter password' }]}
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
