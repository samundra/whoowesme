import React from 'react'
import DashboardPageLayout from 'Layout/DashboardPageLayout'
import { Breadcrumb } from 'antd'
import { Link } from 'react-router-dom'
import { PageContent, AppContent } from 'Components/common'
import { AddNewCategoryForm } from 'Components/form'

type Props = {}

const AddCategory: React.FunctionComponent<Props> = () => {
  return (
    <DashboardPageLayout>
      <AppContent>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>
            <Link to="/dashboard">Dashboard</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Add Category</Breadcrumb.Item>
        </Breadcrumb>
        <PageContent title="Add Category">
          <AddNewCategoryForm />
        </PageContent>
      </AppContent>
    </DashboardPageLayout>
  )
}

export default AddCategory
