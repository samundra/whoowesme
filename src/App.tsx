import React from 'react';
import './App.css';
import MainNavigation from './Components/navigation/MainNavigation';
import SidebarNavigation from './Components/navigation/SidebarNavigation';

const App = () => {
  return (
    <div className="App">
      <div
        style={{
          textAlign: 'center',
          display: 'block',
        }}
      >
        <MainNavigation
          style={{ minWidth: '768px', width: '768px', margin: '0 auto' }}
        />
        <div
          style={{
            width: '768px',
            margin: '0 auto',
          }}
        >
          <SidebarNavigation
            style={{
              listStyle: 'none',
              textAlign: 'left',
              padding: '0',
              float: 'left',
            }}
          />
          <div>Content Area</div>
        </div>
      </div>
    </div>
  );
};

export default App;
