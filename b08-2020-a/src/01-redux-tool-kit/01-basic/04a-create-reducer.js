import React from 'react'
import ReactDOM from 'react-dom'
const container = document.createElement('div')
container.id = 'app'
document.body.appendChild(container)

import {
  configureStore,
  createAction
} from '@reduxjs/toolkit'

const action_increment = createAction('INCREMENT')
const action_decrement = createAction('DECREMENT')

const initialState = 1

// reducer
const counterReducer = ( 
  state = initialState,
  action 
) => {
  switch (action.type) {
    case action_increment.type:  // action_increment.type --> INCREMENT
      return state + 1
    case action_decrement.type:
      return state - 1
    default:
      return state
  }
}
 
const store = configureStore({
  reducer: counterReducer
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
