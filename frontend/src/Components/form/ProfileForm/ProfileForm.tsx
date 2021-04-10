import React from 'react'
import { UserOutlined } from '@ant-design/icons'
import { message, Input, Button, Form } from 'antd'
import { Store } from 'rc-field-form/lib/interface'

type Props = {}

const PForm: React.FunctionComponent<Props> = () => {
  const onFinish = (values: Store): void => {
    console.log({ values })

    // Todo: Make API call to save this
    // For now lets take to listing page only
    // history.push('/transactions/list'); // We don't have this page yet.
    message.success('profile updated successfully.')
  }

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  }
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  }

  return (
    <Form {...formItemLayout} onFinish={onFinish}>
      <Form.Item
        label="Firstname"
        name="firstname"
        rules={[{ required: true, message: 'Please enter firstname.' }]}
      >
        <Input placeholder="Enter firstname" />
      </Form.Item>
      <Form.Item
        label="Lastname"
        name="lastname"
        rules={[{ required: true, message: 'Please enter lastname.' }]}
      >
        <Input placeholder="Enter Lastname" />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            type: 'email',
            required: true,
            message: 'Email is required.',
          },
        ]}
      >
        <Input placeholder="Email" />
      </Form.Item>
      <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Enter password' }]}>
        <Input type="password" placeholder="Enter password" />
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          <UserOutlined /> Update profile
        </Button>
      </Form.Item>
    </Form>
  )
}

const ProfileForm = PForm

export default ProfileForm
