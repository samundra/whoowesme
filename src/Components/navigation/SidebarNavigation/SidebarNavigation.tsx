import React from 'react';
import style from './style';

const SidebarNavigation: React.FunctionComponent = () => {
  return (
    <ul style={style.sideNavigation}>
      <li>
        <a href="/manage-friends">Friends</a>
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
