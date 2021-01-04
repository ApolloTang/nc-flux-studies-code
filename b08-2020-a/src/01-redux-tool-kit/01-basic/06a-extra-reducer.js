import React from 'react'
import ReactDOM from 'react-dom'
const container = document.createElement('div')
container.id = 'app'
document.body.appendChild(container)

import {
  configureStore,
  createSlice,
} from '@reduxjs/toolkit'

// Slice
const counterSlice = createSlice({
  name: 'counter',
  initialState: 1,
  reducers: {
    increase: state => state + 1,
    decrease: state => state - 1
  }
})

console.log( Object.keys(counterSlice) ) // ["name", "reducer", "actions", "caseReducers"]

const store = configureStore({
  reducer: counterSlice.reducer
})


// Component's event handlers
const handle_increment = () => {
  console.log('inc')
  store.dispatch( counterSlice.actions.increase() ) // { type: 'counter/increase' }
}

const handle_decrement = () => {
  console.log('dec')
  store.dispatch( counterSlice.actions.decrease() )
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
        <button onClick={handle_increment}>+</button>
        <button onClick={handle_decrement}>-</button>
      </div>
    </div>
  )
}
export default MyComponent
ReactDOM.render(<MyComponent />, document.getElementById('app'))
