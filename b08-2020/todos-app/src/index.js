import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { App } from './app'
import { rootReducer } from './root-reducer'

import {
  configureStore
} from '@reduxjs/toolkit'

import logger from 'redux-logger'

const store = configureStore(
  {
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
  }
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
