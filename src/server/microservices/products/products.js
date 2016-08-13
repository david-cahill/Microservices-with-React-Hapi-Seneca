'use strict'
import config from './config'
const seneca = require('seneca')(config)
const role = 'products'

seneca.add({role, cmd: 'list' }, cmd_list)

seneca.listen()

function cmd_list (args, done) {
  return done(null, [{ id: 1, name: 'product 1'}])
}

seneca.ready(() => {
  process.send('ready')
})
