import React from 'react'
import { Row, Col } from 'antd'

const contentStyle = {
  paddingLeft: '10px',
  textAlign: 'left',
  overflow: 'auto',
  height: '100%',
  minWidth: '300px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
} as React.CSSProperties

const midBlockStyle = {
  textAlign: 'center',
  display: 'block',
  height: '100%',
} as React.CSSProperties

type LoginPageLayoutProps = {
  children: React.ReactNode
}

const LoginPageLayout: React.FunctionComponent<LoginPageLayoutProps> = ({ children }) => {
  return (
    <Row className="App" style={{ height: '100%' }}>
      <Row style={midBlockStyle}>
        <Col style={contentStyle}>
          <Row>{children}</Row>
        </Col>
      </Row>
    </Row>
  )
}

export default LoginPageLayout
