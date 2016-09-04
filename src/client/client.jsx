'use strict'
import React from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import App from './components/App/App.jsx'
import store from './lib/create-store'
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
