import React from 'react'
import DashboardPageLayout from 'Layout/DashboardPageLayout'
import { Breadcrumb } from 'antd'
import { Link } from 'react-router-dom'
import { PageContent, Content } from 'Components/common'
import { AddNewCategoryForm } from 'Components/form'

type Props = {}

const AddCategory: React.FunctionComponent<Props> = () => {
  return (
    <DashboardPageLayout>
      <Content>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>
            <Link to="/dashboard">Dashboard</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Add Category</Breadcrumb.Item>
        </Breadcrumb>
        <PageContent title="Add Category">
          <AddNewCategoryForm />
        </PageContent>
      </Content>
    </DashboardPageLayout>
  )
}

export default AddCategory
