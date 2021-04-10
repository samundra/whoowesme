/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState } from 'react'
import { PlusOutlined, QuestionCircleOutlined } from '@ant-design/icons'
import { Tag, message, Button, Row, Input, Form, Col, Tooltip } from 'antd'
import { Store } from 'rc-field-form/lib/interface'
import styled from 'styled-components'

type Props = {}
type AppTag = {
  label: string
  value: string
}

type InputFieldStateType = 'hide_input' | 'show_input'
const defaultTags = [
  {
    label: 'Personal',
    value: 'personal',
  },
  {
    label: 'Transportation',
    value: 'transportation',
  },
  {
    label: 'Food',
    value: 'food',
  },
] as AppTag[]

const initialTagValue = {
  label: '',
  value: '',
}

const AddNewCategoryForm: React.FunctionComponent<Props> = () => {
  const [form] = Form.useForm()
  const [tags, setTags] = useState<AppTag[]>(defaultTags)
  const [inputFieldState, setInputFieldState] = useState<InputFieldStateType>('hide_input')
  const [currentTag, setCurrentTag] = useState<AppTag>(initialTagValue)

  const showInputField = (): void => {
    setInputFieldState('show_input')
  }

  const onTagClose = (tag: string): void => {
    console.log(tag)
    // Make API request to delete the tag
  }

  const onFinish = (values: Store) => {
    console.log({ values })
    const { taglabel: label, tagvalue: value } = values

    if (label !== '' && value !== '') {
      const hasExistingTag = tags.find(t => t.value === value)
      if (hasExistingTag) {
        message.error('Duplicate Tag found.')
        return
      }
    }

    const newTag = {
      label,
      value,
    } as AppTag
    setTags([newTag, ...tags])
    // Empty the field values
    setCurrentTag({
      label: '',
      value: '',
    })

    form.resetFields()
  }

  return (
    <Col>
      <Row gutter={16}>
        <Col>
          <Form
            form={form}
            name="add-category-form"
            onFinish={onFinish}
            initialValues={{
              taglabel: currentTag.label,
              tagvalue: currentTag.value,
            }}
          >
            {inputFieldState === 'hide_input' && (
              <AddTagButton type="primary" className="site-tag-plus" onClick={showInputField}>
                <PlusOutlined /> Add Category
              </AddTagButton>
            )}
            {inputFieldState === 'show_input' && (
              <Row gutter={8}>
                <Col span={10}>
                  <Form.Item
                    label=""
                    name="taglabel"
                    rules={[{ required: true, message: 'Please enter category label' }]}
                  >
                    <Input placeholder="Enter Category Label" />
                  </Form.Item>
                </Col>
                <Col span={10}>
                  <Row gutter={8}>
                    <Col span={22}>
                      <Form.Item
                        label=""
                        name="tagvalue"
                        rules={[{ required: true, message: 'Please enter category value' }]}
                      >
                        <Input placeholder="Enter Category Value" />
                      </Form.Item>
                    </Col>
                    <Col span={2}>
                      <Tooltip
                        placement="topLeft"
                        title="This value is used internally by application"
                        arrowPointAtCenter
                      >
                        <QuestionCircleOutlined />
                      </Tooltip>
                    </Col>
                  </Row>
                </Col>
                <Col span={4}>
                  <Button type="primary" htmlType="submit" icon={<PlusOutlined />}>
                    Add Category
                  </Button>
                </Col>
              </Row>
            )}
          </Form>
        </Col>
      </Row>
      <Row>
        <Col style={{ marginTop: '10px' }}>
          {tags.map(tag => (
            <StyledTag
              closable={true}
              key={tag.value}
              onClose={() => {
                return onTagClose(tag.value)
              }}
            >
              {tag.label}
            </StyledTag>
          ))}
        </Col>
      </Row>
    </Col>
  )
}

const StyledTag = styled(Tag)`
  margin-top: 5px;
`

const AddTagButton = styled(Button)`
  userselect: none;
  cursor: pointer;
  width: 100%;
  minwidth: 120px;
  height: 48px;
  lineheight: 48px;
  textalign: center;
`

const AddFriendForm = AddNewCategoryForm

export default AddFriendForm
