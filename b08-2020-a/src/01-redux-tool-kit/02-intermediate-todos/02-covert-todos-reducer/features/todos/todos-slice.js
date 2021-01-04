import { createSlice } from '@reduxjs/toolkit'

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo(state, action) {
      const { id, text } = action.payload
      state.push({ id, text, completed: false })
      //    ^^^^
      //
      // Notice that the addTodo reducer is calling state.push().
      // Normally, this is bad, because the array.push() function
      // mutates the existing array, and
      //
      //   **Redux reducers must never mutate state!.**
      //
      // However, createSlice and createReducer
      // wrap your function with produce from the **Immer library**.
      // This means you can write code that "mutates" the state
      // inside the reducer, and Immer will safely return a correct
      // immutably updated result.
      //
    },
    toggleTodo(state, action) {
      const todo = state.find((todo) => todo.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
    }
  }
})

// "ducks" pattern.
// ===============
// • put all your action creators and reducers in one file,
// • named exports of the action creators,
// • default export of the reducer function.
//
export const { addTodo, toggleTodo } = todosSlice.actions
export default todosSlice.reducer


// previous todos reducer:
// =======================
//
// prettier-ignore
const Previous_Todos = (state = [], action) => {
  switch (action.type) {

    case 'ADD_TODO':
      return [  // <-------- w/o immer we need to return a new array
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]

    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? {    // <--------- w/o immer we need to return a new object
              ...todo,
              completed: !todo.completed
            }
          : todo
      )

    default:
      return state
  }
}
