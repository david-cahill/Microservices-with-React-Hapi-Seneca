import initializeReducer from '../lib/initialize-reducer'
export default initializeReducer({ usersList: [] }, {
  FETCH_USERS: (state, { usersList }) => ({ ...state, usersList })
})
