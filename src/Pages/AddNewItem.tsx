import React from 'react';
import DashboardPageLayout from 'Layout/DashboardPageLayout';
import { Breadcrumb, Layout } from 'antd';
import { AddNewEntryForm } from 'Components/form';

const { Content } = Layout;

export const menu = {
  to: '/add-new-item',
  label: 'Add New Item',
};

type Props = {};

const AddNewItem: React.FunctionComponent<Props> = () => {
  return (
    <DashboardPageLayout>
      <Content style={{ margin: '0 16px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          <Breadcrumb.Item>Add New Item</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
          <h2>Add New Item</h2>
          <AddNewEntryForm />
        </div>
      </Content>
    </DashboardPageLayout>
  );
};

export default AddNewItem;
