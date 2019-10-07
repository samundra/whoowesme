import React from 'react';
import './App.css';
import MainNavigation from './Components/navigation/MainNavigation';
import SidebarNavigation from './Components/navigation/SidebarNavigation';
import { Row, Col } from 'antd';
import AddFriendForm from 'Components/form/AddFriendForm';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

const contentStyle = {
  paddingLeft: '10px',
  textAlign: 'left',
  overflow: 'auto',
  height: 'auto',
  minHeight: '400px',
} as React.CSSProperties;

type AppProps = {
  getFieldDecorator?: any;
};

const App: React.FunctionComponent<AppProps> = () => {
  return (
    <Row className="App">
      <Router>
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
            <Col style={contentStyle}>
              <Row>
                <Switch>
                  <Route path="/manage-friends" component={AddFriendForm} />
                </Switch>
              </Row>
            </Col>
          </Row>
        </Row>
      </Router>
    </Row>
  );
};

export default App;
