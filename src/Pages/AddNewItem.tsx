import React from 'react';
import DashboardPageLayout from 'Layout/DashboardPageLayout';
import { Breadcrumb } from 'antd';
import { AddNewEntryForm } from 'Components/form';
import { PageContent, Content } from 'Components/common';

export const menu: MenuLink = {
  to: '/add-new-item',
  label: 'Add New Item',
};

type Props = {};

const AddNewItem: React.FunctionComponent<Props> = () => {
  return (
    <DashboardPageLayout>
      <Content>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          <Breadcrumb.Item>Add New Item</Breadcrumb.Item>
        </Breadcrumb>
        <PageContent title="Add New Item">
          <AddNewEntryForm />
        </PageContent>
      </Content>
    </DashboardPageLayout>
  );
};

export default AddNewItem;
