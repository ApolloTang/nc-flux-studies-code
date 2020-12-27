import { createSlice } from '@reduxjs/toolkit'

let nextTodoId = 0

const slice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: {
      reducer(state, action) {
        const { id, text } = action.payload
        state.push({ id, text, completed: false })
      },
      prepare(text) {
        return { payload: { text, id: nextTodoId++ } }
      }
    },
    toggleTodo(state, action) {
      const todo = state.find(todo => todo.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
    }
  }
})

const {
  actions: {
    addTodo,
    toggleTodo,
  },
  reducer
} = slice

export {
  reducer as reducer_todos,
  addTodo as action_addTodo,
  toggleTodo as action_toggleTodo
}
