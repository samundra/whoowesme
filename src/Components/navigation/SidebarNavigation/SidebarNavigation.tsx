import React from 'react';

type SidebarNavigationProps = {
  style: any;
};

const SidebarNavigation: React.FunctionComponent<SidebarNavigationProps> = ({
  style,
}) => {
  return (
    <ul style={style}>
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
