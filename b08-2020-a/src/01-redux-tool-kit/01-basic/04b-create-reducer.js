import React from 'react'
import ReactDOM from 'react-dom'
const container = document.createElement('div')
container.id = 'app'
document.body.appendChild(container)

import {
  configureStore,
  createAction     // <--- Remember! this is the "action creator generator"
  , createReducer  // <--- Introducing createReducer
} from '@reduxjs/toolkit'

const action_increment = createAction('INCREMENT')
const action_decrement = createAction('DECREMENT')

const initialState = 1

// reducerCreator
const counterReducer_RTK = createReducer( // <--- createReducer is like a "Reducer Generator" it generate RTK reducer
  initialState,
  // no need to handle action
  {
    // switch have been replaced by an object of case reducers
    [action_increment.type]:   // action_increment.type --> INCREMENT
      state => state + 1,      // This is the case reducer function
    [action_decrement.type]:
      state => state - 1
    // no longer need to handle default case
  }
)

// createReducer generates an RTK reducer
// RTK reducer is similar classical reducer but more complex:
//
  console.log('counterReducer_RTK: ', counterReducer_RTK.toString())
//
// counterReducer_RTK: ƒ (state, action) {
//    if (state === void 0) {
//      state = initialState;
//    }
//    var caseReducers = [actionsMap[action.type]].concat(finalActionMatchers.filter(function (_ref2) {
//    ...
//    ...

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
