import React from 'react'
import { Row, Input, Col } from 'antd'

import InputBox from 'Components/inputbox'

export default { title: 'InputBox', component: InputBox }

export const inputBox = (): JSX.Element => (
  <InputBox label="Firstname" child={<Input placeholder="Firstname" />} />
)
export const inputBoxGroups = (): JSX.Element => (
  <Row gutter={[16, 16]}>
    <Col>
      <InputBox label="Firstname" child={<Input placeholder="Firstname" />} />
    </Col>
    <Col>
      <InputBox label="Lastname" child={<Input placeholder="Lastname" />} />
    </Col>
  </Row>
)
