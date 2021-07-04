import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { reducer } from './reducer'
import App from './App'

import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './theme'

const store = createStore(
    reducer /* preloadedState, */,
    // for Extention Redux Debug
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(() => {
    console.log(store.getState())
})
// store.dispatch({ type: "MINUS", payload: { num: 10 } });

const rootElement = document.getElementById('root')
ReactDOM.render(
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Provider store={store}>
            <App />
        </Provider>
    </ThemeProvider>,

    rootElement
)
