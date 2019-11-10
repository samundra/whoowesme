import React, { useState } from 'react';
import {
  Layout,
  Button,
  Input,
  Col,
  Divider,
  Icon,
  Row,
  Badge,
  Avatar,
  Menu,
  Dropdown,
} from 'antd';
import styled from 'styled-components';

const { Header } = Layout;
const { Search } = Input;

const SettingsMenu = styled('span')`
  user-select: none;
`;

const ProfileMenu = styled('span')`
  background: #fff;
  height: 100%;
  display: inline-block;
  padding: 0 5px;
  user-select: none;
  cursor: pointer;
`;

const MenuLabel = styled('span')`
  margin-left: 15px;
`;

type Props = {};

const ArrowTop = styled('span')`
  content: '.';
  width: 10px;
  height: 10px;
  display: block;
  background: #fff;
  position: relative;
  top: 0;
  left: 0;
  margin-left: 70%;
  border: 1px solid #eee;
  border-bottom-width: 0;
  border-right-width: 0;
  transform: rotate(45deg);
  margin-bottom: -4px;
`;

const logoutMenuStyle: React.CSSProperties = {
  background: '#7a8994',
  color: '#fff',
  margin: 0,
  padding: 0,
};

const menuContainerStyle = {
  position: 'relative',
  display: 'block',
  height: '100%',
  boxShadow: '1px 6px 5px #ccc',
  color: '#7a8994',
} as React.CSSProperties;

const menuFirstItemStyle: React.CSSProperties = {
  marginTop: '0',
  borderTopRightRadius: '5px',
  borderTopLeftRadius: '5px',
};

const LogoutButton = styled(MenuLabel)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ccc;
  &:hover {
    color: #fff;
  }
`;

const onMenuItemClick = (key: string) => {
  console.log({ key });
};

const menu = (
  <div style={menuContainerStyle}>
    <ArrowTop />
    <Menu style={{ paddingBottom: 0, marginBottom: 0, position: 'relative' }}>
      <Menu.Item
        key="menu.profile.about"
        onClick={() => onMenuItemClick('menu.profile.about')}
        style={menuFirstItemStyle}
      >
        <MenuLabel>
          <Icon type="user" />
          <span style={{ marginLeft: 10 }}>Profile</span>
        </MenuLabel>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item
        key="menu.profile.message"
        onClick={() => onMenuItemClick('menu.profile.message')}
      >
        <MenuLabel>
          <Icon type="message" />
          <span style={{ marginLeft: 10 }}>Message</span>
        </MenuLabel>
      </Menu.Item>
      <Menu.Item
        key="menu.profile.logout"
        onClick={() => onMenuItemClick('menu.profile.logout')}
        style={logoutMenuStyle}
      >
        <LogoutButton>
          Logout
          {'  '}
          <Icon type="poweroff" style={{ marginLeft: 10 }} />
        </LogoutButton>
      </Menu.Item>
    </Menu>
  </div>
);

const DashboardHeader: React.FunctionComponent<Props> = () => {
  const [collapse, setCollapse] = useState(false);

  const toggleSidebar = () => {
    setCollapse(!collapse);
  };

  return (
    <Header style={{ background: '#fff', padding: 0, paddingLeft: '10px' }}>
      <Row type="flex" justify="space-between" align="middle" gutter={16}>
        <Col span={5}>
          <Button type="link" icon="bars" onClick={toggleSidebar} />
          <Button type="link" icon="plus">
            Add new Item
          </Button>
        </Col>
        <Col span={11}>
          <Search placeholder="Search" onSearch={value => console.log(value)} />
        </Col>
        <Col span={8}>
          <Divider type="vertical" />
          <SettingsMenu>
            <Button type="link" href="/settings" icon="setting">
              Settings
            </Button>
          </SettingsMenu>
          <Divider type="vertical" />
          <Dropdown overlay={menu} trigger={['click']}>
            <ProfileMenu>
              <Badge count={1}>
                <span style={{ marginRight: 10 }}>Sam Shrestha</span>
                <Avatar shape="circle" icon="user" />
              </Badge>
              {'  '}
              <Icon type="down" style={{ marginLeft: 15 }} />
            </ProfileMenu>
          </Dropdown>
        </Col>
      </Row>
    </Header>
  );
};

export default DashboardHeader;
