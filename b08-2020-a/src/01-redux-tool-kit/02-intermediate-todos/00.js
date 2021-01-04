import React from 'react'
import ReactDOM from 'react-dom'
const container = document.createElement('div')
container.id = 'app'
document.body.appendChild(container)

import {
  configureStore,
  createAction,
  // createReducer,
  createSlice
} from '@reduxjs/toolkit'

const action_incrementBy = createAction('incrementBy')

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increase: (state) => state + 1,
    decrement: (state) => state - 1
  },
  extraReducers: {
    [action_incrementBy]: (state, action) => {
      return state + action.payload
    },
    'some/other/action': (state, action) => {
      return state + 1
    }
  }
})
console.log('counterSlice', counterSlice)

// instead of using redux store we use
const store = configureStore({
  reducer: counterSlice.reducer
})

const increment = () => {
  console.log('inc')
  store.dispatch({ type: 'some/other/action' }) // <-- cross reducer communication
}

const decrement = () => {
  console.log('decrement')
  store.dispatch(counterSlice.actions.decrement())
}

const incrementBy = () => {
  console.log('incrementBy')
  store.dispatch(action_incrementBy(100))
}

const MyComponent = () => {
  const [counter, setCounter] = React.useState(store.getState())
  store.subscribe(() => {
    setCounter(store.getState().toString())
  })

  return (
    <div id="my-component">
      <div>
        <div>
          {' '}
          counter: <span id="value">{counter}</span>{' '}
        </div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={incrementBy}>incrementBy</button>
      </div>
    </div>
  )
}
export default MyComponent
ReactDOM.render(<MyComponent />, document.getElementById('app'))
