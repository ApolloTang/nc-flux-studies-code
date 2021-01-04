import React from 'react'
import ReactDOM from 'react-dom'
const container = document.createElement('div')
container.id = 'app'
document.body.appendChild(container)

import {
  configureStore
  , createAction    // Introducing createAction
} from '@reduxjs/toolkit'

// This is how you use "createAction":

  const action_increment = createAction('INCREMENT')
  const action_decrement = createAction('DECREMENT')

// createAction generates "action creator function":
//

  console.log( action_increment() )     // {"type":"INCREMENT"}

//
// So the createAction should have named "actionCreatorFunctionFactory".
//
// However, the 'action creator function' is actually different from the
// "classical-actionCreator". The "classical-actionCreator" is callable to
// generate an action object. The "RTK-actionCreator" is a function
// and an object at the same time.
//
// Meaning it is callable to give an action object: {type: "INCREASE"},
// but it is also an object with property "type"
// which has the value of action name:

  console.log( action_increment.type )  // INCREMENT

// You will see how this is useful later in 06b
//

const initialState = 1

// reducer
function counter( state = initialState, action ) {
  switch (action.type) {
    case action_increment.type:
      return state + 1
    case action_decrement.type:
      return state - 1
    default:
      return state
  }
}

const store = configureStore({
  reducer: counter
})


// Component's handlers
const handle_increment = () => {
  console.log('inc')
  store.dispatch( action_increment() )
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
