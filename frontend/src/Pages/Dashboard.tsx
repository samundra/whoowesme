import React from 'react'
import DashboardPageLayout from 'Layout/DashboardPageLayout'
import { Breadcrumb } from 'antd'
import { Content } from 'Components/common'
import { Card, Col, Row, Avatar } from 'antd'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons'
const { Meta } = Card

type Props = {}

const Dashboard: React.FunctionComponent<Props> = () => {
  return (
    <DashboardPageLayout>
      <Content>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-card-wrapper">
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={6}>
              <Card
                title="Total Entries this month"
                bordered
                actions={[
                  <SettingOutlined key="setting" />,
                  <EditOutlined key="edit" />,
                  <EllipsisOutlined key="ellipsis" />,
                ]}
              >
                <Meta
                  avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                  title="Groceries"
                  description="10 entries"
                />
              </Card>
            </Col>
            <Col xs={24} sm={24} md={6}>
              <Card title="Monthly Expense" bordered={false}>
                ฿23,000.00
              </Card>
            </Col>
            <Col xs={24} sm={24} md={6}>
              <Card title="Weekly Expense" bordered={false}>
                ฿5,000.00
              </Card>
            </Col>
            <Col xs={24} sm={24} md={6}>
              <Card title="Top Expense" bordered={false}>
                Credit card payment: ฿23,000.00
              </Card>
            </Col>
            <Col xs={24} sm={24} md={6}>
              <Card title="Month Budget" bordered={false}>
                Show graph here
              </Card>
            </Col>
          </Row>
        </div>
      </Content>
    </DashboardPageLayout>
  )
}

export default Dashboard
