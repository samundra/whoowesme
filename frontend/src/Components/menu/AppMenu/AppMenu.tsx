import React, {useState} from 'react'
import {Menu, Icon} from 'antd'
import {translate} from 'i18n'
import TKeys from 'i18n/translationKey'

import {useHistory, useLocation} from 'react-router-dom'

type Props = {}

const {SubMenu} = Menu

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

  const locationState: LocationState =
    (location && (location.state as LocationState)) || initialMenuState

  const [currentMenuKey, setCurrentMenuKey] = useState(locationState.menuKey)
  const [parentMenuKey, setParentMenuKey] = useState(
    locationState.parentMenuKey,
  )

  const navigatePage = (
    menuKey: string[],
    parentMenuKey: string[],
    link: string,
  ): void => {
    setCurrentMenuKey(menuKey)
    setParentMenuKey(parentMenuKey)

    history.push(link, {menuKey, parentMenuKey})
  }

  return (
    <Menu
      theme="dark"
      defaultSelectedKeys={currentMenuKey}
      mode="inline"
      defaultOpenKeys={parentMenuKey}
    >
      <Menu.Item
        key="dashboard"
        onClick={(): void => navigatePage(['dashboard'], [], '/dashboard')}
      >
        <Icon type="dashboard" />
        <span>{translate(TKeys.Menu.dashboard)}</span>
      </Menu.Item>
      <Menu.Item
        key="summary"
        onClick={(): void => navigatePage(['summary'], [], '/summary')}
      >
        <Icon type="snippets" />
        <span>{translate(TKeys.Menu.summary)}</span>
      </Menu.Item>
      <Menu.Item
        key="send_invitation"
        onClick={(): void =>
          navigatePage(['send_invitation'], [], '/send-invitation')
        }
      >
        <Icon type="mail" />
        <span>{translate(TKeys.Menu.send_invitation)}</span>
      </Menu.Item>
      <SubMenu
        key="manage_transaction"
        title={
          <span>
            <Icon type="money-collect" />
            <span>{translate(TKeys.Menu.manage_transaction)}</span>
          </span>
        }
      >
        <Menu.Item
          key="list_transaction"
          onClick={(): void =>
            navigatePage(
              ['list_transaction'],
              ['manage_transaction'],
              '/transaction/list',
            )
          }
        >
          <span>{translate(TKeys.Menu.list_transaction)}</span>
        </Menu.Item>
        <Menu.Item
          key="add_transaction"
          onClick={(): void =>
            navigatePage(
              ['add_transaction'],
              ['manage_transaction'],
              '/add-new-item',
            )
          }
        >
          <span>{translate(TKeys.Menu.add_transaction)}</span>
        </Menu.Item>
      </SubMenu>
      <SubMenu
        key="manage_friends"
        title={
          <span>
            <Icon type="user" />
            <span>{translate(TKeys.Menu.manage_friends)}</span>
          </span>
        }
      >
        <Menu.Item
          key="add_friend"
          onClick={(): void =>
            navigatePage(['add_friend'], ['manage_friends'], '/add-friend')
          }
        >
          <span>{translate(TKeys.Menu.add_friend)}</span>
        </Menu.Item>
      </SubMenu>
      <SubMenu
        key="settings"
        title={
          <span>
            <Icon type="setting" />
            <span>{translate(TKeys.Menu.settings)}</span>
          </span>
        }
      >
        <Menu.Item
          key="general_settings"
          onClick={(): void =>
            navigatePage(['general_settings'], ['settings'], '/settings')
          }
        >
          <span>{translate(TKeys.Menu.general)}</span>
        </Menu.Item>
      </SubMenu>
    </Menu>
  )
}

export default AppMenu
