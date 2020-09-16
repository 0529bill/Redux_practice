import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import "semantic-ui-css/semantic.min.css";
import thunk from "redux-thunk";

import App from "./components/App";
import combineReducers from "./reducers";

let store = createStore(combineReducers, applyMiddleware(thunk));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
