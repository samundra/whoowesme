import React from 'react'
import '@ant-design/compatible/assets/index.css'
import { Input, Form, Button } from 'antd'
import { Store } from 'rc-field-form/lib/interface'

type Props = {}

const AddFriend: React.FunctionComponent<Props> = () => {
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
    console.log({ values })
  }

  return (
    <Form onFinish={onFinish}>
      <Form.Item
        label="First Name"
        {...formItemLayout}
        name="first_name"
        rules={[{ required: true, message: 'Please add first name of your friend' }]}
      >
        <Input placeholder="First name" />
      </Form.Item>
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
          Add friend{' '}
        </Button>
      </Form.Item>
    </Form>
  )
}

const AddFriendForm = AddFriend

export default AddFriendForm
