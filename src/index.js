import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { reducer } from "./reducer";
import App from "./App";

// store create use reducer
const store = createStore(reducer);
// console.log(store);

// move getState
store.subscribe(() => {
  console.log(store.getState());
});
// open dispatch use type, payload
// store.dispatch({ type: "MINUS", payload: { num: 10 } });
// store.dispatch({ type: "MINUS", payload: { num: 100 } });

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
