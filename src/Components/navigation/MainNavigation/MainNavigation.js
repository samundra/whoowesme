import React from 'react';

const MainNavigation = props => {
  return (
    <nav style={{ width: '100%', textAlign: 'center' }}>
      <ul
        style={{
          display: 'flex',
          alignItems: 'center',
          listStyle: 'none',
          height: '110px',
          color: '#444',
          background: '#eee',
        }}
      >
        <li
          style={{
            marginRight: '10px',
            textAlign: 'center',
            height: '80px',
          }}
        >
          <a
            href="/"
            style={{
              background: '#444',
              height: '80px',
              lineHeight: '80px',
              padding: '20px',
              color: '#fff',
            }}
          >
            Home
          </a>
        </li>
        <li style={{ marginRight: '10px', textAlign: 'center' }}>
          <a
            href="/add-friend"
            style={{
              background: '#ccc',
              height: '80px',
              lineHeight: '80px',
              padding: '20px',
              color: '#444',
            }}
          >
            Add Friend
          </a>
        </li>
        <li style={{ marginRight: '0', textAlign: 'center' }}>
          <a
            href="/add-friend"
            style={{
              // background: '#ccc',
              border: '1px solid #444',
              height: '80px',
              lineHeight: '80px',
              padding: '20px',
              color: '#444',
            }}
          >
            Logout
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
