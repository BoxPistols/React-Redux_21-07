import Counter from '../components/Counter'
import { connect } from 'react-redux'
import { plus, minus, reset } from '../actions'

const mapStateProps = (state) => {
    return {
        number: state.counter,
        day: state.day,
        title: state.title,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        plus: (count) => {
            dispatch(plus(count))
        },
        minus: (count) => {
            // dispatch({ type: 'MINUS', payload: { num: count } })
            dispatch(minus(count))
        },
        reset: (count) => {
            dispatch(reset(count))
        },
    }
}

export default connect(mapStateProps, mapDispatchToProps)(Counter)
