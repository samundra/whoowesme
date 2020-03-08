import React from 'react'
import '@ant-design/compatible/assets/index.css'
import { Input, Form, Button } from 'antd'
import { Store } from 'rc-field-form/lib/interface'

type Props = {}

const SendInvitation: React.FunctionComponent<Props> = () => {
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 0,
      },
    },
  }

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 6 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 18 },
    },
  }

  const onFinish = (values: Store): void => {
    const { keys, names } = values
    console.log('Received values of form: ', values)
    console.log(
      'Merged values:',
      keys.map((key: string) => names[key]),
    )
  }

  return (
    <Form onFinish={onFinish}>
      <Form.Item
        label="Email"
        {...formItemLayout}
        name="email"
        rules={[
          {
            required: true,
            whitespace: true,
            message: 'Please enter email of your friend',
          },
        ]}
      >
        <Input placeholder="Email" />
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          {' '}
          Send Invitation{' '}
        </Button>
      </Form.Item>
    </Form>
  )
}

const SendInvitationForm = SendInvitation

export default SendInvitationForm
