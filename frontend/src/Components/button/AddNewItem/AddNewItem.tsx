import React from 'react'
import { PlusOutlined } from '@ant-design/icons'
import { Button } from 'antd'

type Props = {
  onClick(): void
}

const AddNewItem: React.FunctionComponent<Props> = props => {
  const { onClick } = props

  return (
    <Button onClick={onClick}>
      <PlusOutlined /> Add new Item
    </Button>
  )
}

export default AddNewItem
