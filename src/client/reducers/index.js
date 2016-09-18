import { combineReducers } from 'redux'
import products from './products'
import users from './users'
import ping from './ping'
export default combineReducers({
  products,
  users,
  ping
})
