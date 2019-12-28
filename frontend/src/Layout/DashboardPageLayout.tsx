import React, {useContext} from 'react'
import {Layout} from 'antd'
import SidebarMenuLogo from 'Components/logo/SidebarMenuLogo'
import {AppFooter} from 'Components/section'
import AppMenu from 'Components/menu/AppMenu/AppMenu'
import {DashboardHeader} from 'Components'
import {SiderContext} from 'Components/context'
import styled from 'styled-components'

const {Sider} = Layout

type CommonLayoutProps = {
  children: React.ReactNode
}

const DashboardPageLayout: React.FunctionComponent<CommonLayoutProps> = ({
  children,
}) => {
  const siderState = useContext(SiderContext)

  return (
    <DashboardLayout>
      <Sider
        collapsible
        collapsed={siderState.collapsed}
        onCollapse={siderState.toggleSider}
        width={220}
      >
        {!siderState.collapsed && (
          <SidebarMenuLogo
            src="/img/sidebarmenu-logo-192x45.jpg"
            alt="expanded application logo"
          />
        )}
        {siderState.collapsed && (
          <SidebarMenuLogo
            src="/img/sidebarmenu-logo-74x45.jpg"
            alt="collapsed application logo"
          />
        )}
        <AppMenu />
      </Sider>
      <Layout>
        <DashboardHeader />
        {children}
        <AppFooter />
      </Layout>
    </DashboardLayout>
  )
}

const DashboardLayout = styled(Layout)`
  min-height: 100vh;
`

export default DashboardPageLayout
