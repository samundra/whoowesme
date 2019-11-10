import React from 'react';
import { AddFriendForm } from 'Components/form';
import DashboardPageLayout from 'Layout/DashboardPageLayout';
import { Breadcrumb, Layout } from 'antd';
const { Content } = Layout;

export const menu = {
  to: '/add-friend',
  label: 'Add friend',
};

type Props = {};

const AddFriend: React.FunctionComponent<Props> = () => {
  return (
    <DashboardPageLayout>
      <Content style={{ margin: '0 16px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          <Breadcrumb.Item>Add Friend</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
          <AddFriendForm />
        </div>
      </Content>
    </DashboardPageLayout>
  );
};

export default AddFriend;
