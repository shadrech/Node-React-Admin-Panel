import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers/users/reducer";
import { routerMiddleware } from "react-router-redux";
import history from "./history";
const historyMiddleware = routerMiddleware(history);

export default createStore(
  reducer,
  applyMiddleware(thunk, historyMiddleware)
);