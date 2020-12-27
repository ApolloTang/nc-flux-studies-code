import { combineReducers } from 'redux'
import { todosSlice } from '~/todos/slices--todos/main--todos-slice'

const rootReducer = combineReducers({
  todos: todosSlice,
})

export { rootReducer }
