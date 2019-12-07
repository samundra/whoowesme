import React from 'react';
import DashboardPageLayout from 'Layout/DashboardPageLayout';
import { Breadcrumb, Table, Tag, Button } from 'antd';
import { RouteComponentProps } from 'react-router';
import { PageContent, Content } from 'Components/common';

export const menu: MenuLink = {
  to: '/transaction/list',
  label: 'Transaction List',
};

type Props = RouteComponentProps;

// type Transaction = {
//   id: number;
//   date: String;
//   category: String[];
//   amount: string;
//   description: String;
// };

const TransactionList: React.FunctionComponent<Props> = props => {
  const { history } = props;

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
    console.log('Delete record number', id);
  };

  const dataSource = [
    {
      key: '1',
      id: 1,
      date: '2019-10-11',
      category: ['personal', 'gym'],
      amount: '23.00',
      description: 'Spending on grocery items',
    },
    {
      key: '2',
      id: 2,
      date: '2019-10-11',
      category: ['personal', 'gym'],
      amount: '23.00',
      description: 'spending on grocery items',
    },
    {
      key: '3',
      id: 3,
      date: '2019-10-11',
      category: ['personal', 'gym'],
      amount: '23.00',
      description: 'spending on grocery items',
    },
  ];

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
      render: (amount: number) => `THB ${amount}`,
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

  return (
    <DashboardPageLayout>
      <Content>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          <Breadcrumb.Item>List Transaction</Breadcrumb.Item>
        </Breadcrumb>
        <PageContent title="Transactoin List" titleDivider>
          <span>
            <Table dataSource={dataSource} columns={columns} />
          </span>
        </PageContent>
      </Content>
    </DashboardPageLayout>
  );
};

export default TransactionList;
