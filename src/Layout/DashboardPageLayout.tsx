import React, { useState, useEffect, useContext } from 'react';
import { Layout } from 'antd';
import SidebarMenuLogo from 'Components/logo/SidebarMenuLogo';
import { AppFooter } from 'Components/section';
import AppMenu from 'Components/menu/AppMenu/AppMenu';
import { DashboardHeader } from 'Components';
import { SiderContext } from 'Components/context/SiderContext';

const { Sider } = Layout;

type CommonLayoutProps = {
  children: React.ReactNode;
};

const DashboardPageLayout: React.FunctionComponent<CommonLayoutProps> = ({
  children,
}) => {
  const siderOpenContext = useContext(SiderContext);
  const [collapsed, setCollapsed] = useState(siderOpenContext.collapsed);

  const onCollapse = (isCollapsed: boolean) => {
    localStorage.setItem('menu.is_collapsed', isCollapsed ? 'yes' : 'no');

    setCollapsed(isCollapsed);
  };

  useEffect(() => {
    const isCollapsed = localStorage.getItem('menu.is_collapsed') === 'yes';

    setCollapsed(isCollapsed);
  }, []);

  const initialState = {
    collapsed: collapsed,
    toggleSider: () => {
      const toggled = !collapsed;
      setCollapsed(toggled);
      localStorage.setItem(
        'menu.is_collapsed',
        toggled === true ? 'yes' : 'no'
      );
    },
  };

  return (
    <Layout>
      <SiderContext.Provider value={initialState}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={onCollapse}
          width={220}
        >
          {!collapsed && <SidebarMenuLogo />}
          {collapsed && <SidebarMenuLogo type="small" />}
          <AppMenu />
        </Sider>
      </SiderContext.Provider>
      <Layout>
        <SiderContext.Provider value={initialState}>
          <DashboardHeader />
        </SiderContext.Provider>
        {children}
        <AppFooter />
      </Layout>
    </Layout>
  );
};

export default DashboardPageLayout;
