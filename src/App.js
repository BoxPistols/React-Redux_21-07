import './styles.scss'
import { connect } from 'react-redux'

const App = ({ itemList, plus }) => {
    return (
        <div>
            <p>{itemList}</p>
            <button
                onClick={() => {
                    plus(7)
                }}
            >
                Add
            </button>
        </div>
    )
}

// State
const mapStateProps = (state) => {
    return {
        itemList: state,
    }
}
// Dispatche
const mapDispatchToProps = (dispatch) => {
    return {
        plus: (v) => {
            dispatch({ type: 'Plus', payload: { item: v } })
        },
    }
}

export default connect(mapStateProps, mapDispatchToProps)(App)
