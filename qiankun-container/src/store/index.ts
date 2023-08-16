import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import user from "./user/reducers";

//集成reducer 中间件
const store = createStore(
  combineReducers({ user }),
  applyMiddleware(thunk, logger)
);

export default store;
