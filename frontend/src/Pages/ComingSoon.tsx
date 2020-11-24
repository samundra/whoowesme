import React from 'react'
import DashboardPageLayout from 'Layout/DashboardPageLayout'
import { Breadcrumb } from 'antd'
import { Link } from 'react-router-dom'
import { PageContent, AppContent } from 'Components/common'

type Props = {
  title?: string
}

const ComingSoon: React.FunctionComponent<Props> = ({ title }) => {
  return (
    <DashboardPageLayout>
      <AppContent>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>
            <Link to="/dashboard">Dashboard</Link>
          </Breadcrumb.Item>
          {title && <Breadcrumb.Item>{title}</Breadcrumb.Item>}
        </Breadcrumb>
        <PageContent>Coming soon - {title}</PageContent>
      </AppContent>
    </DashboardPageLayout>
  )
}

export default ComingSoon
