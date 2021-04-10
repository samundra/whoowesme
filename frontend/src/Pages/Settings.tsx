import React from 'react'
import DashboardPageLayout from 'Layout/DashboardPageLayout'
import { Breadcrumb } from 'antd'
import SettingsForm from 'Components/form/SettingsForm'
import { Link } from 'react-router-dom'
import { PageContent, Content } from 'Components/common'

type Props = Record<string, unknown>

const Settings: React.FunctionComponent<Props> = () => {
  return (
    <DashboardPageLayout>
      <Content>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>
            <Link to="/dashboard">Dashboard</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Settings</Breadcrumb.Item>
        </Breadcrumb>
        <PageContent title="General Settings" titleDivider>
          <SettingsForm />
        </PageContent>
      </Content>
    </DashboardPageLayout>
  )
}

export default Settings
