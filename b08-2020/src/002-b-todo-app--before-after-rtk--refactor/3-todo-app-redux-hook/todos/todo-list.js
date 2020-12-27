import React from 'react'
import { TodoItem } from './todo-item'
import { useDispatch } from 'react-redux'

import { toggleTodo } from '~/todos/todos-slice/slice--todo-list'

const TodoList = ({ todos }) => {
  const dispatch = useDispatch()
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} onClick={() => dispatch(toggleTodo(todo.id))} />
      ))}
    </ul>
  )
}

export { TodoList }
