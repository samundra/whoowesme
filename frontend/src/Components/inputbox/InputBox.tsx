import * as React from 'react'
import { Row, Col } from 'antd'
import styled from 'styled-components'

type Props = {
  label: string
  child: React.ReactNode
}

const InputBox: React.FunctionComponent<Props> = ({ label, child }) => {
  return (
    <StyledRow>
      <Col>{label}</Col>
      <Col>{child}</Col>
    </StyledRow>
  )
}

const StyledRow = styled(Row)`
  display: flex;
  flex-direction: column;
`

export default InputBox
