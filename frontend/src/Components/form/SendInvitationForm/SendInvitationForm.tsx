import React, { FormEvent } from 'react'
import { Form } from '@ant-design/compatible'
import '@ant-design/compatible/assets/index.css'
import { Input, Button } from 'antd'
import { FormComponentProps } from '@ant-design/compatible/lib/form'

type Props = FormComponentProps

const SendInvitation: React.FunctionComponent<Props> = props => {
  const { form } = props

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

  const validateEmail = (rule: unknown, value: string, callback: Function): void => {
    console.log({ rule, value, callback })
    callback()
  }

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault()
    const values = form.getFieldsValue()
    console.log({ values })
    form.validateFields((err, values) => {
      console.log({ err, values })
      if (!err) {
        const { keys, names } = values
        console.log('Received values of form: ', values)
        console.log(
          'Merged values:',
          keys.map((key: string) => names[key]),
        )
      }
    })
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Item label="Email" {...formItemLayout}>
        {form.getFieldDecorator('email', {
          rules: [
            {
              required: true,
              whitespace: true,
              message: 'Please enter email of your friend',
            },
            {
              validator: validateEmail,
            },
          ],
        })(<Input placeholder="Email" />)}
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

const SendInvitationForm = Form.create({ name: 'send_invitation' })(SendInvitation)

export default SendInvitationForm
