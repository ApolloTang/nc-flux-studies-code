import { createSelector } from '@reduxjs/toolkit'
import { toggleTodo } from '~/todos/todo-list/todosSlice'
import { VisibilityFilters } from '~/todos/footer/containers/filter-control/slice--filter-control'

const selectTodos = state => state.todos
const selectFilter = state => state.visibilityFilter

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

const mapDispatchToProps = { toggleTodo }

export {
  mapStateToProps,
  mapDispatchToProps
}

