import React, { FormEvent, useState } from 'react';
import { Icon, Spin, Form, Input, Button, Alert } from 'antd';
import { FormComponentProps } from 'antd/lib/form';

type Props = FormComponentProps;

const SpinnerIcon = (
  <Icon type="loading" style={{ fontSize: '24px', color: '#ffffff' }} spin />
);

const Login: React.FunctionComponent<Props> = props => {
  const { form } = props;
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    form.validateFields((err, values) => {
      if (!err) {
        const { username, password } = values;

        // TODO: Login with username, password
        // attempt login with credentials
        console.log({ username, password });
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
      <Form.Item>
        <Alert type="error" message="Invalid username or password" />
      </Form.Item>
      <Form.Item>
        {form.getFieldDecorator('username', {
          rules: [{ required: true, message: 'Please input your username!' }],
        })(
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            style={{ height: '48px' }}
            placeholder="Username"
          />
        )}
      </Form.Item>
      <Form.Item>
        {form.getFieldDecorator('password', {
          rules: [{ required: true, message: 'Please input your Password!' }],
        })(
          <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            style={{ height: '48px' }}
            type="password"
            placeholder="Password"
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
