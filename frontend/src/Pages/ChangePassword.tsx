import ChangePasswordForm from 'Components/form/ChangePasswordForm'
import React from 'react'
import { PageContent, Content } from 'Components/common'
import { Breadcrumb, Row, Col } from 'antd'
import DashboardPageLayout from 'Layout/DashboardPageLayout'
import { Link } from 'react-router-dom'

type Props = {}

const ChangePassword: React.FunctionComponent<Props> = () => {
  return (
    <DashboardPageLayout>
      <Content>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>
            <Link to="/dashboard">Dashboard</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Change Password</Breadcrumb.Item>
        </Breadcrumb>
        <PageContent title="Change Password">
          <Row align="middle" justify="center">
            <Col span={12}>
              <ChangePasswordForm />
            </Col>
          </Row>
        </PageContent>
      </Content>
    </DashboardPageLayout>
  )
}

export default ChangePassword
