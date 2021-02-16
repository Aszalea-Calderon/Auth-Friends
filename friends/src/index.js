import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

//Needed dependency
import { createStore } from "redux";
import { Provider } from "react-redux";
import { reducer } from "./reducers/index";
import thunk from "redux-thunk";
//End Needed Dependencies

//Store//
//const store = createStore(reducer, applyMiddleware(thunk));

//End Store//

ReactDOM.render(
  // <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // </Provider>,
  document.getElementById("root")
);
