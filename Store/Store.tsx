import { createStore } from "redux";

export default createStore(
  // your reducer
  //@ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

