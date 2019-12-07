import React from 'react';
import DashboardPageLayout from 'Layout/DashboardPageLayout';
import { Breadcrumb, Layout, Divider } from 'antd';
import SettingsForm from 'Components/form/SettingsForm';
import styled from 'styled-components';
import PageTitle from 'Components/title/PageTitle';
import { Link } from 'react-router-dom';

const { Content } = Layout;

type Props = {};

const Settings: React.FunctionComponent<Props> = () => {
  return (
    <DashboardPageLayout>
      <Content style={{ margin: '0 16px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>
            <Link to="/">Dashboard</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Settings</Breadcrumb.Item>
        </Breadcrumb>
        <StyledMainContent>
          <PageTitle title="General Settings" />
          <Divider type="horizontal" />
          <SettingsForm />
        </StyledMainContent>
      </Content>
    </DashboardPageLayout>
  );
};

const StyledMainContent = styled('div')`
  padding: 24px;
  background: #fff;
  minheight: 360px;
`;

export default Settings;
