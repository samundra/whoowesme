import React from 'react';
import { Link } from 'react-router-dom';
import { menu as sendInvitationMenu } from 'Pages/SendInvitation';
import { menu as manageFriendMenu } from 'Pages/ManageFriend';

const sideNavigation = {
  listStyle: 'none',
  textAlign: 'left',
  padding: '5px',
  float: 'left',
} as React.CSSProperties;

const SidebarNavigation: React.FunctionComponent = () => {
  return (
    <ul style={sideNavigation}>
      <li>
        <Link to={manageFriendMenu.to}>{manageFriendMenu.label}</Link>
      </li>
      <li>
        <Link to={sendInvitationMenu.to}>{sendInvitationMenu.label}</Link>
      </li>
      {/*<li>
        <Link to="/show-transactions">Show Transactions</Link>
      </li>
      <li>
        <Link to="/show-graph">Show Graph</Link>
      </li>*/}
    </ul>
  );
};

export default SidebarNavigation;
