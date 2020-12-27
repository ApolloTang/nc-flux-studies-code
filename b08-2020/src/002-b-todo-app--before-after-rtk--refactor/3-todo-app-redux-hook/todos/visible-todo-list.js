import React from 'react'
import { createSelector } from '@reduxjs/toolkit'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

import { VisibilityFilters } from '~/todos/todos-slice/slice--filter-control'
import { TodoList } from './todo-list/main--todo-list'

const selectTodos = (state) => state.todos.todoList
const selectFilter = (state) => state.todos.visibilityFilter

const selectVisibleTodos = createSelector([selectTodos, selectFilter], (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter((t) => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter((t) => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
})

const VisibleTodoList = () => {
  const todos = useSelector(selectVisibleTodos)
  return <TodoList todos={todos} />
}

export { VisibleTodoList }
