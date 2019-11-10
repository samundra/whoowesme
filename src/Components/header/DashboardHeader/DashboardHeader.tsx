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
`;

const MenuLabel = styled('span')`
  margin-left: 15px;
`;

type Props = {};

const onMenuItemClick = (key: string) => {
  console.log({ key });
};

const menu = (
  <Menu>
    <Menu.Item
      key="menu.profile.about"
      onClick={() => onMenuItemClick('menu.profile.about')}
    >
      <MenuLabel>
        <Icon type="user" />
        <span style={{ marginLeft: 10 }}>Profile</span>
      </MenuLabel>
    </Menu.Item>
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
      key="menu.profile.exit"
      onClick={() => onMenuItemClick('menu.profile.logout')}
    >
      <MenuLabel>
        <Icon type="logout" />
        <span style={{ marginLeft: 10 }}>Logout</span>
      </MenuLabel>
    </Menu.Item>
  </Menu>
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
          <Dropdown overlay={menu}>
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
