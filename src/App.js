import "./styles.css";

import { createStore } from "redux";
// reducer function (init, action) switch...
const reducer = (state = 0, action) => {
  switch (action.type) {
    case "PLUS_ONE":
      return state + 1;
    case "MINUS_ONE":
      return state - 1;
    default:
      return state;
  }
};
// store create use reducer
const store = createStore(reducer);
// console.log(store);

// move getState
store.subscribe(() => {
  console.log(store.getState());
});

// open dispatch use type
store.dispatch({ type: "PLUS_ONE" });
store.dispatch({ type: "MINUS_ONE" });
store.dispatch({ type: "MINUS_ONE" });
store.dispatch({ type: "MINUS_ONE" });

// ==============
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Edit to see some magic happen!</h2>
    </div>
  );
}
