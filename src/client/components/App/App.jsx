'use strict'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { listProducts } from '../../actions/products'

@connect((state) => ({
  products: state.products
}), { listProducts })
export default class App extends Component {

  componentDidMount() {
    this.props.listProducts()
  }

  render() {
    return (
      <div className="App">
        <p>Response from products micro-service:</p>
        {
          this.props.products.map((product, i) =>
            (<div key={i}>
              <p>Product ID: {product.id}</p>
              <p>Product name: {product.name}</p>
            </div>)
          )
        }
      </div>
    )
  }
}