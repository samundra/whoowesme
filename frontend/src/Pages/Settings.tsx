import React from 'react'
import DashboardPageLayout from 'Layout/DashboardPageLayout'
import { Breadcrumb } from 'antd'
import SettingsForm from 'Components/form/SettingsForm'
import { Link } from 'react-router-dom'
import { PageContent, AppContent } from 'Components/common'

type Props = {}

const Settings: React.FunctionComponent<Props> = () => {
  return (
    <DashboardPageLayout>
      <AppContent>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>
            <Link to="/dashboard">Dashboard</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Settings</Breadcrumb.Item>
        </Breadcrumb>
        <PageContent title="General Settings" titleDivider>
          <SettingsForm />
        </PageContent>
      </AppContent>
    </DashboardPageLayout>
  )
}

export default Settings
