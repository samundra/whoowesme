import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import SendInvitation, {
  menu as sendInvitationMenu,
} from 'Pages/SendInvitation';
import AddFriend, { menu as addFriendMenu } from 'Pages/AddFriend';
import Login, { menu as loginMenu } from 'Pages/Login';
import { Provider } from 'react-redux';
import store from './Store/Store';
import { PageNotFound, ComingSoon } from 'Pages';

type AppProps = {
  getFieldDecorator?: any;
};

const App: React.FunctionComponent<AppProps> = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path={loginMenu.to} component={Login} />
          <Route path={addFriendMenu.to} component={AddFriend} />
          <Route path={sendInvitationMenu.to} component={SendInvitation} />
          <Route path="/overview">
            <ComingSoon title="Overview" />
          </Route>
          <Route path="/summary">
            <ComingSoon title="Summary" />
          </Route>
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
