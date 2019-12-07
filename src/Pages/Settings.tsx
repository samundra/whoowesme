import React from 'react';
import DashboardPageLayout from 'Layout/DashboardPageLayout';
import { Breadcrumb, Layout } from 'antd';

const { Content } = Layout;

type Props = {
  title?: string;
};

const Settings: React.FunctionComponent<Props> = ({ title }) => {
  return (
    <DashboardPageLayout>
      <Content style={{ margin: '0 16px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          {title && <Breadcrumb.Item>{title}</Breadcrumb.Item>}
        </Breadcrumb>
        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
          <h2>General Settings</h2>
        </div>
      </Content>
    </DashboardPageLayout>
  );
};

export default Settings;
