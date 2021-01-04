import React from 'react'
import ReactDOM from 'react-dom'
const container = document.createElement('div')
container.id = 'app'
document.body.appendChild(container)

import {
  configureStore,
  createSlice,
  createAction, // Remember you learn this this in 03b
} from '@reduxjs/toolkit'

// Lets bring back createAction
//
const action_incrementBy = createAction('namespace/counter/incrementBy')
//
// Remember you learned earlier that createAction is a factory for RTK-actionCreator:
// RTK-actionCreator has dual identity -- it is a function and an object at the same time.
//
console.log( '(1)', action_incrementBy('myPayload') )  // {"type":"namespace/counter/incrementBy","payload":"myPayload"}
console.log( '(2)', action_incrementBy.type )          // "namespace/counter/incrementBy"


// Slice
const counterSlice = createSlice({
  name: 'counter',               // 'nameSpace'
  initialState: 1,
  reducers: {
    increase: state => state + 1,
    decrease: state => state - 1
  },
  extraReducers: {               // extraReducers liberates you from the constrain of 'namespace'.
    'some/other/action'          // This caseReducers' key is an action-name, it is listening for some x-reducer-communication.
      : (state, action) => {
        return state + 1
      },
    [action_incrementBy]         // This caseReducers' has a dynamic computed key, it holds a value of actionCreatorFunction.
                                 // Remember actionCreatorFunction.type store the action name, it will be use as the action-name
                                 // for this caseReducer
      : (state, action) => {
        return state + action.payload
      },
  }
})

console.log( Object.keys(counterSlice) ) // Recall slices has the following keys: ["name", "reducer", "actions", "caseReducers"]

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

const handle_crossReducerCommunication = () => {
  console.log('crossReducerCommunication')
  store.dispatch({ type: 'some/other/action' }) // <-- cross reducer communication
}

const handle_incrementBy100 = () => {
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
        <button onClick={handle_increment                }>+</button>
        <button onClick={handle_decrement                }>-</button>
        <button onClick={handle_incrementBy100           }>incrementBy100</button>
        <button onClick={handle_crossReducerCommunication}>some/other/action</button>
      </div>
    </div>
  )
}
export default MyComponent
ReactDOM.render(<MyComponent />, document.getElementById('app'))
