import React from 'react';
import styled from 'styled-components';
import { Menu, Icon } from 'antd';

const StyledMenuLabel = styled('span')`
  margin-left: 15px;
`;

const StyledArrowTop = styled('span')`
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

const StyledLogoutButton = styled(StyledMenuLabel)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ccc;
  &:hover {
    color: #fff;
  }
`;

type Props = {};

const onMenuItemClick = (key: string) => {
  console.log({ key });
};

const ProfileMenu = (
  <div style={menuContainerStyle}>
    <StyledArrowTop />
    <Menu style={{ paddingBottom: 0, marginBottom: 0, position: 'relative' }}>
      <Menu.Item
        key="menu.profile.about"
        onClick={() => onMenuItemClick('menu.profile.about')}
        style={menuFirstItemStyle}
      >
        <StyledMenuLabel>
          <Icon type="user" />
          <span style={{ marginLeft: 10 }}>Profile</span>
        </StyledMenuLabel>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item
        key="menu.profile.message"
        onClick={() => onMenuItemClick('menu.profile.message')}
      >
        <StyledMenuLabel>
          <Icon type="message" />
          <span style={{ marginLeft: 10 }}>Message</span>
        </StyledMenuLabel>
      </Menu.Item>
      <Menu.Item
        key="menu.profile.logout"
        onClick={() => onMenuItemClick('menu.profile.logout')}
        style={logoutMenuStyle}
      >
        <StyledLogoutButton>
          Logout
          {'  '}
          <Icon type="poweroff" style={{ marginLeft: 10 }} />
        </StyledLogoutButton>
      </Menu.Item>
    </Menu>
  </div>
);

export default ProfileMenu;
