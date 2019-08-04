import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import TestComponent from "./components/testComponent";

// const store = createStore(
//   allReducers,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

function productReducer(state = [], action) {
  return state;
}
function userReducer(state = "", action) {
  if (action.type === "updateUser") {
    return action.payload.user;
  }
  return state;
}
const allReducersss = combineReducers({
  products: productReducer,
  user: userReducer
});
const store = createStore(allReducersss, {
  products: [{ name: "iPhone", year: 2007 }],
  user: "Gökalp"
});

ReactDOM.render(
  <Provider store={store}>
    <TestComponent />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
