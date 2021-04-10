import React, { useState } from 'react'
import { SaveOutlined } from '@ant-design/icons'
import { Button, Form, Select, Row, Col } from 'antd'

const { Option } = Select

type Props = {}
type CurrencyValue = string

const Settings: React.FunctionComponent<Props> = () => {
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
        <Row style={{ textAlign: 'left' }}>
          <Col span={16}>You choose : {currency}</Col>
        </Row>
        <Form {...formItemLayout}>
          <Form.Item
            label="Choose currency"
            name="currency"
            extra="This currency symbol will be used in application and all transctions."
            rules={[{ required: true }]}
          >
            <Select
              placeholder="Choose currency"
              onChange={onCurrencyChange}
              style={{ width: 280, display: 'block' }}
            >
              <Option value="baht">Baht (฿)</Option>
              <Option value="npr">Nepalese Rupee (Rs.)</Option>
            </Select>
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

const SettingsForm = Settings

export default SettingsForm
