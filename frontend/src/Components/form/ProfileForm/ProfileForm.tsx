import React, {FormEvent} from 'react'
import {Icon, message, Form, Input, Button} from 'antd'
import {FormComponentProps} from 'antd/lib/form'
import {RouteComponentProps} from 'react-router-dom'

type Props = FormComponentProps & RouteComponentProps

const PForm: React.FunctionComponent<Props> = props => {
  const {form} = props

  const onFormSubmit = (e: FormEvent): void => {
    e.preventDefault()

    form.validateFields((err, values) => {
      if (!err) {
        console.log({values})

        // Todo: Make API call to save this
        // For now lets take to listing page only
        // history.push('/transactions/list'); // We don't have this page yet.
        message.success('profile updated successfully.')
      } else {
        message.error('Please enter all required fields.')
      }
    })
  }

  const formItemLayout = {
    labelCol: {
      xs: {span: 24},
      sm: {span: 8},
    },
    wrapperCol: {
      xs: {span: 24},
      sm: {span: 16},
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

  const {getFieldDecorator} = form

  return (
    <Form {...formItemLayout} onSubmit={onFormSubmit}>
      <Form.Item label="Firstname">
        {getFieldDecorator('firstname', {
          initialValue: '',
          rules: [{required: true, message: 'Please enter firstname.'}],
        })(<Input placeholder="Enter firstname" />)}
      </Form.Item>
      <Form.Item label="Lastname">
        {getFieldDecorator('lastname', {
          initialValue: '',
          rules: [{required: true, message: 'Please enter lastname.'}],
        })(<Input placeholder="Enter Lastname" />)}
      </Form.Item>
      <Form.Item label="Email">
        {getFieldDecorator('email', {
          initialValue: '',
          rules: [
            {
              type: 'email',
              required: true,
              message: 'Email is required.',
            },
          ],
        })(<Input placeholder="Email" />)}
      </Form.Item>
      <Form.Item label="Password">
        {getFieldDecorator('password', {
          initialValue: '',
          rules: [{required: true, message: 'Enter password'}],
        })(<Input type="password" placeholder="Enter password" />)}
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          <Icon type="user" /> Update profile
        </Button>
      </Form.Item>
    </Form>
  )
}

const ProfileForm = Form.create({name: 'profile_form'})(PForm)

export default ProfileForm
