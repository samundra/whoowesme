import React from 'react';
import DashboardPageLayout from 'Layout/DashboardPageLayout';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import { PageContent, Content } from 'Components/common';
import { ProfileForm } from 'Components/form';

type Props = {};

const Profile: React.FunctionComponent<Props> = () => {
  return (
    <DashboardPageLayout>
      <Content>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>
            <Link to=" / ">Dashboard</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Profile</Breadcrumb.Item>
        </Breadcrumb>
        <PageContent title="Profile" titleDivider>
          <ProfileForm />
        </PageContent>
      </Content>
    </DashboardPageLayout>
  );
};

export default Profile;
