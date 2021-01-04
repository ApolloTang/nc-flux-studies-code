import React from 'react'
import Footer from '~/features/filters/Footer'
import AddTodo from '~/features/todos/AddTodo'
import VisibleTodoList from '~/features/todos/VisibleTodoList'

const App = () => (
  <div>
    <h1>RTK todos</h1>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
