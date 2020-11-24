import React from 'react'
import DashboardPageLayout from 'Layout/DashboardPageLayout'
import { Breadcrumb } from 'antd'
import { Link } from 'react-router-dom'
import { PageContent, AppContent } from 'Components/common'
import { ProfileForm } from 'Components/form'

type Props = {}

const Profile: React.FunctionComponent<Props> = () => {
  return (
    <DashboardPageLayout>
      <AppContent>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>
            <Link to="/dashboard">Dashboard</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Profile</Breadcrumb.Item>
        </Breadcrumb>
        <PageContent title="Profile" titleDivider>
          <ProfileForm />
        </PageContent>
      </AppContent>
    </DashboardPageLayout>
  )
}

export default Profile
