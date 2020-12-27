import { combineReducers } from 'redux'
import { todosSlice } from '~/todos/slices--todos/main--slices--todos'

const rootReducer = combineReducers({
  todos: todosSlice,
})

export { rootReducer }
