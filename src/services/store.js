import { createStore } from 'redux'
import { combineReducers } from 'redux'
import EmployeeReducer from '../features/employees'

const store = createStore(
    combineReducers({
        employees: EmployeeReducer
    })
)

export default store