import React, { useState } from 'react'

import {
  DashboardOutlined,
  MailOutlined,
  MoneyCollectOutlined,
  SettingOutlined,
  SnippetsOutlined,
  UsergroupAddOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons'

import { Menu } from 'antd'
import { translate } from 'i18n'
import TKeys from 'i18n/translationKey'

import { useHistory, useLocation } from 'react-router-dom'

type Props = {}

const { SubMenu } = Menu

type LocationState = {
  menuKey: string[]
  parentMenuKey: string[]
}

const AppMenu: React.FunctionComponent<Props> = () => {
  const history = useHistory()
  const location = useLocation()

  const initialMenuState = {
    menuKey: [''],
    parentMenuKey: [''],
  }

  const locationState: LocationState = (location && (location.state as LocationState)) || initialMenuState

  const [currentMenuKey, setCurrentMenuKey] = useState(locationState.menuKey)
  const [parentMenuKey, setParentMenuKey] = useState(locationState.parentMenuKey)

  const navigatePage = (menuKey: string[], newParentMenuKey: string[], link: string): void => {
    setCurrentMenuKey(menuKey)
    setParentMenuKey(newParentMenuKey)

    history.push(link, { menuKey, newParentMenuKey })
  }

  return (
    <Menu theme="dark" defaultSelectedKeys={currentMenuKey} mode="inline" defaultOpenKeys={parentMenuKey}>
      <Menu.Item key="dashboard" onClick={(): void => navigatePage(['dashboard'], [], '/dashboard')}>
        <DashboardOutlined />
        <span>{translate(TKeys.Menu.dashboard)}</span>
      </Menu.Item>
      <Menu.Item key="summary" onClick={(): void => navigatePage(['summary'], [], '/summary')}>
        <UnorderedListOutlined />
        <span>{translate(TKeys.Menu.summary)}</span>
      </Menu.Item>
      <Menu.Item
        key="send_invitation"
        onClick={(): void => navigatePage(['send_invitation'], [], '/send-invitation')}
      >
        <MailOutlined />
        <span>{translate(TKeys.Menu.send_invitation)}</span>
      </Menu.Item>
      <SubMenu
        key="manage_transaction"
        title={
          <span>
            <MoneyCollectOutlined />
            <span>{translate(TKeys.Menu.manage_transaction)}</span>
          </span>
        }
      >
        <Menu.Item
          key="list_transaction"
          onClick={(): void =>
            navigatePage(['list_transaction'], ['manage_transaction'], '/transaction/list')
          }
        >
          <span>{translate(TKeys.Menu.list_transaction)}</span>
        </Menu.Item>
        <Menu.Item
          key="add_transaction"
          onClick={(): void => navigatePage(['add_transaction'], ['manage_transaction'], '/transaction/add')}
        >
          <span>{translate(TKeys.Menu.add_transaction)}</span>
        </Menu.Item>
      </SubMenu>
      <SubMenu
        key="manage_friends"
        title={
          <span>
            <UsergroupAddOutlined />
            <span>{translate(TKeys.Menu.manage_friends)}</span>
          </span>
        }
      >
        <Menu.Item
          key="add_friend"
          onClick={(): void => navigatePage(['add_friend'], ['manage_friends'], '/add-friend')}
        >
          <span>{translate(TKeys.Menu.add_friend)}</span>
        </Menu.Item>
      </SubMenu>
      <SubMenu
        key="category"
        title={
          <span>
            <SnippetsOutlined />
            <span>{translate(TKeys.Menu.category)}</span>
          </span>
        }
      >
        <Menu.Item
          key="add_category"
          onClick={(): void => navigatePage(['add_category'], ['category'], '/add-category')}
        >
          <span>{translate(TKeys.Menu.add_category)}</span>
        </Menu.Item>
        <Menu.Item
          key="list_category"
          onClick={(): void => navigatePage(['list_category'], ['category'], '/list-category')}
        >
          <span>{translate(TKeys.Menu.list_category)}</span>
        </Menu.Item>
      </SubMenu>
      <SubMenu
        key="settings"
        title={
          <span>
            <SettingOutlined />
            <span>{translate(TKeys.Menu.settings)}</span>
          </span>
        }
      >
        <Menu.Item
          key="general_settings"
          onClick={(): void => navigatePage(['general_settings'], ['settings'], '/settings')}
        >
          <span>{translate(TKeys.Menu.general)}</span>
        </Menu.Item>
      </SubMenu>
    </Menu>
  )
}

export default AppMenu
