import initialState from '../lib/initial-state'
export default function (state = initialState, action) {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return {
        ...state,
        products: action.products
      }
    break
    default:
      return state
  }
}