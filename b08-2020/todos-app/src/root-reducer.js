import { combineReducers } from 'redux'
import { todosReducer } from './todos/todo-list/todosSlice'
import visibilityFilterReducer from './todos/footer/containers/filter-control/slice--filter-control'

const rootReducer = combineReducers({
  todos: todosReducer,
  visibilityFilter: visibilityFilterReducer
})

export { rootReducer }
