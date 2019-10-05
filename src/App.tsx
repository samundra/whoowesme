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
          <div>Content Area</div>
        </div>
      </div>
    </div>
  );
};

export default App;
