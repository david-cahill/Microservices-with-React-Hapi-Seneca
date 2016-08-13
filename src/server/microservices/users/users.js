'use strict'
import config from './config'
const seneca = require('seneca')(config)
const role = 'users'

seneca.add({role, cmd: 'whazzup'}, cmd_whazzup)

seneca.listen()

seneca.ready(() => {
  process.send('ready')
})

function cmd_whazzup (args, done) {
  return done(null, {reply: 'yo!' })
}
