import React from 'react';
import DashboardPageLayout from 'Layout/DashboardPageLayout';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import { PageContent, Content } from 'Components/common';

type Props = {};

const PageNotFound: React.FunctionComponent<Props> = () => {
  return (
    <DashboardPageLayout>
      <Content>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>
            <Link to="/dashboard">Dashboard</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>404 - Page Not Found</Breadcrumb.Item>
        </Breadcrumb>
        <PageContent title="404 - Page Not Found :(">
          <div>Opps ! Looks like we did something wrong.</div>
        </PageContent>
      </Content>
    </DashboardPageLayout>
  );
};

export default PageNotFound;
