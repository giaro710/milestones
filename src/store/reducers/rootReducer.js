import { combineReducers } from "redux";
import { pathReducer } from "./pathReducer";

export default combineReducers({
  paths: pathReducer,
});
