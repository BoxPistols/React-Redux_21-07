import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { reducer } from './reducer'
import App from './App'

const store = createStore(
    reducer /* preloadedState, */,
    // for Extention Redux Debug
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
// store.dispatch({ type: "MINUS", payload: { num: 10 } });

store.subscribe(() => {
    console.log(store.getState())
})
// store.dispatch({ type: "MINUS", payload: { num: 10 } });

const rootElement = document.getElementById('root')
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
)