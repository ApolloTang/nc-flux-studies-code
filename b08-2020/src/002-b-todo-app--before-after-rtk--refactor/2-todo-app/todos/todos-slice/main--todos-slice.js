import { combineReducers } from 'redux'
import { reducer_todos } from './slice--todo-list'
import { reducer_visibilityFilter } from './slice--filter-control'

const todosSlice = combineReducers({
  todoList: reducer_todos,
  visibilityFilter: reducer_visibilityFilter
})

export { todosSlice }
