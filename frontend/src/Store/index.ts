import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { transactionReducer } from './transaction/reducers';

// Fix: Add store
const rootReducer = combineReducers({
  transactionReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const composeEnhancers = composeWithDevTools({});

const store = createStore(rootReducer, composeEnhancers());

export default store;

// export default createStore(
//   // your reducer
//   //@ts-ignore
//   rootReducer
//   // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
