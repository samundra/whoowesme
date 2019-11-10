import React, { useState } from 'react';
import { Menu, Icon } from 'antd';

import { useHistory, useLocation } from 'react-router-dom';

type Props = {};

const { SubMenu } = Menu;

const AppMenu: React.FunctionComponent<Props> = () => {
  const history = useHistory();
  const location = useLocation();

  const locationState = location.state as {
    menuKey: string[];
    parentMenuKey: string[];
  };
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
        key="overview"
        onClick={() => navigatePage(['overview'], [], '/overview')}
      >
        <Icon type="snippets" />
        <span>Overview</span>
      </Menu.Item>
      <Menu.Item
        key="summary"
        onClick={() => navigatePage(['summary'], [], '/summary')}
      >
        <Icon type="paper-clip" />
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
        <Menu.Item key="notifications">Notifications</Menu.Item>
      </SubMenu>
    </Menu>
  );
};

export default AppMenu;
