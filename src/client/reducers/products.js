import initializeReducer from '../lib/initialize-reducer'
export default initializeReducer({ productsList: [] }, {
  SET_PRODUCTS: (state, { productsList }) => ({ ...state, productsList })
})
