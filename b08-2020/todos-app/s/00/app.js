import React from 'react'
import { Footer } from '~/todos/footer/main--footer'
import AddTodo from '~/todos/AddTodo'
import VisibleTodoList from '~/todos/visible-todo-list/main--visible-todo-list'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export { App }
