import React, { FormEvent } from 'react';
import { Icon, Form, Input, Button } from 'antd';
import { FormComponentProps } from 'antd/lib/form';

type Props = FormComponentProps;

const Login: React.FunctionComponent<Props> = props => {
  const { form } = props;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const values = form.getFieldsValue();
    console.log({ values });
    form.validateFields((err, values) => {
      console.log({ err, values });
      if (!err) {
        const { username, password } = values;
        // attempt login with credentials
        console.log({ username, password });
        // attemptLogin(username, password);
        // console.log({ values });
      }
    });
  };

  return (
    <Form
      onSubmit={handleSubmit}
      className="login-form"
      style={{ width: '300px', margin: '0 auto' }}
    >
      <Form.Item>
        {form.getFieldDecorator('username', {
          rules: [{ required: true, message: 'Please input your username!' }],
        })(
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
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
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
};

const LoginForm = Form.create({ name: 'login_form' })(Login);

export default LoginForm;
