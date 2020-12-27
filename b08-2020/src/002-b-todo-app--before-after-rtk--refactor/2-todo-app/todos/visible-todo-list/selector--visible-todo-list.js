import { createSelector } from '@reduxjs/toolkit'
import { toggleTodo } from '~/todos/todos-slice/slice--todo-list'
import { VisibilityFilters } from '~/todos/todos-slice/slice--filter-control'

const selectTodos = state => state.todos.todoList
const selectFilter = state => state.todos.visibilityFilter

const selectVisibleTodos = createSelector(
  [selectTodos, selectFilter],
  (todos, filter) => {
    switch (filter) {
      case VisibilityFilters.SHOW_ALL:
        return todos
      case VisibilityFilters.SHOW_COMPLETED:
        return todos.filter(t => t.completed)
      case VisibilityFilters.SHOW_ACTIVE:
        return todos.filter(t => !t.completed)
      default:
        throw new Error('Unknown filter: ' + filter)
    }
  }
)

const mapStateToProps = state => ({
  todos: selectVisibleTodos(state)
})

const mapDispatchToProps = {
  dispatch_toggleTodo: toggleTodo
}

export {
  mapStateToProps,
  mapDispatchToProps
}

