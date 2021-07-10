import React from 'react'
import ReactDOM from 'react-dom'
import './styles.scss'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './redux/reducers'

import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './theme'
import Redux_Counter from './redux/containers/Redux_Counter'

const store = createStore(
    rootReducer /* preloadedState, */,
    // for Extention Redux Debug
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
// store.dispatch({ type: "MINUS", payload: { num: 10 } });

// store.subscribe(() => {
//     console.log(store.getState())
// })

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