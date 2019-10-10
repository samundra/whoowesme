import { createStore } from "redux";

import { MoneyManage } from "./reducers/MoneyManage";

export default createStore(
  MoneyManage,
  //@ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
