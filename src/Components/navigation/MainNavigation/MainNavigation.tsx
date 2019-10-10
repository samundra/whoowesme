import React from 'react';
import style from './style';
import { Link } from 'react-router-dom';

const mainNavigationStyle = {
  minWidth: '1024px',
  width: '1024px',
  margin: '0 auto',
} as React.CSSProperties;

const MainNavigation: React.FunctionComponent = () => {
  return (
    <nav style={mainNavigationStyle}>
      <ul style={style.ulStyle}>
        <li style={style.liStyle}>
          <Link to="/dashboard" style={style.activeLink}>
            Home
          </Link>
        </li>
        <li style={{ marginRight: '0', textAlign: 'center' }}>
          <Link to="/logout" style={style.metroUILink}>
            Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;