import React, { useEffect } from 'react';
import DashboardPageLayout from 'Layout/DashboardPageLayout';
import { Breadcrumb, Layout } from 'antd';
import TransactionForm from 'Components/form/TransactionForm';
import { RouteComponentProps, useParams } from 'react-router';

const { Content } = Layout;

type Props = RouteComponentProps;

const TransactionEdit: React.FunctionComponent<Props> = () => {
  // console.log({ props });
  const params = useParams<{ id: string | undefined }>();
  useEffect(() => {
    const { id } = params;
    console.log({ id });

    // Fetch record from API
    // api.fetch(id)
  }, [params]);
  return (
    <DashboardPageLayout>
      <Content style={{ margin: '0 16px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          <Breadcrumb.Item>Edit Transaction</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
          <TransactionForm
            record={{
              id: 1,
              date: '2019-10-11',
              category: ['personal', 'gym'],
              amount: '223.33',
              description: 'This is full description',
            }}
          />
        </div>
      </Content>
    </DashboardPageLayout>
  );
};

export default TransactionEdit;
