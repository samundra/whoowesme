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
        <MainNavigation />
        <div
          style={{
            width: '768px',
            margin: '0 auto',
          }}
        >
          <SidebarNavigation />
          <div
            style={{
              paddingLeft: '10px',
              textAlign: 'left',
              borderLeft: '2px solid #bbb',
              overflow: 'auto',
              height: 'auto',
              background: '#ccc',
              minHeight: '400px',
            }}
          >
            Content Area
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
