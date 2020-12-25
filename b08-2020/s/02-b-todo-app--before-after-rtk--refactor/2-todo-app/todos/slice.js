import { combineReducers } from 'redux'
import { todosReducer } from '~/todos/slice--todos'
import visibilityFilterReducer from '~/todos/slice--filter-control'

const todosSlice = combineReducers({
  todoList: todosReducer,
  visibilityFilter: visibilityFilterReducer
})

export { todosSlice }
