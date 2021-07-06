import View_Counter from '../view/View_Counter'
import { connect } from 'react-redux'

const mapStateProps = (state) => {
    return {
        number: state,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        plus: (count) => {
            dispatch({ type: 'PLUS', payload: { num: count } })
        },
        minus: (count) => {
            dispatch({ type: 'MINUS', payload: { num: count } })
        },
        reset: (count) => {
            dispatch({ type: 'RESET', payload: { num: count } })
        },
    }
}

export default connect(mapStateProps, mapDispatchToProps)(View_Counter)
