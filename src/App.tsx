import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import SendInvitation, {
  menu as sendInvitationMenu,
} from 'Pages/SendInvitation';
import TransactionList, {
  menu as transactionMenu,
} from 'Pages/TransactionList';
import AddFriend, { menu as addFriendMenu } from 'Pages/AddFriend';
import Login, { menu as loginMenu } from 'Pages/Login';
import { Provider } from 'react-redux';
import store from './Store/Store';
import { PageNotFound, TransactionEdit, ComingSoon, Settings } from 'Pages';
import AddNewItem, { menu as addNewItemMenu } from 'Pages/AddNewItem';
import { hot } from 'react-hot-loader/root';

type AppProps = {
  getFieldDecorator?: any;
};

// TODO: add context to toggle sidebar

const App: React.FunctionComponent<AppProps> = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path={loginMenu.to} component={Login} />
          <Route path={addFriendMenu.to} component={AddFriend} />
          <Route path={addNewItemMenu.to} component={AddNewItem} />
          <Route path={sendInvitationMenu.to} component={SendInvitation} />
          <Route path={transactionMenu.to} component={TransactionList} />
          <Route path="/transaction/:id/edit" component={TransactionEdit} />
          <Route path="/settings" component={Settings} />
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

export default process.env.NODE_ENV === 'development' ? hot(App) : App;
