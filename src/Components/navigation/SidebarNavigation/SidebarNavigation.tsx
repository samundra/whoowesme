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
        <a href="/add-friend">Add Friend</a>
      </li>
      <li>
        <a href="/show-debts">Show Debts</a>
      </li>
      <li>
        <a href="/show-graph">Show Graph</a>
      </li>
    </ul>
  );
};

export default SidebarNavigation;
