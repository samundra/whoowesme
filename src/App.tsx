import React from 'react';
import './App.css';
import MainNavigation from './Components/navigation/MainNavigation';
import SidebarNavigation from './Components/navigation/SidebarNavigation';
import { Row, Col } from 'antd';

const contentStyle = {
  paddingLeft: '10px',
  textAlign: 'left',
  borderLeft: '2px solid #bbb',
  overflow: 'auto',
  height: 'auto',
  background: '#ccc',
  minHeight: '400px',
} as React.CSSProperties;

const App = () => {
  return (
    <Row className="App">
      <Row
        style={{
          textAlign: 'center',
          display: 'block',
        }}
      >
        <MainNavigation />
        <Row
          style={{
            width: '768px',
            margin: '0 auto',
          }}
        >
          <SidebarNavigation />
          <Col style={contentStyle}>Content Area</Col>
        </Row>
      </Row>
    </Row>
  );
};

export default App;
