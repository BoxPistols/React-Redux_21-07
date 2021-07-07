import React from 'react'
import ReactDOM from 'react-dom'
import './styles.scss'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { reducer } from './redux/reducer/counter'

import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './theme'
import Redux_Counter from './redux/container/Redux_Counter'

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
            <Redux_Counter />
        </Provider>
    </ThemeProvider>,

    rootElement
)
