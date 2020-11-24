import React from 'react'
import DashboardPageLayout from 'Layout/DashboardPageLayout'
import { Breadcrumb } from 'antd'
import { Link } from 'react-router-dom'
import { AddNewEntryForm } from 'Components/form'
import { PageContent, AppContent } from 'Components/common'

type Props = {}

const AddNewItem: React.FunctionComponent<Props> = () => {
  return (
    <DashboardPageLayout>
      <AppContent>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>
            <Link to="/dashboard">Dashboard</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Add New Item</Breadcrumb.Item>
        </Breadcrumb>
        <PageContent title="Add New Item">
          <AddNewEntryForm />
        </PageContent>
      </AppContent>
    </DashboardPageLayout>
  )
}

export default AddNewItem
