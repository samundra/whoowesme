import React from 'react';
import './App.css';
import { Row, Col } from 'antd';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import MainNavigation from './Components/navigation/MainNavigation';
import SidebarNavigation from './Components/navigation/SidebarNavigation';
import SendInvitation, {
  menu as sendInvitationMenu,
} from 'Pages/SendInvitation';
import ManageFriend, { menu as manageFriendMenu } from 'Pages/ManageFriend';

const contentStyle = {
  paddingLeft: '10px',
  textAlign: 'left',
  overflow: 'auto',
  height: 'auto',
  minHeight: '400px',
} as React.CSSProperties;

const navigationStyle = {
  width: '1024px',
  margin: '0 auto',
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
          <Row style={navigationStyle}>
            <SidebarNavigation />
            <Col style={contentStyle}>
              <Row>
                <Switch>
                  <Route path={manageFriendMenu.to} component={ManageFriend} />
                  <Route
                    path={sendInvitationMenu.to}
                    component={SendInvitation}
                  />
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
