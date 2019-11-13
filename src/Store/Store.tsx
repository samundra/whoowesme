import { createStore, combineReducers } from 'redux';

const rootReducer = combineReducers({});

export default createStore(
  // your reducer
  //@ts-ignore
  rootReducer
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
