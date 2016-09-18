import { createStore, applyMiddleware, compose } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import rootEpic from '../epics'

const epicMiddleware = createEpicMiddleware(rootEpic)

const storeEnhancer = compose(
  applyMiddleware(...[thunk, epicMiddleware]),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)

const store = createStore(rootReducer, {}, storeEnhancer)

if (window.devToolsExtension) window.devToolsExtension.updateStore(store)

export default store
