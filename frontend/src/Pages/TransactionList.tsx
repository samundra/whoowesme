import React, { useState, useEffect } from 'react';
import DashboardPageLayout from 'Layout/DashboardPageLayout';
import { connect } from 'react-redux';
import { Breadcrumb, Modal, Table, Tag, Button, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import { PageContent, Content } from 'Components/common';
import { RootState } from 'Store';
import { addTransaction } from 'Store/transaction/action';
import transactionService from 'Services/transaction';

type TransactionRecord = Transaction & { key: string | number };

type Props = RouteComponentProps & ReduxProps & DispatchProps;
const TransactionList: React.FunctionComponent<Props> = props => {
  const { history } = props;
  const [dataSource, setDataSource] = useState<TransactionRecord[]>([]);

  useEffect(() => {
    const transactions = transactionService.fetchAll();
    setDataSource(transactions);
  }, []);

  // API Call to edit
  const onEdit = (id: number) => {
    console.log('Edit record number', id);
    history.push('/transaction/1/edit', {
      menuKey: 'edit_transaction',
      parentMenuKey: 'manage_transaction',
    });
  };

  // API call to delete
  const onDelete = (id: number) => {
    Modal.confirm({
      title: 'Delete Transactions',
      content: 'Are you sure you want to delete it?',
      okText: 'Yes, Delete it',
      cancelText: 'Cancel',
      onOk: () => {
        // Send Request to delete it
        const newDataSource = JSON.parse(JSON.stringify(dataSource));
        const pos = dataSource.findIndex((t: any) => t.id === id);
        newDataSource.splice(pos, 1);
        setDataSource(newDataSource);
      },
      onCancel: () => {},
    });
  };

  const getCurrencySymbol = () => `฿`;

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
      render: (category: string[]) => {
        return category.map((c: string) => (
          <Tag color="blue" key={c}>
            {c}
          </Tag>
        ));
      },
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      render: (amount: number) => `${getCurrencySymbol()} ${amount}`,
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
      render: (_: any, record: Transaction) => {
        return (
          <>
            <Button
              type="primary"
              icon="edit"
              onClick={() => onEdit(record.id)}
            >
              Edit
            </Button>{' '}
            <Button type="link" onClick={() => onDelete(record.id)}>
              Delete
            </Button>
          </>
        );
      },
    },
  ];

  /**
   * Update this code to show loading spinner when data is being fetched from
   * API
   */
  const loading = false;

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
              <Icon type="loading" />{' '}
            </div>
          )}
          {!loading && <Table dataSource={dataSource} columns={columns} />}
        </PageContent>
      </Content>
    </DashboardPageLayout>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    transactions: state.transaction.transactions,
  };
};

type ReduxProps = ReturnType<typeof mapStateToProps>;

const mapDispatchToProps = {
  addTransaction,
};

type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList);
