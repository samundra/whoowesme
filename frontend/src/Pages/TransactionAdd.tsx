import React from 'react'
import DashboardPageLayout from 'Layout/DashboardPageLayout'
import { Breadcrumb } from 'antd'
import { Link } from 'react-router-dom'
import { AddTransactionForm } from 'Components/form'
import { PageContent, Content } from 'Components/common'
import { PlusOutlined } from '@ant-design/icons'

type Props = {}

const TransactionAdd: React.FunctionComponent<Props> = () => {
  return (
    <DashboardPageLayout>
      <Content>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>
            <Link to="/dashboard">Dashboard</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Add Transaction</Breadcrumb.Item>
        </Breadcrumb>
        <PageContent title="Add Transaction" icon={<PlusOutlined />}>
          <AddTransactionForm />
        </PageContent>
      </Content>
    </DashboardPageLayout>
  )
}

export default TransactionAdd
