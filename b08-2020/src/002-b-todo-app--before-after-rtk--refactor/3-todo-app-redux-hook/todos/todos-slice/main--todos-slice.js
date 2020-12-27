import { combineReducers } from 'redux'
import { todosReducer } from './slice--todo-list'
import visibilityFilterReducer from './slice--filter-control'

const todosSlice = combineReducers({
  todoList: todosReducer,
  visibilityFilter: visibilityFilterReducer
})

export { todosSlice }
