import React from 'react';
import style from './style';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import ApplicationLogo from '../../logo/SidebarMenuLogo';

const mainNavigationStyle = {
  minWidth: '1024px',
  width: '1024px',
  margin: '0 auto',
} as React.CSSProperties;

const applicationLinks = (path: string) => {
  if (path === '/login') {
    return null;
  }

  return (
    <ul style={style.ulStyle}>
      <li style={style.liStyle}>
        <Link to="/dashboard" style={style.activeLink}>
          {' '}
          Home{' '}
        </Link>
      </li>
      <li style={{ marginRight: '0', textAlign: 'center' }}>
        <Link to="/logout" style={style.metroUILink}>
          Logout
        </Link>
      </li>
    </ul>
  );
};

type Props = RouteComponentProps;

const MainNavigation: React.FunctionComponent<Props> = props => {
  const { location } = props;

  return (
    <nav style={mainNavigationStyle}>
      <div
        className="app-logo"
        style={{ background: '#eee', overflow: 'auto' }}
      >
        <ApplicationLogo />
        <h2
          style={{
            lineHeight: '80px',
            margin: '0',
            marginLeft: '80px',
            height: '80px',
            color: '#888',
            fontSize: '24px',
            textTransform: 'uppercase',
            textShadow: '1px 1px 1px #fff',
          }}
        >
          Tailor App
        </h2>
        {applicationLinks(location.pathname)}
      </div>
    </nav>
  );
};

export default withRouter(MainNavigation);
