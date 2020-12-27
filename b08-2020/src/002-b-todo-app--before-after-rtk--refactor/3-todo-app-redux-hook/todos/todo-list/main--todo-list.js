import React, { useCallback } from 'react'
import { TodoItem } from './todo-item'
import { useDispatch } from 'react-redux'

import { action_toggleTodo } from '~/todos/slices--todos/slice--todo-list'

const TodoList = ({ todos }) => {
  const dispatch = useDispatch()
  const handle_click = useCallback( (id) => () => dispatch(action_toggleTodo(id)) , [dispatch])

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} onClick={handle_click(todo.id)} />
      ))}
    </ul>
  )
}

export { TodoList }
