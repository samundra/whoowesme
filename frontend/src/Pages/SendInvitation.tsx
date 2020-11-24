import React from 'react'
import { SendInvitationForm } from 'Components/form'
import DashboardPageLayout from 'Layout/DashboardPageLayout'
import { Breadcrumb } from 'antd'
import { Link } from 'react-router-dom'
import { PageContent, AppContent } from 'Components/common'

type Props = {}

const SendInvitation: React.FunctionComponent<Props> = () => {
  return (
    <DashboardPageLayout>
      <AppContent>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>
            <Link to="/dashboard">Dashboard</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Send Invitation</Breadcrumb.Item>
        </Breadcrumb>
        <PageContent title="SEND INVITATION TO FRIEND">
          <SendInvitationForm />
        </PageContent>
      </AppContent>
    </DashboardPageLayout>
  )
}

export default SendInvitation
