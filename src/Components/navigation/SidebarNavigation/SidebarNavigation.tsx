import React from 'react';
import { Link } from 'react-router-dom';

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
        <Link to="/manage-friends">Manage Friends List</Link>
      </li>
      <li>
        <Link to="/send-invitations">Send invitations</Link>
      </li>
      <li>
        <Link to="/show-transactions">Show Transactions</Link>
      </li>
      <li>
        <Link to="/show-graph">Show Graph</Link>
      </li>
    </ul>
  );
};

export default SidebarNavigation;
