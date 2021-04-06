import React from 'react'
import { SaveFilled } from '@ant-design/icons'
import { notification, Col, Alert, Input, Form, DatePicker, Button, Select } from 'antd'
import { Store } from 'rc-field-form/lib/interface'
import TextArea from 'antd/lib/input/TextArea'
import { useMutation } from 'react-query'
import axios from 'instance'
import { AxiosError, AxiosResponse } from 'axios'
import { useHistory } from 'react-router-dom'
import { parseError } from 'helper'

type Props = {}

type Transaction = {
  amount: string | number
  categories: string
  date: string
  description: string
  createdAt: string
  id: string
  userId: string
}

interface CreateTransactionArgs {
  amount: string | number
  categories: string
  date: string
  description: string
}

interface ValidationError {
  error: boolean
  messages: string[]
}

interface FieldErrors {
  amount: ValidationError
}

// Initial errors
const errors = {
  amount: { error: false, messages: [] },
} as FieldErrors

// @ts-ignore
const AddNewEntry: React.FunctionComponent<Props> = () => {
  const [transaction, setRecentTransaction] = React.useState<Transaction | undefined>()
  const [form] = Form.useForm()
  const [errorMessages, setErrorMessages] = React.useState<FieldErrors>()
  const history = useHistory()
  const { isLoading, isSuccess, isError, error, mutate } = useMutation<
    AxiosResponse,
    AxiosError,
    CreateTransactionArgs,
    void
  >((data: CreateTransactionArgs): any => axios.post('/transactions', data), {
    onMutate: values => {
      console.log({ values })
      // do nothing
    },
    onError: error => {
      setErrorMessages(errors)
      // Authorization Required
      if (error.response?.status == 401) {
        notification.error({
          message: 'Unauthorized',
          description: 'Please login to continue.',
          duration: 3, // seconds
        })

        history.push('/login')
      }

      if (error.response && error.response?.status >= 400 && error.response?.status < 499) {
        const newErrors = Object.assign({}, errors)
        // error.message = 'Something went wrong. Please fix the error.'
        const errMessages = parseError(error)

        errMessages.forEach(m => {
          if (m.indexOf('amount') > -1) {
            newErrors.amount.error = true
            newErrors.amount.messages.push(m)
          }
        })

        setErrorMessages(newErrors)
      }
    },
    onSuccess: data => {
      form.resetFields()
      setErrorMessages({ amount: { error: false, messages: [] } })

      const trans = data.data as Transaction
      setRecentTransaction(trans)
    },
  })

  const onFinish = (values: Store): void => {
    const { amount, categories, date, description } = values
    const args = {
      amount: +amount,
      categories: categories,
      date: date,
      description: description,
    } as CreateTransactionArgs

    mutate(args)
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

  const renderErrorMessages = (fieldName: keyof FieldErrors): JSX.Element[] | null => {
    const field = errorMessages?.[fieldName]
    if (field) {
      const messages: string[] = field['messages'] ? field['messages'] : []
      return messages.map(m => (
        <p key={m} style={{ color: 'red' }}>
          {m}
        </p>
      ))
    }

    return null
  }

  function onChange(date: moment.Moment | null, dateString: string): void {
    console.log(date, dateString)
  }

  const { Option } = Select

  const MessageBox = (): JSX.Element => {
    return (
      <>
        {isError ? (
          <Col span={24}>
            <Alert message={error?.message} type="error" />
          </Col>
        ) : null}
        {isSuccess ? (
          <Col span={24}>
            <Alert message={`Transaction Added ${transaction?.id} `} type="success" />
          </Col>
        ) : null}
      </>
    )
  }

  return (
    <>
      {isLoading ? 'Please wait adding transaction' : <MessageBox />}
      <br />
      <Form {...formItemLayout} onFinish={onFinish} form={form}>
        <Form.Item
          label="Date for transaction"
          name="date"
          rules={[{ required: true, message: 'Please select date' }]}
          hasFeedback
        >
          <DatePicker onChange={onChange} />
        </Form.Item>
        <Form.Item
          label="Categories"
          name="categories"
          rules={[{ required: true, message: 'Please select categories' }]}
          hasFeedback
        >
          <Select placeholder="Choose expense categories" mode="multiple">
            <Option value="personal">Personal</Option>
            <Option value="gym">Gym</Option>
            <Option value="spotify">Spotify</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Enter amount"
          extra="Application currency is in THB."
          name="amount"
          hasFeedback
          rules={[{ required: true, message: 'Please enter amount' }]}
          validateStatus={errorMessages?.['amount'].error ? 'error' : ''}
        >
          <Input addonBefore={`THB (฿)`} />
        </Form.Item>
        {errors.amount.error ? (
          <>
            <Col offset={8}>{renderErrorMessages('amount')}</Col>
          </>
        ) : null}
        <Form.Item
          label="Description"
          extra="What is this amount about ?"
          name="description"
          rules={[{ required: true, message: 'Please enter descriptions' }]}
          hasFeedback
        >
          <TextArea rows={3} maxLength={360} />
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" loading={isLoading}>
            <SaveFilled /> Save
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

const AddNewEntryForm = AddNewEntry

export default AddNewEntryForm
