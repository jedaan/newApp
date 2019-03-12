import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import reduxThunk from "redux-thunk";
import { renderRoutes } from "react-router-config";
import axios from "axios";
import Routes from "../Routes";
import rootReducer from "../data/reducers";
import { isEmptyObject } from "./helpers/validate";
import { SUCCESS_LOG_IN } from '../data/actions/type';

const axiosInstance = axios.create({
  baseURL: "/api/"
});

const store = createStore(
  rootReducer,
  window.INITIAL_STATE,
  applyMiddleware(reduxThunk.withExtraArgument(axiosInstance))
);

let userData = localStorage.getItem('user');

if (!isEmptyObject(userData)) {
  userData = JSON.parse(userData);
  store.dispatch({
    type: SUCCESS_LOG_IN,
    payload: userData
  });
}

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      {renderRoutes(Routes)}
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
