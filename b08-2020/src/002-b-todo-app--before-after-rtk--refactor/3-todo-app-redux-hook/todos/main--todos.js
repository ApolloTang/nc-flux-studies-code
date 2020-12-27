import React from 'react'
import { Footer } from '~/todos/footer/main--footer'
import { AddTodo } from '~/todos/add-todo'
import { VisibleTodoList } from '~/todos/visible-todo-list'

const Todos = () => (
  <>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </>
)

export { Todos }
