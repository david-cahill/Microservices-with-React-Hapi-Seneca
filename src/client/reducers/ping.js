import initializeReducer from '../lib/initialize-reducer'
export default initializeReducer({ isPinging: false }, {
  PING: (state) => ({ ...state, isPinging: true }),
  PONG: (state) => ({ ...state, isPinging: false })
})
