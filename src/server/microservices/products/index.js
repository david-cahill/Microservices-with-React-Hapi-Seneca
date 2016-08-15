require('babel-register')
const config = require('./config')
const seneca = require('seneca')(config)
seneca.use(require('./products.js'))

module.exports = seneca