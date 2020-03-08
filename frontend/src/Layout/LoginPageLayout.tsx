import React from 'react'
import { Row } from 'antd'
import styled from 'styled-components'

type LoginPageLayoutProps = {
  children: React.ReactNode
}

const LoginPageLayout: React.FunctionComponent<LoginPageLayoutProps> = ({ children }) => {
  return (
    <Row className="App">
      <StyledRow>
        <Row>{children}</Row>
      </StyledRow>
    </Row>
  )
}

const StyledRow = styled(Row)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export default LoginPageLayout
