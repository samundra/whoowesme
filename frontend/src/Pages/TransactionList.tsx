import React, { useState, useEffect } from 'react'
import DashboardPageLayout from 'Layout/DashboardPageLayout'
import { connect } from 'react-redux'
import { EditOutlined, LoadingOutlined } from '@ant-design/icons'
import { Breadcrumb, Button, Modal, Table, Tag } from 'antd'
import { Link } from 'react-router-dom'
import { RouteComponentProps } from 'react-router'
import { PageContent, Content } from 'Components/common'
import { RootState } from 'Stores'
import { addTransactionAsync } from 'Stores/features/transaction/transaction.actions'
import transactionService from 'Services/transaction'

type Props = RouteComponentProps & ReduxProps & DispatchProps
const TransactionList: React.FunctionComponent<Props> = props => {
  const { history } = props
  const [dataSource, setDataSource] = useState<TransactionRecord[]>([])

  useEffect(() => {
    const transactions = transactionService.fetchAll()
    setDataSource(transactions)
  }, [])

  // API Call to edit
  const onEdit = (id: number): void => {
    console.log('Edit record number', id)
    history.push('/transaction/1/edit', {
      menuKey: 'edit_transaction',
      parentMenuKey: 'manage_transaction',
    })
  }

  // API call to delete
  const onDelete = (id: number): void => {
    Modal.confirm({
      title: 'Delete Transactions',
      content: 'Are you sure you want to delete it?',
      okText: 'Yes, Delete it',
      cancelText: 'Cancel',
      onOk: () => {
        // Send Request to delete it
        const newDataSource = JSON.parse(JSON.stringify(dataSource))
        const pos = dataSource.findIndex((t: Transaction) => t.id === id)
        newDataSource.splice(pos, 1)
        setDataSource(newDataSource)
      },
      onCancel: () => {
        /* empty body */
      },
    })
  }

  const getCurrencySymbol = (): string => `฿`

  const columns = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      render: (category: string[]): JSX.Element[] => {
        return category.map((c: string) => {
          return (
            <Tag color="blue" key={c}>
              {c}
            </Tag>
          )
        })
      },
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      render: (amount: number): string => `${getCurrencySymbol()} ${amount}`,
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      /* eslint-disable react/display-name */
      render: (_: string, record: Transaction): JSX.Element => {
        return (
          <React.Fragment>
            <Button type="primary" icon={<EditOutlined />} onClick={(): void => onEdit(record.id)}>
              Edit
            </Button>{' '}
            <Button type="link" onClick={(): void => onDelete(record.id)}>
              Delete
            </Button>
          </React.Fragment>
        )
      },
    },
  ]

  /**
   * Update this code to show loading spinner when data is being fetched from
   * API
   */
  const loading = false

  return (
    <DashboardPageLayout>
      <Content>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>
            <Link to="/dashboard">Dashboard</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>List Transaction</Breadcrumb.Item>
        </Breadcrumb>
        <PageContent title="Transactoin List" titleDivider>
          {loading && (
            <div style={{ textAlign: 'center' }}>
              <LoadingOutlined />{' '}
            </div>
          )}
          {!loading && <Table dataSource={dataSource} columns={columns} />}
        </PageContent>
      </Content>
    </DashboardPageLayout>
  )
}

const mapStateToProps = (state: RootState) => {
  return {
    transactions: state.transaction.items,
  }
}

type ReduxProps = ReturnType<typeof mapStateToProps>

const mapDispatchToProps = {
  addTransactionAsync,
}

type DispatchProps = typeof mapDispatchToProps

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList)
