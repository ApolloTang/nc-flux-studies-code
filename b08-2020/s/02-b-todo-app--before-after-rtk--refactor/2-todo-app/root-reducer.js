import { combineReducers } from 'redux'
import { todosSlice } from '~/todos/slice'

const rootReducer = combineReducers({
  todos: todosSlice,
})

export { rootReducer }
