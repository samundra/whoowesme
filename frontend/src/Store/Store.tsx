import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// Fix: Add store
const rootReducer = combineReducers({});
const composeEnhancers = composeWithDevTools({});

const store = createStore(rootReducer, composeEnhancers());

export default store;

// export default createStore(
//   // your reducer
//   //@ts-ignore
//   rootReducer
//   // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
