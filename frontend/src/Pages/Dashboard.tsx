import React from 'react'
import DashboardPageLayout from 'Layout/DashboardPageLayout'
import {Breadcrumb} from 'antd'
import {PageContent, Content} from 'Components/common'

type Props = {}

const Dashboard: React.FunctionComponent<Props> = () => {
  return (
    <DashboardPageLayout>
      <Content>
        <Breadcrumb style={{margin: '16px 0'}}>
          <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
        </Breadcrumb>
        <PageContent>
          <p>Transaction Summary</p>
          <p>Dashboard overview</p>
        </PageContent>
      </Content>
    </DashboardPageLayout>
  )
}

export default Dashboard
