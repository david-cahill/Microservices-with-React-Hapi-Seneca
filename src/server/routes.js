'use strict'
import { resolve } from 'path'
const apiVersion = '0.1'
const products = require('./api/products')(apiVersion)

export default [
  ...products,
  {
    method: 'GET',
    path: '/',
    handler: {
      file: resolve(__dirname, 'index.html')
    }
  },
  {
    method: 'GET',
    path: '/bundle.js',
    handler: {
      file: resolve(__dirname, '../../public/bundle.js' )
    }
  }
]