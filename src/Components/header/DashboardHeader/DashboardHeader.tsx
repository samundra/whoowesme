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
  Dropdown,
} from 'antd';
import styled from 'styled-components';
import { profileMenu } from 'Components/menu/ProfileMenu';

const { Header } = Layout;
const { Search } = Input;

const StyledMenu = styled('span')`
  user-select: none;
  cursor: pointer;
`;

const StyledSettingsMenu = styled(StyledMenu)``;

const StyledProfileMenu = styled(StyledMenu)`
  background: #fff;
  height: 100%;
  display: inline-block;
  padding: 0 5px;
`;

type Props = {};

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
          <StyledSettingsMenu>
            <Button type="link" href="/settings" icon="setting">
              Settings
            </Button>
          </StyledSettingsMenu>
          <Divider type="vertical" />
          <Dropdown overlay={profileMenu} trigger={['click', 'hover']}>
            <StyledProfileMenu>
              <Badge count={1}>
                <span style={{ marginRight: 10 }}>Sam Shrestha</span>
                <Avatar shape="circle" icon="user" />
              </Badge>
              {'  '}
              <Icon type="down" style={{ marginLeft: 15 }} />
            </StyledProfileMenu>
          </Dropdown>
        </Col>
      </Row>
    </Header>
  );
};

export default DashboardHeader;
