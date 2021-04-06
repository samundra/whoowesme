import React, { useState } from 'react'
import { LockOutlined } from '@ant-design/icons'
import { Row, Col, Input, Button, Form, Alert, notification } from 'antd'
import { Store } from 'rc-field-form/lib/interface'
import { AlertProps } from 'antd/lib/alert'
import userApiService from '../../../Services/user-service'
import { RuleObject } from 'antd/lib/form'

type Props = {}

interface FlashMessage {
  type: AlertProps['type']
  msg: string
}

const ChangePasswordForm: React.FunctionComponent<Props> = () => {
  const [errorMsg, setErrorMsg] = useState<string[] | undefined>(undefined)
  const [flash, setFlash] = useState<FlashMessage>({ type: undefined, msg: '' })

  const [form] = Form.useForm()
  const onFinish = async (values: Store): Promise<void> => {
    setFlash({ type: undefined, msg: '' })
    setErrorMsg(undefined)

    const { oldPassword, newPassword } = values
    form.setFieldsValue({
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
    })
    try {
      await userApiService.changePassword(oldPassword, newPassword)
      notification.success({
        message: 'Success',
        description: 'Password changed successfully.',
      })
    } catch (error) {
      notification.error({
        message: 'Error',
        description: 'Password changed failed.',
      })
      const err = {
        type: 'error',
        msg: '',
      } as FlashMessage

      if (error.response && error.response.data) {
        const resp = error.response.data
        if (+resp.statusCode >= 400 && +resp.statusCode <= 500) {
          err.msg = resp.message
        }
      } else {
        err.msg = error.message
      }

      setFlash(err)
    }
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
    <Row>
      <Col span={24}>
        {flash.type ? <Alert message={flash.msg} type={flash.type} /> : null}
        <br />
        {errorMsg ? (
          <>
            <ul>
              {errorMsg.map((m: string) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </>
        ) : null}
      </Col>
      <Col span={24}>
        <Form
          {...formItemLayout}
          onFinish={onFinish}
          form={form}
          name="change-password-form"
          initialValues={{
            oldPassword: '',
            newPassword: '',
            confirmPassword: '',
          }}
        >
          <Form.Item
            label="Old password"
            name="oldPassword"
            rules={[{ required: true, message: 'Please enter old password.' }]}
            hasFeedback
          >
            <Input.Password placeholder="Old password" />
          </Form.Item>
          <Form.Item
            label="New Password"
            name="newPassword"
            rules={[{ required: true, message: 'Please enter new password.' }]}
            hasFeedback
          >
            <Input.Password placeholder="New password" />
          </Form.Item>
          <Form.Item
            label="Confirm new password"
            name="confirmPassword"
            rules={[
              {
                required: true,
                message: 'Please confirm new password.',
              },
              ({ getFieldValue }): RuleObject => ({
                validator(_: RuleObject, value: string): Promise<void> {
                  if (!value || getFieldValue('newPassword') === value) {
                    return Promise.resolve()
                  }
                  return Promise.reject(new Error('The two passwords that you entered do not match!'))
                },
              }),
            ]}
            dependencies={['newPassword']}
            hasFeedback
          >
            <Input type="password" placeholder="Confirm new password" />
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              <LockOutlined /> Change Password
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  )
}

export default ChangePasswordForm
