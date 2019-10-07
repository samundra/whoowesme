import React from 'react';

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
        <a href="/manage-friends">Manage Friends List</a>
      </li>
      <li>
        <a href="/send-invitations">Send invitations</a>
      </li>
      <li>
        <a href="/show-transactions">Show Transactions</a>
      </li>
      <li>
        <a href="/show-graph">Show Graph</a>
      </li>
    </ul>
  );
};

export default SidebarNavigation;
