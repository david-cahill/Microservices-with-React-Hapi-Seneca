'use strict'
module.exports = {
  client: [
    { type: 'web', port: 10101, pin: 'role:users,cmd:*'},
    { type: 'web', port: 10102, pin: 'role:products,cmd:*'}
  ]
}