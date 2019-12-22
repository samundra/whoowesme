import React, { useState } from 'react';
import { Menu, Icon } from 'antd';

import { useHistory, useLocation } from 'react-router-dom';

type Props = {};

const { SubMenu } = Menu;

type LocationState = {
  menuKey: string[];
  parentMenuKey: string[];
};

const AppMenu: React.FunctionComponent<Props> = () => {
  const history = useHistory();
  const location = useLocation();

  const initialMenuState = {
    menuKey: [''],
    parentMenuKey: [''],
  };

  const locationState: LocationState =
    (location && (location.state as LocationState)) || initialMenuState;

  const [currentMenuKey, setCurrentMenuKey] = useState(locationState.menuKey);
  const [parentMenuKey, setParentMenuKey] = useState(
    locationState.parentMenuKey
  );

  const navigatePage = (
    menuKey: string[],
    parentMenuKey: string[],
    link: string
  ) => {
    setCurrentMenuKey(menuKey);
    setParentMenuKey(parentMenuKey);

    history.push(link, { menuKey, parentMenuKey });
  };

  return (
    <Menu
      theme="dark"
      defaultSelectedKeys={currentMenuKey}
      mode="inline"
      defaultOpenKeys={parentMenuKey}
    >
      <Menu.Item
        key="dashboard"
        onClick={() => navigatePage(['dashboard'], [], '/dashboard')}
      >
        <Icon type="dashboard" />
        <span>Dashboard</span>
      </Menu.Item>
      <Menu.Item
        key="summary"
        onClick={() => navigatePage(['summary'], [], '/summary')}
      >
        <Icon type="snippets" />
        <span>Summary</span>
      </Menu.Item>
      <Menu.Item
        key="send_invitation"
        onClick={() =>
          navigatePage(['send_invitation'], [], '/send-invitation')
        }
      >
        <Icon type="mail" />
        <span>Send Invitation</span>
      </Menu.Item>
      <SubMenu
        key="manage_transaction"
        title={
          <span>
            <Icon type="money-collect" />
            <span>Manage Transaction</span>
          </span>
        }
      >
        <Menu.Item
          key="list_transaction"
          onClick={() =>
            navigatePage(
              ['list_transaction'],
              ['manage_transaction'],
              '/transaction/list'
            )
          }
        >
          <span>List Transaction</span>
        </Menu.Item>
        <Menu.Item
          key="add_transaction"
          onClick={() =>
            navigatePage(
              ['add_transaction'],
              ['manage_transaction'],
              '/add-new-item'
            )
          }
        >
          <span>Add transaction</span>
        </Menu.Item>
      </SubMenu>
      <SubMenu
        key="manage_friends"
        title={
          <span>
            <Icon type="user" />
            <span>Manage Friends</span>
          </span>
        }
      >
        <Menu.Item
          key="add_friend"
          onClick={() =>
            navigatePage(['add_friend'], ['manage_friends'], '/add-friend')
          }
        >
          <span>Add friend</span>
        </Menu.Item>
      </SubMenu>
      <SubMenu
        key="settings"
        title={
          <span>
            <Icon type="setting" />
            <span>Settings</span>
          </span>
        }
      >
        <Menu.Item
          key="general_settings"
          onClick={() =>
            navigatePage(['general_settings'], ['settings'], '/settings')
          }
        >
          <span>General</span>
        </Menu.Item>
      </SubMenu>
    </Menu>
  );
};

export default AppMenu;
