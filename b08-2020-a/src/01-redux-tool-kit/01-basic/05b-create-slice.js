import React from 'react'
import ReactDOM from 'react-dom'
const container = document.createElement('div')
container.id = 'app'
document.body.appendChild(container)

import {
  configureStore,
  createSlice    // [!] introducing createSlice
                 // createAction and createReducer are merged into createSlice
} from '@reduxjs/toolkit'

//
// Slice are createAction and createReducer merged into one !
//
// const initialState = 1  // <-- also initialState is now a property of object in the calling argument
//

const counterSlice = createSlice({
  name: 'counter',   // nameSpace
  initialState: 1,
  reducers: {
    increase: state => state + 1,   // this is call the "case reducer"
    decrease: state => state - 1
  }
})

// Before we called actionCreator to get an action:
//
const createAction = require('@reduxjs/toolkit').createAction
const action_increment = createAction('counter/increase')
console.log('(before): ',  action_increment())           // {type: 'counter/increase', payload: undefine }
//
// Now the actionCreator is one of the property in conterSlice.actions:
//
console.log('(now): ',  counterSlice.actions.increase()) // {type: 'counter/increase', payload: undefine }

// Here is a Review:
//
console.log( 'properties of slice: '          , Object.keys(counterSlice) )                      // ["name", "reducer", "actions", "caseReducers"]
console.log( 'name: '                         , counterSlice.name     )                          // 'counter'
console.log( 'caseReducers.increase: '        , counterSlice.caseReducers.increase.toString() )  // function increase(state) { return state + 1; }
console.log( 'actions.increase("myPayload"): ', counterSlice.actions.increase('myPayload') )     // {"type":"counter/increase","payload":"myPayload"}
console.log( 'reducer: '                      , counterSlice.reducer.toString())                 // give the RTK reducer f(state, action)

const store = configureStore({
  reducer: counterSlice.reducer
})


// Component's handlers
const handle_increment = () => {
  console.log('inc')
  store.dispatch( counterSlice.actions.increase() ) // { type: 'counter/increase' } <-- Note the namespace
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
