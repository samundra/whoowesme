import React from 'react'
import { AddFriendForm } from 'Components/form'
import DashboardPageLayout from 'Layout/DashboardPageLayout'
import { Breadcrumb } from 'antd'
import { Link } from 'react-router-dom'
import { PageContent, AppContent } from 'Components/common'

type Props = {}

const AddFriend: React.FunctionComponent<Props> = () => {
  return (
    <DashboardPageLayout>
      <AppContent>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>
            <Link to="/dashboard">Dashboard</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Add Friend</Breadcrumb.Item>
        </Breadcrumb>
        <PageContent title="Add friend">
          <AddFriendForm />
        </PageContent>
      </AppContent>
    </DashboardPageLayout>
  )
}

export default AddFriend
