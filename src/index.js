import React from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducers from "./redux/reducers";

import App from "./components/App";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles/normalize.sass";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
