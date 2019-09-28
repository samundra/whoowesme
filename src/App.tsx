import React from 'react';
import { Button } from 'antd';
import './App.css';
import { MainNavigation } from './Components/navigation/MainNavigation';

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
      </div>
      <div style={{ height: '100%' }}>
        <Button type="primary">Button</Button>
      </div>
    </div>
  );
};

export default App;
