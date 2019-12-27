import React, { FormEvent, useState } from 'react';
import { Icon, Spin, Form, Input, Button, Alert } from 'antd';
import { FormComponentProps, FormItemProps } from 'antd/lib/form';
import { useHistory } from 'react-router-dom';

type Props = FormComponentProps;

const SpinnerIcon = (
  <Icon type="loading" style={{ fontSize: '24px', color: '#ffffff' }} spin />
);

const Login: React.FunctionComponent<Props> = props => {
  const { form } = props;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const history = useHistory();
  const [usernameValidateStatus, setUsernameValidateStatus] = useState<
    FormItemProps['validateStatus']
  >('');
  const [passwordValidateStatus, setPasswordValidateStatus] = useState<
    FormItemProps['validateStatus']
  >('');

  const onUsernameChange = (value: string): void => {
    const feedback = value === 'demo' ? 'success' : 'error';
    setUsernameValidateStatus(feedback);
  };

  const onPasswordChange = (value: string): void => {
    const feedback = value === 'demo' ? 'success' : 'error';
    setPasswordValidateStatus(feedback);
  };

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    setLoading(true);

    form.validateFields((err, values) => {
      if (!err) {
        const { username, password } = values;

        // TODO: Login with username, password
        // attempt login with credentials
        console.log({ username, password });
        if (username === 'demo' && password === 'demo') {
          // Redirect to login after success:
          history.push('/dashboard');
        } else {
          setLoading(false);
          setError('Invalid username or password.');
        }
      }
    });
  };

  return (
    <Form
      onSubmit={handleSubmit}
      className="login-form"
      style={{ width: '300px', margin: '0 auto', height: '100%' }}
    >
      <Form.Item style={{ textAlign: 'center' }}>
        <img src="/img/logo.png" alt="Who owes me" />
      </Form.Item>
      {error && (
        <Form.Item>
          <Alert type="error" message="Invalid username or password" />
        </Form.Item>
      )}
      <Form.Item
        hasFeedback
        extra="username: demo"
        validateStatus={usernameValidateStatus}
      >
        {form.getFieldDecorator('username', {
          initialValue: 'demo',
          rules: [{ required: true, message: 'Please input your username!' }],
        })(
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            style={{ height: '48px' }}
            placeholder="Username"
            onChange={(e): void => onUsernameChange(e.currentTarget.value)}
          />
        )}
      </Form.Item>
      <Form.Item
        hasFeedback
        help="password: demo"
        validateStatus={passwordValidateStatus}
      >
        {form.getFieldDecorator('password', {
          initialValue: 'demo',
          rules: [{ required: true, message: 'Please input your Password!' }],
        })(
          <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            style={{ height: '48px' }}
            type="password"
            placeholder="Password"
            onChange={(e): void => onPasswordChange(e.currentTarget.value)}
          />
        )}
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
    </Form>
  );
};

const LoginForm = Form.create({ name: 'login_form' })(Login);

export default LoginForm;
