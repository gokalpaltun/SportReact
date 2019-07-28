import { combineReducers } from "redux";
import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import myRecordsTabReducer from "./tabsStatus/myRecordsTab";
import profileTabReducer from "./tabsStatus/profileTab";
import sportsTabReducer from "./tabsStatus/sportsTab";

const allReducers = combineReducers({
  counter: counterReducer,
  loggedReducer: loggedReducer,
  myRecordsTabReducer: myRecordsTabReducer,
  profileTabReducer: profileTabReducer,
  sportsTabReducer: sportsTabReducer
});

export default allReducers;
