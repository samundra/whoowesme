import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import SendInvitation, {
  menu as sendInvitationMenu,
} from 'Pages/SendInvitation';
import ManageFriend, { menu as manageFriendMenu } from 'Pages/ManageFriend';
import Login, { menu as loginMenu } from 'Pages/Login';
import { Provider } from 'react-redux';
import store from './Store/Store';

type AppProps = {
  getFieldDecorator?: any;
};

const App: React.FunctionComponent<AppProps> = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path={loginMenu.to} component={Login} />
          <Route path={manageFriendMenu.to} component={ManageFriend} />
          <Route path={sendInvitationMenu.to} component={SendInvitation} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
