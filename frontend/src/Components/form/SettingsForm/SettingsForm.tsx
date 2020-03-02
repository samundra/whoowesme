import React, { useState } from 'react'
import { SaveOutlined } from '@ant-design/icons'
import { Form } from '@ant-design/compatible'
import '@ant-design/compatible/assets/index.css'
import { Button, Select, Row, Col } from 'antd'
import { FormComponentProps } from '@ant-design/compatible/lib/form'

const { Option } = Select

type Props = FormComponentProps
type CurrencyValue = string

const Setting: React.FunctionComponent<Props> = props => {
  const { form } = props
  const { getFieldDecorator } = form
  const defaultCurrencySymbol = 'baht'
  const [currency, setCurrency] = useState<CurrencyValue>(defaultCurrencySymbol)
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

  const onSave = (): void => {
    console.log('save settings form')
  }

  const onCurrencyChange = (currencyValue: CurrencyValue): void => {
    setCurrency(currencyValue)
  }

  return (
    <Row justify="center" align="middle">
      <Col flex={16}>
        <Form {...formItemLayout}>
          <Form.Item
            label="Choose currency"
            extra="This currency symbol will be used in application and all transctions."
          >
            {getFieldDecorator('currency', {
              initialValue: 'baht',
              rules: [{ required: true, message: 'Please choose currency symbol.' }],
            })(
              <Select
                placeholder="Choose currency"
                onChange={onCurrencyChange}
                style={{ width: 280, display: 'block' }}
              >
                <Option value="baht">Baht (฿)</Option>
                <Option value="npr">Nepalese Rupee (Rs.)</Option>
              </Select>,
            )}
            You chose : {currency}
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit" onClick={onSave}>
              <SaveOutlined /> Save Settings
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  )
}

const SettingsForm = Form.create({ name: 'settings_form' })(Setting)

export default SettingsForm
