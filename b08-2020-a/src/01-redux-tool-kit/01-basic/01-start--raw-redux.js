import React from 'react'
import ReactDOM from 'react-dom'
const container = document.createElement('div')
container.id = 'app'
document.body.appendChild(container)

import { 
  createStore
} from 'redux'

const initialState = 1
// reducer
function counter( state = initialState, action ) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}


const store = createStore(
  counter
)


// Component's handlers
const handle_increment = () => {
  console.log('inc')
  store.dispatch({ type: 'INCREMENT' })
}

const handle_decrement = () => {
  console.log('dec')
  store.dispatch({ type: 'DECREMENT' })
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
