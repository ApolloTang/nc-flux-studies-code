import { combineReducers } from 'redux'
import { todosSlice } from '~/todos/todos-slice/main--todos-slice'

const rootReducer = combineReducers({
  todos: todosSlice,
})

export { rootReducer }
