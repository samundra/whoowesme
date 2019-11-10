import React from 'react';
import DashboardPageLayout from 'Layout/DashboardPageLayout';
import { Breadcrumb, Layout } from 'antd';

const { Content } = Layout;

type Props = {};

const PageNotFound: React.FunctionComponent<Props> = () => {
  return (
    <DashboardPageLayout>
      <Content style={{ margin: '0 16px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          <Breadcrumb.Item>404 - Page Not Found</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
          <h2>Page Not Found.</h2>
          <div>Opps ! Looks like we did something wrong.</div>
        </div>
      </Content>
    </DashboardPageLayout>
  );
};

export default PageNotFound;
