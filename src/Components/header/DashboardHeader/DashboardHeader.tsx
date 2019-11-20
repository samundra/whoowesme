import React from 'react';
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
import HamburgerMenu from 'Components/menu/HamburgerMenu/HamburgerMenu';
import { useHistory } from 'react-router-dom';

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

const StyledUserFullname = styled('span')`
  margin-right: 5px;
`;

type Props = {};

const DashboardHeader: React.FunctionComponent<Props> = () => {
  const history = useHistory();

  return (
    <Header style={{ background: '#fff', padding: 0, paddingLeft: '10px' }}>
      <Row type="flex" justify="space-between" align="middle" gutter={16}>
        <Col span={5}>
          <HamburgerMenu />
          <Button onClick={() => history.push('/add-new-item')}>
            <Icon type="plus" /> Add new Item
          </Button>
        </Col>
        <Col span={11}>
          <Search
            placeholder="Search"
            onSearch={value => console.log(value)}
            prefix={<Icon type="right" />}
          />
        </Col>
        <Col span={8}>
          <Row type="flex" justify="center" align="middle" gutter={16}>
            <StyledSettingsMenu>
              <Badge count={10} dot={true}>
                <Icon type="notification" style={{ fontSize: 18 }} />
              </Badge>
            </StyledSettingsMenu>
            <Divider type="vertical" />
            <StyledSettingsMenu>
              <Button type="link" href="/settings" icon="setting">
                Settings
              </Button>
            </StyledSettingsMenu>
            <Divider type="vertical" />
            <Dropdown overlay={profileMenu} trigger={['click', 'hover']}>
              <StyledProfileMenu>
                <Avatar shape="circle" icon="user" style={{ marginRight: 5 }} />
                {'   '}
                <StyledUserFullname>Sam Shrestha</StyledUserFullname>
                <Icon type="down" style={{ marginLeft: 15 }} />
              </StyledProfileMenu>
            </Dropdown>
          </Row>
        </Col>
      </Row>
    </Header>
  );
};

export default DashboardHeader;
