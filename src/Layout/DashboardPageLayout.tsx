import React, { useState, useEffect } from 'react';
import { Layout } from 'antd';
import SidebarMenuLogo from 'Components/logo/SidebarMenuLogo';
import { AppFooter } from 'Components/section';
import AppMenu from 'Components/menu/AppMenu/AppMenu';

const { Header, Sider } = Layout;

type CommonLayoutProps = {
  children: React.ReactNode;
};

const DashboardPageLayout: React.FunctionComponent<CommonLayoutProps> = ({
  children,
}) => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (isCollapsed: boolean) => {
    localStorage.setItem('menu.is_collapsed', isCollapsed ? 'yes' : 'no');

    setCollapsed(isCollapsed);
  };

  useEffect(() => {
    const isCollapsed = localStorage.getItem('menu.is_collapsed') === 'yes';

    setCollapsed(isCollapsed);
  }, []);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        {!collapsed && <SidebarMenuLogo />}
        {collapsed && <SidebarMenuLogo type="small" />}
        <AppMenu />
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }} />
        {children}
        <AppFooter />
      </Layout>
    </Layout>
  );
};

export default DashboardPageLayout;
