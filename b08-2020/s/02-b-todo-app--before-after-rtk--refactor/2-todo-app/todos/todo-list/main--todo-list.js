import React from 'react'
import PropTypes from 'prop-types'
import { TodoItem } from './todo-item'

const TodoList = ({ todos, dispatch_toggleTodo }) => (
  <ul>
    {todos.map((todo) => (
      <TodoItem key={todo.id} {...todo} onClick={() => dispatch_toggleTodo(todo.id)} />
    ))}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  dispatch_toggleTodo: PropTypes.func.isRequired
}

export { TodoList }
