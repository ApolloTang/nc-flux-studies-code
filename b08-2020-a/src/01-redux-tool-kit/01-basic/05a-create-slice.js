import React from 'react'
import ReactDOM from 'react-dom'
const container = document.createElement('div')
container.id = 'app'
document.body.appendChild(container)

import {
  configureStore,
  createAction,
  createReducer
} from '@reduxjs/toolkit'

const action_increment = createAction('INCREMENT')
const action_decrement = createAction('DECREMENT')

const initialState = 1

// reducerCreator
const counterReducer_RTK = createReducer(
  initialState,
  {
    [action_increment.type]: state => state + 1,
    [action_decrement.type]: state => state - 1
  }
)

const store = configureStore({
  reducer: counterReducer_RTK
})


// Component's handlers
const handle_increment = () => {
  console.log('inc')
  store.dispatch( action_increment() )  // action_increment() --> {"type":"INCREMENT"}
}

const handle_decrement = () => {
  console.log('dec')
  store.dispatch( action_decrement() )
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
