import React from 'react';
import { Link } from 'react-router-dom';
import { meta as sendInvitation } from 'Pages/SendInvitation';
import { meta as manageFriend } from 'Pages/ManageFriend';

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
        <Link to={manageFriend.to}>{manageFriend.label}</Link>
      </li>
      <li>
        <Link to={sendInvitation.to}>{sendInvitation.label}</Link>
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
