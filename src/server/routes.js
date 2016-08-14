'use strict'
import { resolve } from 'path'
export default [{
  method: 'GET',
  path: '/',
  handler: {
    file: resolve(__dirname, 'index.html')
  }
}, {
  method: 'GET',
  path: '/bundle.js',
  handler: {
    file: resolve(__dirname, '../../public/bundle.js' )
  }
}]