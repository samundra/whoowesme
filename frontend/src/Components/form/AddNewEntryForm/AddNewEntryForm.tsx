import React from 'react'
import { SaveFilled } from '@ant-design/icons'
import '@ant-design/compatible/assets/index.css'
import { Input, Form, Button, DatePicker, Select } from 'antd'
import moment from 'moment'
import { Store } from 'rc-field-form/lib/interface'
import { useHistory } from 'react-router-dom'
import TextArea from 'antd/lib/input/TextArea'

type Props = {}

const AddNewEntry: React.FunctionComponent<Props> = () => {
  const history = useHistory()

  const onFinish = (values: Store): void => {
    console.log({ values })
    // Todo: Make API call to save this
    // For now lets take to listing page only
    history.push('/transactions/list') // We don't have this page yet.
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

  function onChange(date: moment.Moment | null, dateString: string): void {
    console.log(date, dateString)
  }

  const { Option } = Select

  return (
    <Form {...formItemLayout} onFinish={onFinish}>
      <Form.Item
        label="Date for transaction"
        name="date"
        rules={[{ required: true, message: 'Please select date' }]}
      >
        <DatePicker onChange={onChange} />
      </Form.Item>
      <Form.Item
        label="Category"
        name="category"
        rules={[{ required: true, message: 'Please select category' }]}
      >
        <Select placeholder="Choose expense category" mode="multiple">
          <Option value="personal">Personal</Option>
          <Option value="gym">Gym</Option>
          <Option value="spotify">Spotify</Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="Enter amount"
        extra="Application currency is in THB."
        name="amount"
        rules={[{ required: true, message: 'Please enter amount' }]}
      >
        <Input addonBefore={`THB (฿)`} />
      </Form.Item>
      <Form.Item
        label="Description"
        extra="What is this amount about ?"
        name="description"
        rules={[{ required: true, message: 'Please enter descriptions' }]}
      >
        <TextArea rows={3} />
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          <SaveFilled /> Add Entry
        </Button>
      </Form.Item>
    </Form>
  )
}

const AddNewEntryForm = AddNewEntry

export default AddNewEntryForm
