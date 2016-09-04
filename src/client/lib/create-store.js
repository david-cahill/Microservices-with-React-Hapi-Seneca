import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import products from '../reducers/products'

export default createStore(products, applyMiddleware(thunk))

