import React, { useState } from 'react';
import DashboardPageLayout from 'Layout/DashboardPageLayout';
import { Breadcrumb, Modal, Table, Tag, Button, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import { PageContent, Content } from 'Components/common';

type Props = RouteComponentProps;

type TransactionDataSource = {
  key: string | number;
  id: number;
  date: string;
  category: string[];
  amount: string;
  description: string;
};

const TransactionList: React.FunctionComponent<Props> = props => {
  const initialData = [
    {
      key: '1',
      id: 1,
      date: '2019-10-11',
      category: ['personal', 'gym'],
      amount: '22.00',
      description: 'Spending on grocery items',
    },
    {
      key: '2',
      id: 2,
      date: '2019-10-12',
      category: ['personal', 'gym'],
      amount: '23.00',
      description: 'spending on grocery items',
    },
    {
      key: '3',
      id: 3,
      date: '2019-10-13',
      category: ['personal', 'gym'],
      amount: '24.00',
      description: 'spending on grocery items',
    },
  ];

  const { history } = props;
  const [dataSource, setDataSource] = useState<TransactionDataSource[]>(
    initialData
  );

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
      render: (action: any, record: Transaction) => {
        console.log(action, record);
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

export default TransactionList;
