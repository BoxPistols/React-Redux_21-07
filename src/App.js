import './styles.scss'
import { connect } from 'react-redux'

const App = ({ number, plus, minus }) => {
    return (
        <div className='App'>
            <h1>Hello Redux</h1>
            <h2>{number}</h2>
            <button
                onClick={() => {
                    plus(10)
                }}
            >
                CountUp
            </button>
            <button
                onClick={() => {
                    minus(10)
                }}
            >
                CountDown
            </button>
        </div>
    )
}

const mapStateProps = (state) => {
    return {
        number: state,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        plus: (num) => {
            dispatch({ type: 'PLUS', payload: { num: num } })
        },
        minus: (num) => {
            dispatch({ type: 'MINUS', payload: { num: num } })
        },
    }
}

export default connect(mapStateProps, mapDispatchToProps)(App)
