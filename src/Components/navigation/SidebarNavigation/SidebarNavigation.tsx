import React from 'react';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import { menu as sendInvitationMenu } from 'Pages/SendInvitation';
import { menu as manageFriendMenu } from 'Pages/ManageFriend';
import { menu as loginMenu } from 'Pages/Login';

const sideNavigation = {
  listStyle: 'none',
  textAlign: 'left',
  padding: '5px',
  float: 'left',
} as React.CSSProperties;

type Props = RouteComponentProps;

const SidebarNavigation: React.FunctionComponent<Props> = props => {
  console.log({ props });

  if (props.location.pathname === '/login') {
    return null;
  }

  return (
    <ul style={sideNavigation}>
      <li>
        <Link to={loginMenu.to}>{loginMenu.label}</Link>
      </li>
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

export default withRouter(SidebarNavigation);
