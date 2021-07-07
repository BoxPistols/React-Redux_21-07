import View_Counter from '../view/View_Counter'
import { connect } from 'react-redux'
import { plus, minus, reset } from '../action'

const mapStateProps = (state) => {
    return {
        number: state,
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

export default connect(mapStateProps, mapDispatchToProps)(View_Counter)
