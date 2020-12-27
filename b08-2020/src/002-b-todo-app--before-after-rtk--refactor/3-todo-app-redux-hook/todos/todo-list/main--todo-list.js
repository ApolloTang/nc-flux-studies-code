import React from 'react'
import { TodoItem } from './todo-item'
import { useDispatch } from 'react-redux'

import { action_toggleTodo } from '~/todos/slices--todos/slice--todo-list'

const TodoList = ({ todos }) => {
  const dispatch = useDispatch()
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} onClick={() => dispatch(action_toggleTodo(todo.id))} />
      ))}
    </ul>
  )
}

export { TodoList }
