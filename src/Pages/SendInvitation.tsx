import React from 'react';
import { SendInvitationForm } from 'Components/form';
import DashboardPageLayout from 'Layout/DashboardPageLayout';
import { Breadcrumb } from 'antd';
import { PageContent, Content } from 'Components/common';

export const menu: MenuLink = {
  to: '/send-invitation',
  label: 'Send Invitation',
};

type Props = {};

const SendInvitation: React.FunctionComponent<Props> = () => {
  return (
    <DashboardPageLayout>
      <Content>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          <Breadcrumb.Item>Send Invitation</Breadcrumb.Item>
        </Breadcrumb>
        <PageContent title="SEND INVITATION TO FRIEND">
          <SendInvitationForm />
        </PageContent>
      </Content>
    </DashboardPageLayout>
  );
};

export default SendInvitation;
