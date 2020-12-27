import React, { useState } from 'react'
import { connect } from 'react-redux'

import { mapDispatch } from './selector--add-todo'

const AddTodoUnConnected = ({ dispatch_addTodo }) => {
  const [todoText, setTodoText] = useState('')

  const onChange = e => setTodoText(e.target.value)

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!todoText.trim()) {
            return
          }
          dispatch_addTodo(todoText)
          setTodoText('')
        }}
      >
        <input value={todoText} onChange={onChange} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}

const AddTodo = connect(
  null,
  mapDispatch
)(AddTodoUnConnected)

export {
  AddTodo
}
