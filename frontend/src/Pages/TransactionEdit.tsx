import React, { useEffect } from 'react'
import DashboardPageLayout from 'Layout/DashboardPageLayout'
import { Breadcrumb } from 'antd'
import { Link } from 'react-router-dom'
import TransactionForm from 'Components/form/TransactionForm'
import { RouteComponentProps, useParams } from 'react-router'
import { PageContent, Content } from 'Components/common'

type Props = RouteComponentProps

const TransactionEdit: React.FunctionComponent<Props> = () => {
  const params = useParams<{ id: string | undefined }>()
  useEffect(() => {
    const { id } = params
    console.log({ id })

    // Fetch record from API
    // api.fetch(id)
  }, [params])
  return (
    <DashboardPageLayout>
      <Content>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>
            <Link to="/dashboard">Dashboard</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Edit Transaction</Breadcrumb.Item>
        </Breadcrumb>
        <PageContent title="Transaction details">
          <TransactionForm
            record={{
              id: 1,
              date: '2019-10-11',
              category: ['personal', 'gym'],
              amount: '223.33',
              description: 'This is full description',
            }}
          />
        </PageContent>
      </Content>
    </DashboardPageLayout>
  )
}

export default TransactionEdit
