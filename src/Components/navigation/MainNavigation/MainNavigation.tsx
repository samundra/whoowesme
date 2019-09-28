import React from 'react';
import style from './style';

type Props = {};

const MainNavigation: React.FunctionComponent<Props> = props => {
  return (
    <nav style={{ width: '100%', textAlign: 'center' }}>
      <ul style={style.ulStyle}>
        <li style={style.liStyle}>
          <a href="/" style={style.activeLink}>
            Home
          </a>
        </li>
        <li style={{ marginRight: '10px', textAlign: 'center' }}>
          <a href="/add-friend" style={style.defaultLink}>
            Add Friend
          </a>
        </li>
        <li style={{ marginRight: '0', textAlign: 'center' }}>
          <a href="/add-friend" style={style.metroUILink}>
            Logout
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
