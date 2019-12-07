import React from 'react';
import { AddFriendForm } from 'Components/form';
import DashboardPageLayout from 'Layout/DashboardPageLayout';
import { Breadcrumb, Layout } from 'antd';
import { PageContent, Content } from 'Components/common';

export const menu = {
  to: '/add-friend',
  label: 'Add friend',
};

type Props = {};

const AddFriend: React.FunctionComponent<Props> = () => {
  return (
    <DashboardPageLayout>
      <Content>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          <Breadcrumb.Item>Add Friend</Breadcrumb.Item>
        </Breadcrumb>
        <PageContent title="Add friend">
          <AddFriendForm />
        </PageContent>
      </Content>
    </DashboardPageLayout>
  );
};

export default AddFriend;
