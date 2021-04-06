import React, { useState } from 'react'
import './App.css'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import SendInvitation from 'Pages/SendInvitation'
import TransactionList from 'Pages/TransactionList'
import AddFriend from 'Pages/AddFriend'
import ChangePassword from 'Pages/ChangePassword'
import { Provider } from 'react-redux'
import store from './Store'
import { PageNotFound, TransactionEdit, ComingSoon, Settings, AddCategory, Profile, Login } from 'Pages'
import TransactionAdd from 'Pages/TransactionAdd'
import Dashboard from 'Pages/Dashboard'
import { hot } from 'react-hot-loader/root'
import { SiderContext } from 'Components/context'

type Props = {}

const App: React.FunctionComponent<Props> = () => {
  const collapsed = localStorage.getItem('menu.is_collapsed')
  const openState = collapsed === 'yes'
  const [siderState, setSiderState] = useState(openState)

  return (
    <Router>
      <Provider store={store}>
        <SiderContext.Provider
          value={{
            collapsed: siderState,
            toggleSider: (): void => {
              const newValue = collapsed === 'yes' ? 'no' : 'yes'
              localStorage.setItem('menu.is_collapsed', newValue)
              setSiderState(!siderState)
            },
          }}
        >
          <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/add-friend" component={AddFriend} />
            <Route path="/transaction/add" component={TransactionAdd} />
            <Route path="/send-invitation" component={SendInvitation} />
            <Route path="/transaction/list" component={TransactionList} />
            <Route path="/transaction/:id/edit" component={TransactionEdit} />
            <Route path="/settings" component={Settings} />
            <Route path="/add-category" component={AddCategory} />
            <Route path="/change-password" component={ChangePassword} />
            <Route path="/profile" component={Profile} />
            <Route path="/summary">
              <ComingSoon title="Summary" />
            </Route>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/check-api" component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/" component={Dashboard} />
            <Route component={PageNotFound} />
          </Switch>
        </SiderContext.Provider>
      </Provider>
    </Router>
  )
}

export default process.env.NODE_ENV === 'development' ? hot(App) : App
