'use strict'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { listProducts } from '../../actions/products'
import { ping } from '../../actions/ping'

@connect((state) => ({
  products: state.products,
  isPinging: state.ping.isPinging
}), { listProducts, ping })
export default class App extends Component {

  componentDidMount() {
    this.props.listProducts()
    //Testing RxJS:
    this.props.ping()
  }

  render() {
    const { products: { productsList }, isPinging } = this.props
    return (
      <div className="App">
        <p>isPinging = { JSON.stringify(isPinging) }</p>
        <p>Response from products micro-services:</p>
        {
          productsList && productsList.map((product, i) =>
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