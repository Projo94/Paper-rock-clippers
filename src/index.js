import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import prsReducer from "./PRS/reducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import Axios from "axios";

const storePRS = createStore(
  prsReducer,
  composeWithDevTools(applyMiddleware(thunk))
); //middleware goes into composeWithDevTools

//axios configuration
// Axios.defaults.baseURL = "http://localhost:5000/api";
// Axios.defaults.headers.post["Content-Type"] = "application/json";

ReactDOM.render(
  <>
    <Provider store={storePRS}>
      <App></App>
    </Provider>
  </>,
  document.getElementById("root")
);
