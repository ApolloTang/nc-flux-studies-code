import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useDispatch } from 'react-redux'

import { action_addTodo } from '~/todos/slices--todos/slice--todo-list'

const AddTodo = ({ dispatch_addTodo }) => {
  const dispatch = useDispatch()
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
          dispatch(action_addTodo(todoText))
          setTodoText('')
        }}
      >
        <input value={todoText} onChange={onChange} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}

export {
  AddTodo
}
