import superagent from 'superagent'

function setProducts(productsList) {
  return {
    type: 'SET_PRODUCTS',
    productsList
  }
}

export function listProducts() {
  return (dispatch) => {
    return superagent
      .get('/api/0.1/products')
      .end((err, { body }) => {
        if (err) return console.error((err))
        return dispatch(setProducts(body))
      })
  }
}
