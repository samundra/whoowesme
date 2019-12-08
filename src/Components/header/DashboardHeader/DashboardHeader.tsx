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
import { useHistory, Link } from 'react-router-dom';
import AddNewItem from 'Components/button/AddNewItem';

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
    <StyledHeader>
      <Row type="flex" justify="space-between" align="middle" gutter={16}>
        <Col span={5} style={{ float: 'left' }}>
          <HamburgerMenu />
          <AddNewItem onClick={() => history.push('/add-new-item')} />
          <Search
            placeholder="Search"
            onSearch={value => console.log(value)}
            prefix={<Icon type="right" />}
          />
        </Col>
        <Col span={8} style={{ float: 'right' }}>
          <Row type="flex" justify="center" align="middle" gutter={16}>
            <StyledSettingsMenu>
              <Badge count={10} dot={true}>
                <Icon type="notification" style={{ fontSize: 18 }} />
              </Badge>
            </StyledSettingsMenu>
            <Divider type="vertical" />
            <StyledSettingsMenu>
              <Link to="/settings">
                <Icon type="setting" /> Settings
              </Link>
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
    </StyledHeader>
  );
};

const StyledHeader = styled(Header)`
  background: #fff;
  padding: 0;
  paddingleft: 10px;
`;

export default DashboardHeader;
