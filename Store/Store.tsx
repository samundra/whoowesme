import { createStore } from "redux";

import { TrackMoney } from "./reducers/TrackMoney";

export default createStore(
  TrackMoney,
  //@ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
