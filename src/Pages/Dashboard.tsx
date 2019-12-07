import React from 'react';
import DashboardPageLayout from 'Layout/DashboardPageLayout';
import { Breadcrumb } from 'antd';
import Content from 'Components/common/Content';
import { PageContent } from 'Components/common';

export type MenuLink = {
  to: string;
  label: string;
};

export const menu: MenuLink = {
  to: '/dashboard',
  label: 'Dashboard',
};

type Props = {};

const Dashboard: React.FunctionComponent<Props> = () => {
  return (
    <DashboardPageLayout>
      <Content>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
        </Breadcrumb>
        <PageContent>
          <p>Transaction Summary</p>
          <p>Dashboard overview</p>
        </PageContent>
      </Content>
    </DashboardPageLayout>
  );
};

export default Dashboard;
