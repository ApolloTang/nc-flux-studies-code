import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './reducers'

import {
  createStore,
  applyMiddleware,
  compose
} from 'redux'

import { createLogger } from 'redux-logger'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const middleware = [
  createLogger()
]

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(...middleware)
  )
)

const container = document.createElement('div')
container.id = 'root'
document.body.appendChild(container)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
