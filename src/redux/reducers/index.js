import { combineReducers } from 'redux'

import { number } from './number'
import { counter } from './counter'
import { day } from './day'
import { title } from './title'

export default combineReducers({
    number,
    counter,
    day,
    title,
})
